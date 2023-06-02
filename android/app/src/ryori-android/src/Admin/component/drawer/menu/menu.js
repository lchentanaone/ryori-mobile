import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {MenuStyle, DropdownStyle} from './menu-style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';

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
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState(null);
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
          <View style={MenuStyle.menuItem}>
            <Text>Table</Text>
          </View>
          <View style={MenuStyle.menuItem}>
            <Text>Table</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
