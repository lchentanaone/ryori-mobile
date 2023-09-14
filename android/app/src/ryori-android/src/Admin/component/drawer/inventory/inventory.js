import React, {useState, useEffect, useCallback} from 'react';
import {InventoryStyle} from './inventory-style';
import {DataTable} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAweMaterialCommunityIconssome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../../../utils/constants';
import {OrientationLocker, LANDSCAPE} from 'react-native-orientation-locker';
import SkeletonItem from '../../../../utils/skeletonItem';
import {useFocusEffect} from '@react-navigation/native';

const invLogsType = [
  {label: 'Ready', value: 'ready'},
  {label: 'Waste', value: 'waste'},
];

export default function Inventory() {
  const [errors, setErrors] = useState('');
  const [errorTypeLog, setErrorTypeLog] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [itemOnEdit, setItemOnEdit] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [item, setItem] = useState('');
  const [weight, setWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [updateItem, setUpdateItem] = useState();
  const [type, setType] = useState('');
  const [typeLogs, setTypeLogs] = useState([]);
  const [quantityLogs, setQuantityLogs] = useState(0);
  const [filteredInventory, setFilteredInventory] = useState(1);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleIncrease = () => {
    const newQuantity = parseInt(quantityLogs) + 1;
    setQuantityLogs(newQuantity.toString());
  };

  const handleDecrease = () => {
    setQuantityLogs(quantityLogs - 1);
  };

  const fetchCategory = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const response = await axios.get(
        `${API_URL}/inventory/rawcategory/?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const dropdownized = data =>
    data.map(item => ({
      label: item.title,
      value: item._id,
    }));

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/inventory/rawgrocery/?branch_Id=${branch_Id}`,
        {headers},
      );
      setInventory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostInventory = async () => {
    if (!item || !quantity) {
      setErrors('Category, Product Name and Quantity are required');
    } else {
      setErrors('');

      try {
        const token = await AsyncStorage.getItem('access_token');
        const branch_Id = await AsyncStorage.getItem('branch_Id');
        const user_Id = await AsyncStorage.getItem('user_Id');
        const newData = [...inventory, {item, weight, quantity, category}];
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        if (itemOnEdit !== '') {
          await axios.patch(
            `${API_URL}/inventory/rawgrocery/${itemOnEdit}`,
            {
              item,
              weight,
              quantity,
              branch_Id,
              user_Id,
              rawCategory_Id: category,
            },
            {headers},
          );
          fetchItems();
          setItemOnEdit('');
          setInventory(newData);
        } else {
          // New
          await axios.post(
            `${API_URL}/inventory/rawgrocery`,
            {
              item,
              weight,
              quantity,
              branch_Id,
              user_Id,
              rawCategory_Id: category,
            },
            {headers},
          );
          fetchItems();
          setInventory(newData);
        }
      } catch (error) {
        console.error(error);
      }
      setCategory('');
      setItem('');
      setWeight('');
      setQuantity('');
    }
  };

  const handleDeleteItem = async id => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      await axios.delete(`${API_URL}/inventory/rawgrocery/${id}`, {
        branch_Id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };
  const showDeleteConfirmation = _id => {
    setItemToDelete(_id);
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => setItemToDelete(null), // Clear the item to delete
        },
        {
          text: 'Delete',
          onPress: () => {
            handleDeleteItem(_id); // Call the delete function if confirmed
            setItemToDelete(null); // Clear the item to delete
          },
        },
      ],
      {cancelable: false},
    );
  };
  const handleFilter = id => {
    if (id) {
      const newData = inventory.filter(item =>
        item.rawCategories.some(innerItem => innerItem._id === id),
      );
      console.log({newData});
      setFilteredInventory(newData);
    } else {
      setFilteredInventory(inventory);
    }
  };

  const handleEdit = items => {
    setItemOnEdit(items._id);
    setItem(items.item);
    setWeight(items.weight);
    setQuantity(items.quantity);
    setUpdateItem(items._id);
  };

  const handleOpenModal = items => {
    setModalVisible(true);
    setItemOnEdit(items._id);
  };

  const handleAddQtyType = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const user_Id = await AsyncStorage.getItem('user_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.post(
        `${API_URL}/inventory/logs`,
        {
          type,
          quantityLogs,
          rawGrocery_Id: itemOnEdit,
          user_Id,
          branch_Id,
        },
        {headers},
      );
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const addQtyReady = () => {
    if (!type) {
      setErrorTypeLog('Type is required');
    } else {
      setErrorTypeLog('');
      handleAddQtyType();
      setModalVisible(false);
      setQuantityLogs('0');
      setType('');
    }
  };

  const fetchReadtQty = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/inventory/logs/?branch_Id=${branch_Id}`,
        {headers},
      );
      setTypeLogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchReadtQty();
      fetchCategory();
      fetchItems();
    }, []),
  );

  useEffect(() => {
    if (filteredInventory !== inventory) {
      setFilteredInventory(inventory);
    }
  }, [inventory]);

  return (
    <>
      <OrientationLocker
        orientation={LANDSCAPE}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <View style={InventoryStyle.inventContainer}>
        <View style={InventoryStyle.inventContent}>
          <Text style={InventoryStyle.inventTitle}>Inventory</Text>
          <View style={InventoryStyle.inventformCon}>
            <View style={InventoryStyle.form}>
              <View style={InventoryStyle.DropdownContainer}>
                <Dropdown
                  style={[
                    InventoryStyle.dropdown,
                    isFocus && {borderColor: '#007FFF'},
                  ]}
                  itemTextStyle={{color: '#585858'}}
                  placeholderStyle={InventoryStyle.placeholderStyle}
                  selectedTextStyle={InventoryStyle.selectedTextStyle}
                  inputSearchStyle={InventoryStyle.inputSearchStyle}
                  iconStyle={InventoryStyle.iconStyle}
                  data={dropdownized(categories)}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Category'}
                  value={category}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setCategory(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
              <TextInput
                mode="outlined"
                style={InventoryStyle.inventoryInput}
                placeholder="Product Name"
                placeholderTextColor="#777777"
                value={item}
                onChangeText={setItem}
              />
              <TextInput
                mode="outlined"
                style={InventoryStyle.netWtQtyInput}
                placeholder="Net Weight"
                placeholderTextColor="#777777"
                value={weight}
                keyboardType="numeric"
                onChangeText={setWeight}
              />
              <TextInput
                mode="outlined"
                style={InventoryStyle.netWtQtyInput}
                placeholder="Qty"
                placeholderTextColor="#777777"
                value={quantity.toString()}
                keyboardType="numeric"
                onChangeText={setQuantity}
              />
              <TouchableOpacity
                style={InventoryStyle.addInvetoryOpacity}
                onPress={handlePostInventory}>
                <Text style={InventoryStyle.addInventTextBtn}>Save</Text>
              </TouchableOpacity>
            </View>
            {errors !== '' && (
              <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
            )}
            <View style={InventoryStyle.invetoryFilter}>
              <TouchableOpacity
                style={{
                  ...InventoryStyle.invetoryBtnAll,
                  backgroundColor: '#aaa',
                }}
                onPress={() => handleFilter(null)}>
                <Text style={InventoryStyle.filterTextBtn}>All</Text>
              </TouchableOpacity>
              <ScrollView
                horizontal={true}
                style={InventoryStyle.invetoryFilter}>
                {categories.map((c, key) => (
                  <TouchableOpacity
                    key={key}
                    style={InventoryStyle.invetoryBtn}
                    onPress={() => handleFilter(c._id)}>
                    <Text style={InventoryStyle.filterTextBtn}>{c.title}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={InventoryStyle.inventTable}>
            <ScrollView horizontal>
              <View>
                <View style={InventoryStyle.tableRow}>
                  <Text
                    style={[InventoryStyle.cellHeader, InventoryStyle.idCell]}>
                    No.
                  </Text>
                  <Text
                    style={[
                      InventoryStyle.cellHeader,
                      InventoryStyle.productNameCell,
                    ]}>
                    Product Name
                  </Text>

                  <Text
                    style={[
                      InventoryStyle.cellHeader,
                      InventoryStyle.wtQtyCell,
                    ]}>
                    Wt.
                  </Text>
                  <Text
                    style={[
                      InventoryStyle.cellHeader,
                      InventoryStyle.wtQtyCell,
                    ]}>
                    Qty
                  </Text>
                  <Text
                    style={[InventoryStyle.cellHeader, InventoryStyle.typeRW]}>
                    Ready
                  </Text>
                  <Text
                    style={[InventoryStyle.cellHeader, InventoryStyle.typeRW]}>
                    Waste
                  </Text>
                  <Text
                    style={[
                      InventoryStyle.cellHeader,
                      InventoryStyle.columnWidth,
                    ]}>
                    Date
                  </Text>
                  <Text
                    style={[
                      InventoryStyle.cellHeader,
                      InventoryStyle.columnWidth,
                    ]}>
                    Manage
                  </Text>
                </View>
                <ScrollView style={{height: 200}}>
                  {filteredInventory.length > 0 ? (
                    filteredInventory.map((items, index) => (
                      <View key={index}>
                        <View style={InventoryStyle.tableRow}>
                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.idCell,
                            ]}>
                            {index + 1}
                          </Text>
                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.productNameCell,
                            ]}>
                            {items.item}
                          </Text>

                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.wtQtyCell,
                            ]}>
                            {items.weight}
                          </Text>
                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.wtQtyCell,
                            ]}>
                            {items.quantity}
                          </Text>
                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.typeRW,
                            ]}>
                            {items.readyQty}
                          </Text>
                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.typeRW,
                            ]}>
                            {items.wasteQty}
                          </Text>
                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.columnWidth,
                            ]}>
                            {item.data}
                            {/* <Text>{items.createdAt}</Text> */}
                          </Text>
                          <Text
                            style={[
                              InventoryStyle.cell,
                              InventoryStyle.columnWidth,
                            ]}>
                            <View style={InventoryStyle.itemBtn}>
                              <TouchableOpacity
                                style={InventoryStyle.manageBtnOpacity}
                                onPress={() => handleOpenModal(items)}>
                                <AntDesign
                                  name="up-square-o"
                                  color={'#12BF38'}
                                  size={25}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={InventoryStyle.manageBtnOpacity}
                                onPress={() => handleEdit(items)}>
                                <FontAwesome
                                  name="pencil-square-o"
                                  color={'#12BF38'}
                                  size={25}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={InventoryStyle.manageBtnOpacity}
                                onPress={() =>
                                  showDeleteConfirmation(items._id)
                                }>
                                <FontAweMaterialCommunityIconssome5
                                  name="delete"
                                  color={'#DB1B1B'}
                                  size={25}
                                />
                              </TouchableOpacity>
                            </View>
                          </Text>
                        </View>
                      </View>
                    ))
                  ) : (
                    <View style={{width: '100%'}}>
                      <SkeletonItem />
                    </View>
                  )}
                </ScrollView>
              </View>
            </ScrollView>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={InventoryStyle.centeredViewModal}>
                <View style={InventoryStyle.modalView}>
                  <Text style={InventoryStyle.modalText}>Inventory Logs</Text>
                  <View style={InventoryStyle.dropdownModal}>
                    <Dropdown
                      style={[
                        InventoryStyle.dropdown,
                        isFocus && {borderColor: '#007FFF'},
                      ]}
                      placeholderStyle={InventoryStyle.placeholderStyle}
                      selectedTextStyle={InventoryStyle.selectedTextStyle}
                      inputSearchStyle={InventoryStyle.inputSearchStyle}
                      iconStyle={InventoryStyle.iconStyle}
                      itemTextStyle={{
                        color: '#585858',
                        fontFamily: 'Quicksand-SemiBold',
                      }}
                      data={invLogsType}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={'Type'}
                      value={type}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        setType(item.value);
                        setIsFocus(false);
                      }}
                    />
                    <View style={InventoryStyle.qtyContainer}>
                      <TouchableOpacity onPress={handleDecrease}>
                        <Entypo name="minus" size={18} color={'#000'} />
                      </TouchableOpacity>
                      <TextInput
                        style={InventoryStyle.input}
                        value={quantityLogs.toString()}
                        onChangeText={text => setQuantityLogs(text)}
                        keyboardType="numeric"
                      />
                      <TouchableOpacity onPress={handleIncrease}>
                        <Entypo name="plus" size={18} color={'#000'} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {errorTypeLog !== '' && (
                    <Text style={{color: '#ff0000'}}>{errorTypeLog}</Text>
                  )}
                  <TouchableOpacity
                    style={[InventoryStyle.modalButton]}
                    onPress={addQtyReady}>
                    <Text style={InventoryStyle.btnText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </>
  );
}
