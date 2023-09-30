import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {AddMenuStyle, DropdownStyle} from './menu-style';
import {Dropdown} from 'react-native-element-dropdown';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Styles} from './../../../../layoutStyles';
import {API_URL} from '../../../../utils/constants';
import defaultPhoto from '../../../images/no-image.png';

export default function AddMenu({route, navigation}) {
  const [errors, setErrors] = useState('');
  const {type, item} = route.params || {
    type: 'new',
    item: null,
  };
  let pageTitle = '';

  if (type === 'edit') {
    pageTitle = 'Edit menu #' + item._id;
  } else {
    pageTitle = 'Add menu item';
  }
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState(1);
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [itemToDelete, setItemToDelete] = useState(null);

  const fetchCategory = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const response = await axios.get(
        `${API_URL}/menuCategory/?store_Id=${store_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const dropdownCategories = response.data.map(item => ({
        label: item.title,
        value: item._id,
      }));
      setCategories(dropdownCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDetail = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/menuItem/${item._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTitle(response.data.title);
      setPrice(response.data.price);
      setQty(response.data.quantity);
      setDescription(response.data.description);
      setCookingTime(response.data.cookingTime);
      setPhoto(response.data.photo);
      setCategory(
        response.data.menuCategories && response.data.menuCategories.length > 0
          ? response.data.menuCategories[0]._id
          : '',
      );
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCategory();
      if (type === 'edit') {
        fetchDetail();
      }
    }, []),
  );

  const handleAddMenu = async () => {
    return new Promise(async (resolve, reject) => {
      if (!title) {
        setErrors('Title is required.');
      } else if (!price) {
        setErrors('Price is required.');
      } else if (!category) {
        setErrors('Category is required.');
      } else if (!photo) {
        setErrors('Photo is required.');
      } else {
        setErrors('');

        try {
          const token = await AsyncStorage.getItem('access_token');
          const store_Id = await AsyncStorage.getItem('store_Id');
          const branch_Id = await AsyncStorage.getItem('branch_Id');

          const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          };

          const fileType = /(?:\.([^.]+))?$/.exec(photo)[1];
          const randomFileName =
            new Date().valueOf().toString() + '.' + fileType;
          const formData = new FormData();
          formData.append('title', title);
          formData.append('price', parseFloat(price));
          formData.append('qty', qty);
          formData.append('description', description);
          formData.append('cookingTime', cookingTime);
          formData.append('menuCategory_Id', category);
          formData.append('branch_Id', branch_Id);
          formData.append('store_Id', store_Id);
          formData.append('photo', {
            uri: photo,
            name: randomFileName,
            type: 'image/jpeg',
          });

          if (type === 'edit') {
            const response = await axios.patch(
              `${API_URL}/menuItem/${item._id}`,
              formData,
              {headers},
            );
            resolve(response.data._id);
          } else {
            const response = await axios.post(`${API_URL}/menuItem`, formData, {
              headers,
            });
            resolve(response.data._id);
          }
        } catch (error) {
          console.error(error);
          reject(error);
        }
      }
    });
  };

  const handleSaveMenu = async () => {
    const menuItemId = await handleAddMenu();
    navigation.navigate('Menus');
    setCategory('');
    setPhoto('');
    setTitle('');
    setPrice('');
    setQty('');
    setDescription('');
    setCookingTime('');
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        includeBase64: false,
      },
      response => {
        if (response.assets) {
          setPhoto(response.assets[0].uri);
        }
      },
    );
  };

  const handleOpenCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto(response.assets[0].uri);
      }
    });
  };
  const handleCancel = async () => {
    navigation.navigate('Menus');
  };
  const handleDeleteMenu = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.delete(`${API_URL}/menuItem/${item._id}`, {
        headers,
      });
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigation.navigate('Menus');
  };

  const showDeleteConfirmation = _id => {
    setItemToDelete(_id);
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => setItemToDelete(null), // Clear the item to delete
        },
        {
          text: 'Delete',
          onPress: () => {
            handleDeleteMenu(_id); // Call the delete function if confirmed
            setItemToDelete(null); // Clear the item to delete
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={AddMenuStyle.addMenuCon}>
      <View style={AddMenuStyle.addMenuContent}>
        <Text style={AddMenuStyle.addMenuTitle}>{pageTitle}</Text>
        <View style={AddMenuStyle.InputAndImageCont}>
          <View style={AddMenuStyle.addMenuForm}>
            <TextInput
              mode="outlined"
              style={AddMenuStyle.addMenuInput}
              placeholder="Title"
              placeholderTextColor="#777777"
              value={title}
              secureTextEntry={false}
              onChangeText={setTitle}
            />
            <View style={AddMenuStyle.inputRow}>
              <TextInput
                mode="outlined"
                style={AddMenuStyle.foodPrice}
                keyboardType="numeric"
                placeholder="Price"
                placeholderTextColor="#777777"
                value={price?.toString()}
                secureTextEntry={false}
                onChangeText={setPrice}
              />
              <View style={DropdownStyle.DropdownContainer}>
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  style={AddMenuStyle.foodPrice}
                  placeholder="Quantity"
                  placeholderTextColor="#777777"
                  value={qty?.toString()}
                  secureTextEntry={false}
                  onChangeText={setQty}
                />
              </View>
            </View>
            <TextInput
              mode="outlined"
              style={AddMenuStyle.descriptInput}
              numberOfLines={4}
              multiline={true}
              placeholder="Description"
              placeholderTextColor="#777777"
              value={description}
              secureTextEntry={false}
              onChangeText={setDescription}
            />
            <View style={AddMenuStyle.inputRow}>
              <View style={DropdownStyle.DropdownContainer}>
                <Dropdown
                  style={[
                    DropdownStyle.dropdown,
                    isFocus && {borderColor: '#007FFF'},
                  ]}
                  placeholderStyle={DropdownStyle.placeholderStyle}
                  selectedTextStyle={DropdownStyle.selectedTextStyle}
                  inputSearchStyle={DropdownStyle.inputSearchStyle}
                  iconStyle={DropdownStyle.iconStyle}
                  itemTextStyle={{
                    color: '#585858',
                    fontFamily: 'Quicksand-SemiBold',
                  }}
                  data={categories}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Category'}
                  value={category}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    // console.log({item});
                    setCategory(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
              <TextInput
                mode="outlined"
                style={AddMenuStyle.foodPrice}
                placeholder="Cooking Time"
                placeholderTextColor="#777777"
                value={cookingTime}
                keyboardType="numeric"
                onChangeText={setCookingTime}
              />
            </View>
            {errors !== '' && (
              <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
            )}
            <View style={DropdownStyle.DropdownContainer}>
              {/* 
              For Future
              <Dropdown
                style={[
                  DropdownStyle.dropdown,
                  isFocus && {borderColor: '#007FFF'},
                ]}
                placeholderStyle={DropdownStyle.placeholderStyle}
                selectedTextStyle={DropdownStyle.selectedTextStyle}
                inputSearchStyle={DropdownStyle.inputSearchStyle}
                iconStyle={DropdownStyle.iconStyle}
                data={filterAvalable}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Add-ons'}
                value={addons}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setAvailability(item.availability);
                  setIsFocus(false);
                }}
              /> */}
            </View>
          </View>
          <View style={AddMenuStyle.uploadMenuImg}>
            <View style={Styles.verContainer}>
              <View
                style={{
                  backgroundColor: '#ddd',
                  borderColor: '#ddd',
                  borderWidth: 1,
                  padding: 5,
                }}>
                <Image
                  source={photo ? {uri: photo} : defaultPhoto}
                  style={{width: '100%', height: 150}}
                />
              </View>
              <View style={Styles.horContainer}>
                <Button
                  style={Styles.btn}
                  title="Open Camera"
                  onPress={handleOpenCamera}
                />
                <Button title="Choose Photo" onPress={handleChoosePhoto} />
              </View>
            </View>
          </View>
        </View>
        <View style={AddMenuStyle.buttons}>
          <TouchableOpacity
            style={[AddMenuStyle.menuFormBtn, AddMenuStyle.cancelOpacity]}
            // onPress={handleQuantity}
            onPress={handleCancel}>
            <Text style={AddMenuStyle.addMenuTextBtn}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[AddMenuStyle.menuFormBtn, AddMenuStyle.addMenuOpacity]}
            onPress={handleSaveMenu}>
            <Text style={AddMenuStyle.addMenuTextBtn}>Save</Text>
          </TouchableOpacity>

          {type === 'edit' && (
            <TouchableOpacity
              style={[AddMenuStyle.menuFormBtn, AddMenuStyle.deleteMenuOpacity]}
              onPress={showDeleteConfirmation}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
