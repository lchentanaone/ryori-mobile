import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {MenuStyle, DropdownStyle, AddMenuStyle} from './menu-style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import {DataTable} from 'react-native-paper';
import menuImage from '../../../images/Chicken.jpg';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';

const filterAvalable = [
  {label: 'Available', value: 'Available'},
  {label: 'Not Available', value: 'Not Available'},
];
const categories = [
  {label: 'All', value: 'All'},
  {label: 'Pork', value: 'Pork'},
  {label: 'Drinks', value: 'Drinks'},
];

export default function Menu({navigation}) {
  const API_URL = 'http://10.0.2.2:3000';

  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [items, setItems] = useState([]);
  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  const [editId, setEditId] = useState();
  const [photo, setPhoto] = useState('');
  const [foodName, setFoodName] = useState('');
  const [food, setFood] = useState();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [itemss, setItemss] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/menuItem/`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  const EditItemId = item => {
    setLabel(item.label);
    setImage(item.image);
    setFood(item.food);
    setEditId(item.id);
    console.log('menuITEMId', item.id);
    navigation.navigate('Update Menu', {item});
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
    <View style={MenuStyle.menuContainer}>
      <View style={MenuStyle.menuContent}>
        <View style={MenuStyle.menu}>
          <View style={MenuStyle.menuC1}>
            <Text style={MenuStyle.menuTitle}>Menu</Text>
            <View style={MenuStyle.addMenuBtn}>
              <TouchableOpacity
                style={MenuStyle.addMenuOpacity}
                onPress={() => navigation.navigate('Add new menu')}>
                <Entypo name="plus" style={MenuStyle.addIcon} />
                <Text style={MenuStyle.addMenuTextBtn}>Add New Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={MenuStyle.menuC2}>
            <View style={MenuStyle.searchbar}>
              <FontAwesome name="search" style={MenuStyle.SearchIcon} />
              <TextInput
                style={MenuStyle.searchInput}
                placeholder="Search here"
                placeholderTextColor="#777777"
                numberOfLines={1}
              />
            </View>
            <View style={MenuStyle.filterDropdown}>
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
                  placeholder={'All'}
                  value={category}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setCategory(item.category);
                    setIsFocus(false);
                  }}
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
                  placeholder={'Available'}
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
          </View>
        </View>
        <View style={MenuStyle.menuList}>
          <View style={MenuStyle.menuItemRow}>
            {items.map((item, index) => (
              <View key={index}>
                <View style={MenuStyle.menuItem}>
                  <TouchableOpacity
                    style={MenuStyle.menuItemIcon}
                    key={item}
                    onPress={() => EditItemId(item)}
                    // onPress={() => setModalVisible(true)}
                  >
                    <MaterialCommunityIcons
                      name="pencil-box-outline"
                      size={25}
                    />
                  </TouchableOpacity>
                  <View style={MenuStyle.ImageLabe}>
                  {/* <Text style={MenuStyle.menuLabel}>{(item.photo)}</Text> */}
                    <Image source={{ uri:item.photo}} style={MenuStyle.menuImage} />
                    <View style={MenuStyle.menuLabelPrice}>
                      <Text style={MenuStyle.menuLabel}>{item.title}</Text>
                      <Text style={MenuStyle.menuLabel}>{item.description}</Text>
                      <Text style={MenuStyle.menuPrice}>{item.price}</Text>
                    </View>
                  </View>
                  <Text style={MenuStyle.menuDescrip}>{item.image}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
