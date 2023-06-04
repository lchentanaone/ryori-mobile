import React, {useState} from 'react';
import {InventoryStyle} from './inventory-style';
import {DataTable} from 'react-native-paper';
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
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

export default function Inventory() {
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState(null);
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
              placeholder="Name"
              placeholderTextColor="#777777"
              value={foodName}
              secureTextEntry={false}
              onChangeText={setFoodName}
            />
            <TextInput
              mode="outlined"
              style={InventoryStyle.netWtQtyInput}
              placeholder="Net Weight"
              placeholderTextColor="#777777"
              value={foodName}
              secureTextEntry={false}
              onChangeText={setFoodName}
            />
            <TextInput
              mode="outlined"
              style={InventoryStyle.netWtQtyInput}
              placeholder="Qty"
              placeholderTextColor="#777777"
              value={foodName}
              secureTextEntry={false}
              onChangeText={setFoodName}
            />
            <TouchableOpacity style={InventoryStyle.addInvetoryOpacity}>
              <Text style={InventoryStyle.addInventTextBtn}>Add</Text>
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
                <Text style={InventoryStyle.inventData}>Title</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>Data</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={InventoryStyle.inventData}>Action</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              <DataTable.Row style={{borderBottomWidth: 1, height: 50}}>
                <DataTable.Cell>
                  <Text style={InventoryStyle.inventCellData}>01</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={InventoryStyle.inventCellData}>
                    Transaction one
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={InventoryStyle.inventCellData}>
                    March 07, 23
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <TouchableOpacity
                    style={InventoryStyle.manageBtnOpacity}
                    onPress={() => setModalVisible(true)}>
                    <Text style={InventoryStyle.manageTextBtn}>Manage</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            </ScrollView>
          </DataTable>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={InventoryStyle.invetoryModal}>
              <View style={InventoryStyle.modalView}>
                <View style={InventoryStyle.modalContent}>
                  <Dropdown
                    style={[
                      InventoryStyle.modalDropdown,
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
                  <TextInput
                    mode="outlined"
                    style={InventoryStyle.modalInput}
                    placeholder="Name"
                    placeholderTextColor="#777777"
                    value={foodName}
                    secureTextEntry={false}
                    onChangeText={setFoodName}
                  />
                  <View style={InventoryStyle.modalNetWQty}>
                    <TextInput
                      mode="outlined"
                      style={InventoryStyle.modalNetWQtyInput}
                      placeholder="New Weight"
                      placeholderTextColor="#777777"
                      value={foodName}
                      secureTextEntry={false}
                      onChangeText={setFoodName}
                    />
                    <TextInput
                      mode="outlined"
                      style={InventoryStyle.modalNetWQtyInput}
                      placeholder="Qty"
                      placeholderTextColor="#777777"
                      value={foodName}
                      secureTextEntry={false}
                      onChangeText={setFoodName}
                    />
                  </View>
                  <View style={InventoryStyle.modalButton}>
                    <TouchableOpacity
                      style={InventoryStyle.updateInvetoryOpacity}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={InventoryStyle.filterTextBtn}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={InventoryStyle.delInvetoryOpacity}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={InventoryStyle.filterTextBtn}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* <TouchableOpacity
                  style={InventoryStyle.button}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={InventoryStyle.textStyle}>Hide Modal</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}
