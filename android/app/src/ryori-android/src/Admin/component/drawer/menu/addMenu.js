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
import {launchImageLibrary} from 'react-native-image-picker';
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
  const [label, setLabel] = useState('');
  const [food, setFood] = useState('1');

  const handlePost = async () => {
    try {
      const response = await axios.post(`${API_URL}/menu-category`, {
        label: label,
        image: image,
        food: food,
      });
      console.log(response.data);
      navigation.navigate('Menu');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      // console.log(response);
      if (response) {
        setPhoto(response);
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
              placeholder="Store Name"
              placeholderTextColor="#777777"
              value={label}
              secureTextEntry={false}
              onChangeText={setLabel}
            />
            <View style={AddMenuStyle.inputRow}>
              <TextInput
                mode="outlined"
                style={AddMenuStyle.foodPrice}
                placeholder="Price"
                placeholderTextColor="#777777"
                value={image}
                secureTextEntry={false}
                onChangeText={setImage}
              />
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
                  data={filterAvalable}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Availability'}
                  value={availability}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setAvailability(item.availability);
                    setIsFocus(false);
                  }}
                />
              </View>
            </View>
            <TextInput
              mode="outlined"
              style={AddMenuStyle.descriptInput}
              numberOfLines={4}
              multiline={true}
              placeholder="Descriptions"
              placeholderTextColor="#777777"
              value={food}
              secureTextEntry={false}
              onChangeText={setFood}
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
                value={foodName}
                secureTextEntry={false}
                onChangeText={setFoodName}
              />
            </View>
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
                data={filterAvalable}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Availability'}
                value={availability}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setAvailability(item.availability);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View style={AddMenuStyle.uploadMenuImg}>
            <View style={AddMenuStyle.uploadIm2}>
              <Text>Heelo</Text>
              <View style={AddMenuStyle.imgContainer}>
                {photo && (
                  <>
                    <Image
                      source={{uri: photo.uri}}
                      style={{width: 80, height: 80}}
                    />
                    <Button title="Upload Photo" onPress={handleUploadPhoto} />
                  </>
                )}
                <Button title="Choose Photo" onPress={handleChoosePhoto} />
              </View>
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
