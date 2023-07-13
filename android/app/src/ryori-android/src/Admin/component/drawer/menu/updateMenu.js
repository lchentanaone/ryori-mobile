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
import {Dropdown} from 'react-native-element-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants'
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

export default function UpdateMenu({route, navigation}) {
  const itembyId = route.params;
  // console.log('updateMenu', itembyId);

  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [image, setImage] = useState('');
  const [items, setItems] = useState(itembyId.item);
  const [label, setLabel] = useState('');
  const [food, setFood] = useState('1');
  const [editId, setEditId] = useState();
  const [time, setTime] = useState('');

  // update one by id
  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `${API_URL}/menu-category/` + itembyId.item.id,
        {
          label,
          image,
          food,
        },
      );
      setLabel(response.label);
      setImage(response.image);
      setFood(response.food);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigation.navigate('Menu');
  };

  // delete one by id
  const handleDelete = async item => {
    try {
      const response = await axios.delete(
        `${API_URL}/menu-category/` + item.id,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigation.navigate('Menu');
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
        <Text style={AddMenuStyle.addMenuTitle}>Edit Menu</Text>
        <View style={AddMenuStyle.InputAndImageCont}>
          <View style={AddMenuStyle.addMenuForm}>
            <TextInput
              mode="outlined"
              style={AddMenuStyle.addMenuInput}
              placeholder="Food name"
              placeholderTextColor="#777777"
              // value={itembyId.label}
              defaultValue={items.label}
              onChangeText={label => setLabel(label)}
            />
            <TextInput
              mode="outlined"
              style={AddMenuStyle.addMenuInput}
              placeholder="Food"
              placeholderTextColor="#777777"
              value={food}
              onChangeText={food => setFood(food)}
            />
            <View style={AddMenuStyle.inputRow}>
              <TextInput
                mode="outlined"
                style={AddMenuStyle.foodPrice}
                placeholder="Price"
                placeholderTextColor="#777777"
                defaultValue={items.image}
                onChangeText={image => setImage(image)}
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
                value={time}
                secureTextEntry={false}
                onChangeText={setTime}
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
                    {this.state.ImageURI !== '' ? (
                      <Image source={this.state.ImageURI} />
                    ) : null}
                    <Button title="Upload Photo" onPress={handleUploadPhoto} />
                  </>
                )}
                <Button title="Choose Photo" onPress={handleChoosePhoto} />
              </View>
            </View>
          </View>
        </View>

        <View style={AddMenuStyle.buttons}>
          <View style={AddMenuStyle.updateMenuBtn}>
            <TouchableOpacity
              style={AddMenuStyle.cancelOpacity}
              onPress={() => navigation.navigate('Menu')}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={AddMenuStyle.updateMenuBtn}>
            <TouchableOpacity
              style={AddMenuStyle.addMenuOpacity}
              onPress={() => handleUpdate(items)}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={AddMenuStyle.updateMenuBtn}>
            <TouchableOpacity
              style={AddMenuStyle.deleteMenuOpacity}
              onPress={() => handleDelete(items)}>
              <Text style={AddMenuStyle.addMenuTextBtn}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
