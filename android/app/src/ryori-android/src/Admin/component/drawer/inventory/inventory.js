import React, {useState, useEffect} from 'react';
import {InventoryStyle} from './inventory-style';
import {DataTable} from 'react-native-paper';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAweMaterialCommunityIconssome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../../../utils/constants'
const categories = [
  {label: 'All', value: 'All'},
  {label: 'Pork', value: 'Pork'},
  {label: 'Drinks', value: 'Drinks'},
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
      // console.log('categories: ', response.data)
      const dropdownCategories = response.data.map(categoryItem => ({
        label: categoryItem.title,
        value: categoryItem.id,
      }));
      setCategories(dropdownCategories);
      console.log(dropdownCategories);
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
      // const headers = {
      //   Authorization: `Bearer ${token}`,
      // };
      const response = await axios.get(
        `${API_URL}/inventory/rawgrocery/?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        // {headers},
      );
      setInventory(response.data);
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

  const handlePostInventory = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const newData = [...inventory, {item, weight, quantity}];
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      if (itemOnEdit !== '') {
        await axios.patch(
          `${API_URL}/inventory/rawgrocery/${itemOnEdit}`,
          {
            branch_Id,
            item,
            weight,
            quantity,
            rawCategory_Id: category,
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
            branch_Id,
            item,
            weight,
            quantity,
            rawCategory_Id: 1,
          },
          {headers},
        );
        fetchItems();
        setInventory(newData);
      }
    } catch (error) {
      console.error(error);
    }
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

  useEffect(() => {
    fetchCategory();
    fetchItems();
  }, []);

  return (
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
          <DataTable>
            <DataTable.Header style={InventoryStyle.tableHeader}>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>ID</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>Product Name</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>Weight</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>Qty</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>Date</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>Manage</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              {inventory.map((items, index) => (
                <View key={index}>
                  <DataTable.Row style={{borderBottomWidth: 1, height: 50}}>
                    <DataTable.Cell>
                      <Text style={InventoryStyle.inventCellData}>
                        {items.id}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <Text style={InventoryStyle.inventCellData}>
                        {items.item}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <Text style={InventoryStyle.inventCellData}>
                        {items.weight}
                      </Text>
                    </DataTable.Cell>

                    <DataTable.Cell>
                      <Text style={InventoryStyle.inventCellData}>
                        {items.quantity}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <Text style={InventoryStyle.inventCellData}>
                        May 99 3099
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <View style={InventoryStyle.itemBtn}>
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
              ))}
            </ScrollView>
          </DataTable>
        </View>
      </View>
    </View>
  );
}
