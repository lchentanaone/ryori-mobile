import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {AddMenuStyle, DropdownStyle} from './menu-style';
import {Dropdown} from 'react-native-element-dropdown';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants'
export default function AddMenu({route, navigation}) {
  const {type, item} = route.params || {
    type: 'new',
    item: null,
  };
  let pageTitle = '';

  if (type === 'edit') {
    // console.log({item})
    pageTitle = 'Edit menu #' + item.id;
  } else {
    pageTitle = 'Add menu item';
  }

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');
  const [isFocus, setIsFocus] = useState(false);
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const fetchCategory = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/menuCategory/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log('categories: ', response.data)
      const dropdownCategories = response.data.map(item => ({
        label: item.title,
        value: item.id,
      }));
      setCategories(dropdownCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDetail = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/menuItem/${item.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log({data: response.data});
      setTitle(response.data.title);
      setPrice(response.data.price);
      setQty(response.data.quantity);
      setDescription(response.data.description);
      setCookingTime(response.data.cookingTime);
      setPhoto(response.data.photo);
      setCategory(
        response.data.menuCategory.length > 0
          ? response.data.menuCategory[0].id
          : '',
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategory();
    if (type === 'edit') {
      fetchDetail();
    }
  }, [item]);
  const handlePost = async () => {
    try {
      if (type === 'edit') {
        const token = await AsyncStorage.getItem('access_token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.patch(
          `${API_URL}/menuItem/${item.id}`,
          {
            title,
            price,
            photo,
            // quantity: qty,
            description,
            cookingTime,
            branch_Id: 1,
            category_Id: category,
          },
          {headers},
        );
        console.log({
          title,
          price,
          photo,
          // quantity: qty,
          description,
          cookingTime,
          branch_Id: 1,
          category_Id: category,
        });
      } else {
        const token = await AsyncStorage.getItem('access_token');
        const store_Id = await AsyncStorage.getItem('store_Id');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(
          `${API_URL}/menuItem`,
          {
            title,
            price,
            photo,
            // quantity: qty,
            description,
            cookingTime,
            branch_Id: 1,
            category_Id: 1,
            store_Id,
          },
          {headers},
        );
        AsyncStorage.setItem('menuItem_Id', response.data.id.toString());
        // const clearId =() =>{

        // }
      }
      navigation.navigate('Menu');
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantity = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const menuItem_Id = await AsyncStorage.getItem('menuItem_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.post(
        `${API_URL}/branchItem`,
        {
          branch_Id,
          menuItem_Id,
          quantity: qty,
        },
        {headers},
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    await handlePost();
    await handleQuantity();
    navigation.navigate('Menu');
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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API_URL}/menuItem/${item.id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigation.navigate('Menu');
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
                value={price.toString()}
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
                  value={qty.toString()}
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
                  data={categories}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Category'}
                  value={category}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    console.log({item});
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
            <View style={AddMenuStyle.imgContainer}>
              <View style={{marginBottom: 10}}>
                {photo && (
                  <Image
                    source={{uri: photo}}
                    style={{width: 200, height: 200}}
                  />
                )}
              </View>
              <View style={{marginBottom: 5}}>
                <Button title="Open Camera" onPress={handleOpenCamera} />
              </View>
              <Button title="Choose Photo" onPress={handleChoosePhoto} />
            </View>
          </View>
        </View>
        <View style={AddMenuStyle.buttons}>
          <View style={AddMenuStyle.addMenuBtn}>
            <TouchableOpacity
              style={AddMenuStyle.cancelOpacity}
              // onPress={handleQuantity}
              onPress={() => navigation.navigate('Menu')}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={AddMenuStyle.updateMenuBtn}>
            <TouchableOpacity
              style={AddMenuStyle.deleteMenuOpacity}
              onPress={handleDelete}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={AddMenuStyle.addMenuBtn}>
            <TouchableOpacity
              style={AddMenuStyle.addMenuOpacity}
              onPress={handleSave}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
