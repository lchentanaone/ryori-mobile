/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
  Button,
} from 'react-native';
import {overviewStyle} from '../overview-style';
import ryoriLogo from '../../../images/logo/RYORI-Logo.png';
import Header from '../header';
import Entypo from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';
import {addMenuStyle} from './addMenu-style';
import {Dropdown} from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const data = [
  {label: 'Yes', value: 'Yes'},
  {label: 'No', value: 'No'},
];
const categories = [
  {label: 'Test', value: 'Test'},
  {label: 'Test2', value: 'Test2'},
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

const SERVER_URL = 'http://localhost:3000';

export default function AddMenu({navigation}) {
  const [availability, setAvailability] = useState(null);
  const [category, setCategory] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [label, setlabel] = useState('');
  const [image, setImage] = useState('');
  const [food, setFood] = useState('');

  const API_URL = 'http://10.0.2.2:3000';

  const handlePost = async () => {
    try {
      const response = await axios.post(`${API_URL}/menu-category`, {
        label: label,
        image: image,
        food: food,
      });
      console.log(response.data);
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
    <View style={overviewStyle.container}>
      <Header />
      <View style={overviewStyle.menu}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Entypo name="menu" size={30} color="#48e88e" />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={ryoriLogo}
        style={overviewStyle.ryoriLogoLogin}
      />
      <View style={overviewStyle.circleContainer}>
        <View style={overviewStyle.circle} />
      </View>
      <View style={addMenuStyle.addMenuContainer}>
        <Text style={addMenuStyle.newMenuText}>New Menu</Text>
        <View style={addMenuStyle.textFields}>
          <View style={addMenuStyle.fieldsrow1Img}>
            <View>
              <View style={addMenuStyle.fieldsrow1}>
                <TextInput
                  mode="outlined"
                  style={addMenuStyle.inputName}
                  placeholder="name"
                  value={label}
                  onChangeText={label => setlabel(label)}
                />
                <Dropdown
                  style={[
                    addMenuStyle.AvailDropdown,
                    isFocus && {borderColor: 'blue'},
                  ]}
                  placeholderStyle={addMenuStyle.placeholderStyle}
                  selectedTextStyle={addMenuStyle.selectedTextStyle}
                  inputSearchStyle={addMenuStyle.inputSearchStyle}
                  iconStyle={addMenuStyle.iconStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Availability' : '...'}
                  value={availability}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setAvailability(item.availability);
                    setIsFocus(false);
                  }}
                />
              </View>
              <View style={addMenuStyle.fieldsrow2}>
                <TextInput
                  mode="outlined"
                  style={addMenuStyle.description}
                  numberOfLines={4}
                  multiline={true}
                  placeholder="Description"
                  value={image}
                  onChangeText={image => setImage(image)}
                />
              </View>
              <View style={addMenuStyle.fieldsrow3}>
                <Dropdown
                  style={[
                    addMenuStyle.categoryDropdown,
                    isFocus && {borderColor: 'blue'},
                  ]}
                  placeholderStyle={addMenuStyle.placeholderStyle}
                  selectedTextStyle={addMenuStyle.selectedTextStyle}
                  inputSearchStyle={addMenuStyle.inputSearchStyle}
                  iconStyle={addMenuStyle.iconStyle}
                  data={categories}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Category'}
                  value={category}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setCategory(item.category);
                    setIsFocus(false);
                  }}
                />
                <View style={addMenuStyle.inputTimer}>
                  <TextInput
                    mode="outlined"
                    style={addMenuStyle.inputTime}
                    placeholder="Time"
                    value={food}
                    onChangeText={food => setFood(food)}
                  />
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={20}
                    color={'black'}
                    style={addMenuStyle.timerIcon}
                  />
                </View>
              </View>
            </View>
            <View style={addMenuStyle.imgContainer}>
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
          <View style={addMenuStyle.ingredientContainer}>
            <Text style={addMenuStyle.ingredienText}>Ingredients</Text>
            <View style={addMenuStyle.ingredientContent}></View>
          </View>
          {/*<View style={addMenuStyle.addOns}>
            <Dropdown
              style={[
                addMenuStyle.addOnsDropdown,
                isFocus && {borderColor: 'blue'},
              ]}
              placeholderStyle={addMenuStyle.placeholderStyle}
              selectedTextStyle={addMenuStyle.selectedTextStyle}
              inputSearchStyle={addMenuStyle.inputSearchStyle}
              iconStyle={addMenuStyle.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Add-ons'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
            <View style={addMenuStyle.bottomTextfield}>
              <TextInput
                mode="outlined"
                style={addMenuStyle.textInput}
                placeholder="Calorie"
              />
              <TextInput
                mode="outlined"
                style={addMenuStyle.textInput}
                placeholder="Cost"
              />
              <TextInput
                mode="outlined"
                style={addMenuStyle.textInput}
                placeholder="Price"
              />
            </View>
          </View> */}
          <View style={addMenuStyle.btnContainer}>
            <View style={addMenuStyle.cancelBtn}>
              <TouchableOpacity style={addMenuStyle.btnCancelOpacity}>
                <Text style={addMenuStyle.textBtn}>CANCEL</Text>
              </TouchableOpacity>
            </View>
            <View style={addMenuStyle.saveBtn}>
              <TouchableOpacity
                style={addMenuStyle.btnCSaveOpacity}
                onPress={handlePost}>
                <Text style={addMenuStyle.textBtn}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
