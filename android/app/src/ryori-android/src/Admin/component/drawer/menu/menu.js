import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {MenuStyle, DropdownStyle} from './menu-style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
const filterAvalable = [
  {label: 'Available', value: 'Available'},
  {label: 'Not Available', value: 'Not Available'},
];
const categories = [
  {label: 'Pork', value: 'Pork'},
  {label: 'Drinks', value: 'Drinks'},
];
export default function Menu({navigation}) {
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const response = await axios.get(
        `${API_URL}/menuItem?store_Id=${store_Id}&branch_Id=${branch_Id}`,
        {
          branch_Id,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

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
        {/* <View style={MenuStyle.menuList}> */}
        <View style={MenuStyle.menuItemRow}>
          {items.map((item, index) => (
            <View key={index}>
              <View style={MenuStyle.menuItem}>
                <TouchableOpacity
                  style={MenuStyle.menuItemIcon}
                  key={item}
                  onPress={() =>
                    navigation.navigate('menu-details', {item, type: 'edit'})
                  }>
                  <MaterialCommunityIcons name="pencil-box-outline" size={25} />
                </TouchableOpacity>
                <View style={MenuStyle.ImageLabe}>
                  <Image
                    source={{uri: item.photo}}
                    style={MenuStyle.menuImage}
                  />
                  <View style={MenuStyle.menuLabelPrice}>
                    <Text style={MenuStyle.menuLabel}>{item.title}</Text>
                    <Text style={MenuStyle.menuLabel}>{item.description}</Text>
                    <Text style={MenuStyle.menuLabel}>{item.quantity}</Text>
                    <Text style={MenuStyle.menuPrice}>{item.price}</Text>
                  </View>
                </View>
                <Text style={MenuStyle.menuDescrip}>{item.image}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      {/* </View> */}
    </View>
  );
}
