import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {AddMenuStyle, DropdownStyle} from './menu-style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import axios from 'axios';

const filterAvalable = [
  {label: 'Available', value: 'Available'},
  {label: 'Not Available', value: 'Not Available'},
];
const categories = [
  {label: 'Pork', value: 'Pork'},
  {label: 'Drinks', value: 'Drinks'},
];

const createFormData = (photo, body = {}) => {
  const data = new FormData();
  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });
  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });
  return data;
};

export default function AddMenu({navigation}) {
  const SERVER_URL = 'http://localhost:3000';
  const API_URL = 'http://10.0.2.2:3000';

  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [photo, setPhoto] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [food, setFood] = useState('1');

  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const handlePost = async () => {
    try {
      console.log("HERE I AM", {
        title,
        photo,
        price,
        quantity: qty,
        description,
        cookingTime,
        branch_Id: 1,
        category_Id: 1
      })
      const response = await axios.post(`${API_URL}/menuItem`, {
        title,
        price,
        photo,
        quantity: qty,
        description,
        cookingTime,
        branch_Id: 1,
        category_Id: 1
      });
      console.log(response.data);
      navigation.navigate('Menu');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
    }, response => {
      console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  const handleOpenCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, {userId: '123'}),
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  return (
    <View style={AddMenuStyle.addMenuCon}>
      <View style={AddMenuStyle.addMenuContent}>
        <Text style={AddMenuStyle.addMenuTitle}>Add new Menu</Text>
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
                placeholder="Price"
                placeholderTextColor="#777777"
                value={price}
                secureTextEntry={false}
                onChangeText={setPrice}
              />
              <View style={DropdownStyle.DropdownContainer}>
                <TextInput
                  mode="outlined"
                  style={AddMenuStyle.foodPrice}
                  placeholder="Quantity"
                  placeholderTextColor="#777777"
                  value={qty}
                  secureTextEntry={false}
                  onChangeText={setQty}
                />
                {/* <Dropdown
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
                  placeholder={'Quantity'}
                  value={availability}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setQty(item.availability);
                    setIsFocus(false);
                  }}
                /> */}
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
                  value={categories}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setCategory(item.availability);
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
                secureTextEntry={false}
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
                <View style={{ marginBottom: 10 }}>
                  {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />}    
                </View>
                <View style={{ marginBottom: 5 }}>
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
              onPress={() => navigation.navigate('Menu')}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={AddMenuStyle.addMenuBtn}>
            <TouchableOpacity
              style={AddMenuStyle.addMenuOpacity}
              onPress={handlePost}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
