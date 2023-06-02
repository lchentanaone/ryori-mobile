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
  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [image, setImage] = useState('');

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
        <View style={AddMenuStyle.addMenuForm}>
          <Text style={AddMenuStyle.addMenuTitle}>Add new Menu</Text>
          <TextInput
            mode="outlined"
            style={AddMenuStyle.addMenuInput}
            placeholder="Store Name"
            placeholderTextColor="#777777"
            value={foodName}
            secureTextEntry={false}
            onChangeText={setFoodName}
          />
          <View style={AddMenuStyle.inputRow}>
            <TextInput
              mode="outlined"
              style={AddMenuStyle.foodPrice}
              placeholder="Price"
              placeholderTextColor="#777777"
              value={foodName}
              secureTextEntry={false}
              onChangeText={setFoodName}
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
            value={foodName}
            secureTextEntry={false}
            onChangeText={setFoodName}
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
          <View style={AddMenuStyle.buttons}>
            <View style={AddMenuStyle.addMenuBtn}>
              <TouchableOpacity
                style={AddMenuStyle.cancelOpacity}
                onPress={() => navigation.navigate('Update Menu')}>
                <Text style={AddMenuStyle.addMenuTextBtn}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={AddMenuStyle.addMenuBtn}>
              <TouchableOpacity
                style={AddMenuStyle.addMenuOpacity}
                onPress={() => navigation.navigate('Menu')}>
                <Text style={AddMenuStyle.addMenuTextBtn}>Save</Text>
              </TouchableOpacity>
            </View>
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
    </View>
  );
}
