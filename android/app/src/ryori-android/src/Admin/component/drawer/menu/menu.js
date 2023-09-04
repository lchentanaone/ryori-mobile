import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import {MenuStyle, DropdownStyle} from './menu-style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import SkeletonItem from '../../../../utils/skeletonItem';
import defaultPhoto from '../../../images/no-image.png';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);

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
  const handleMenuModal = async item => {
    setSelectedItem(item);
    try {
      const response = await axios.get(`${API_URL}/menuItem/${item._id}`);
      setItemDetails(response.data);
      setModalVisible(true);
    } catch (error) {
      console.error('Error fetching item details:', error);
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
          {/* 
          FUTURE
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
          </View> */}
        </View>

        <View style={{height: 300}}>
          <ScrollView>
            <View style={MenuStyle.menuItemRow}>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      style={MenuStyle.menuItems}
                      onPress={() => handleMenuModal(item)}>
                      <Image
                        source={item.photo ? {uri: item.photo} : defaultPhoto}
                        style={MenuStyle.menuImages}
                      />
                      <View style={{paddingHorizontal: 10}}>
                        <Text style={MenuStyle.menuLabels}>{item.title}</Text>
                      </View>
                      <View style={MenuStyle.priceQtyBottom}>
                        <View style={MenuStyle.priceQty}>
                          <View style={MenuStyle.price}>
                            <Text style={MenuStyle.menuPrice}>
                              ₱ {item.price}
                            </Text>
                          </View>
                          <Text style={MenuStyle.menuQty}>
                            Qty: {item.quantity}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <View>
                  <SkeletonItem />
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={{alignItems: 'center'}}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={MenuStyle.modal}>
          <View style={MenuStyle.modalView}>
            {itemDetails ? (
              <>
                <View style={MenuStyle.menuItems1}>
                  <View style={MenuStyle.menuImagesCon}>
                    <Image
                      source={
                        itemDetails.photo
                          ? {uri: itemDetails.photo}
                          : defaultPhoto
                      }
                      style={MenuStyle.menuImages1}
                    />
                  </View>
                  <View style={MenuStyle.modalMenuLabel}>
                    <Text style={MenuStyle.modalMenuText}>
                      {itemDetails.title}
                    </Text>
                  </View>
                  <View style={MenuStyle.modalPrice}>
                    <Text style={MenuStyle.moddalMenuPrice}>
                      ₱ {itemDetails.price}
                    </Text>
                  </View>
                  <Text style={MenuStyle.menudescription1}>
                    {itemDetails.description}
                  </Text>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      width: '100%',
                      marginBottom: 10,
                    }}>
                    <View style={MenuStyle.modalBtn}>
                      <TouchableOpacity
                        style={MenuStyle.updateModalBtn}
                        onPress={() =>
                          navigation.navigate('menu-details', {
                            item: selectedItem,
                            type: 'edit',
                          })
                        }>
                        <Text style={MenuStyle.modalBtnText}>Update</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={MenuStyle.closeModal}
                        onPress={() => setModalVisible(false)}>
                        <Text style={MenuStyle.modalBtnText}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </>
            ) : (
              <Text>Loading user data...</Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
