import React, {useState, useEffect} from 'react';
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

const invLogsType = [
  {label: 'Ready', value: 'ready'},
  {label: 'Waste', value: 'waste'},
];

export default function Inventory() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');
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
      const dropdownCategories = response.data.map(categoryItem => ({
        label: categoryItem.title,
        value: categoryItem.id,
      }));
      setCategories(dropdownCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      console.log(branch_Id);
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
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
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
            category,
          },
          {headers},
        );
        fetchItems();
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

  const handleEdit = items => {
    setItemOnEdit(items.id);
    setItem(items.item);
    setWeight(items.weight);
    setQuantity(items.quantity);
    setUpdateItem(items.id);
  };

  const handleOpenModal = items => {
    setModalVisible(true);
    setItemOnEdit(items.id);
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
    handleAddQtyType();
    setModalVisible(false);
    setQuantityLogs('0');
    setType('');
  };

  const fetchReadtQty = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      console.log(branch_Id);
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

  useEffect(() => {
    fetchReadtQty();
    fetchCategory();
    fetchItems();
  }, []);

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
                  placeholderStyle={InventoryStyle.placeholderStyle}
                  selectedTextStyle={InventoryStyle.selectedTextStyle}
                  inputSearchStyle={InventoryStyle.inputSearchStyle}
                  iconStyle={InventoryStyle.iconStyle}
                  data={categories}
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
                placeholder="Title"
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
            <View style={InventoryStyle.invetoryFilter}>
              <TouchableOpacity style={InventoryStyle.invetoryBtn}>
                <Text style={InventoryStyle.filterTextBtn}>Chicken</Text>
              </TouchableOpacity>
              <TouchableOpacity style={InventoryStyle.invetoryBtn}>
                <Text style={InventoryStyle.filterTextBtn}>Pork</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={InventoryStyle.inventTable}>
            <ScrollView horizontal>
              <View style={InventoryStyle.containerTable}>
                <DataTable style={InventoryStyle.table}>
                  <DataTable.Header style={InventoryStyle.tableHeader}>
                    <DataTable.Title style={{flex: 0.3}}>
                      <Text style={InventoryStyle.inventData}>ID</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{flex: 2.5}}>
                      <Text style={InventoryStyle.inventData}>
                        Product Name
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title style={{flex: 1}}>
                      <Text style={InventoryStyle.inventData}>Wt./Qty</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{flex: 1}}>
                      <Text style={InventoryStyle.inventData}>Type</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{flex: 1}}>
                      <Text style={InventoryStyle.inventData}>Manage</Text>
                    </DataTable.Title>
                  </DataTable.Header>
                  <ScrollView style={{height: 200}}>
                    {inventory.length > 0 ? (
                      inventory.map((items, index) => (
                        <View key={index}>
                          <DataTable.Row>
                            <DataTable.Cell style={{flex: 0.5}}>
                              {items.id}
                            </DataTable.Cell>
                            <DataTable.Cell style={{flex: 2}}>
                              <View style={{flexDirection: 'column'}}>
                                <Text style={InventoryStyle.inventCellData}>
                                  {items.item}
                                </Text>
                                <Text>{items.createdAt}</Text>
                              </View>
                            </DataTable.Cell>
                            <DataTable.Cell style={{flex: 1}}>
                              <View style={{flexDirection: 'column'}}>
                                <Text style={InventoryStyle.inventCellData}>
                                  wt. {items.weight}
                                </Text>
                                <Text style={InventoryStyle.inventCellData}>
                                  qty {items.quantity}
                                </Text>
                              </View>
                            </DataTable.Cell>
                            <DataTable.Cell style={{flex: 1}}>
                              <View style={{flexDirection: 'column'}}>
                                <Text style={InventoryStyle.inventCellData}>
                                  ready: {items.readyQty}
                                </Text>
                                <Text style={InventoryStyle.inventCellData}>
                                  waste: {items.wasteQty}
                                </Text>
                              </View>
                            </DataTable.Cell>
                            <DataTable.Cell style={{flex: 1}}>
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
                                  onPress={() => handleDeleteItem(items.id)}>
                                  <FontAweMaterialCommunityIconssome5
                                    name="delete"
                                    color={'#DB1B1B'}
                                    size={25}
                                  />
                                </TouchableOpacity>
                              </View>
                            </DataTable.Cell>
                          </DataTable.Row>
                        </View>
                      ))
                    ) : (
                      <View style={{width: '100%'}}>
                        <SkeletonItem />
                      </View>
                    )}
                  </ScrollView>
                </DataTable>
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
                        <Entypo name="minus" size={18} />
                      </TouchableOpacity>
                      <TextInput
                        style={InventoryStyle.input}
                        value={quantityLogs.toString()}
                        onChangeText={text => setQuantityLogs(text)}
                        keyboardType="numeric"
                      />
                      <TouchableOpacity onPress={handleIncrease}>
                        <Entypo name="plus" size={18} />
                      </TouchableOpacity>
                    </View>
                  </View>

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
