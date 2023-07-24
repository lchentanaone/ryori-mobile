import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {InventoryStyle as styles} from './inventoryStyle';
import male from '../../../images/male3.png';
import redRyori from '../../../images/redRyori.png';
import {Dropdown} from 'react-native-element-dropdown';
import {DataTable} from 'react-native-paper';

const categories = [
  {label: 'All', value: 'All'},
  {label: 'Pork', value: 'Pork'},
  {label: 'Drinks', value: 'Drinks'},
];

export default function InventoryEmployee() {
  const [category, setCategory] = useState('All');
  const [isFocus, setIsFocus] = useState(false);
  const [itemName, setItemName] = useState('');
  const [netWeight, setNetWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.inventory}>
      <View style={styles.crewHeader}>
        <View style={styles.ryoriIconTitle}>
          <Image source={redRyori} style={styles.ryori} />
          <Text style={styles.ryoriIconText}>Inventory</Text>
        </View>
        <TouchableOpacity
          style={styles.viewProfile}
          onPress={() => navigation.navigate('Profile')}>
          <Image source={male} style={styles.crewImage} />
          <View style={{top: -5, left: 5}}>
            <Text style={styles.crewName}>{'John Doe'}</Text>
            <Text style={styles.viewProfileText}>View Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.inventoryFormTable}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.DropdownContainer}>
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: '#007FFF'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
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
            style={styles.inputItem}
            placeholder="Item"
            placeholderTextColor="#777777"
            value={itemName}
            onChangeText={setItemName}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            mode="outlined"
            style={styles.netWeightInput}
            placeholder="New Weight"
            keyboardType="numeric"
            placeholderTextColor="#777777"
            value={netWeight}
            onChangeText={setNetWeight}
          />
          <TextInput
            mode="outlined"
            style={styles.qty}
            placeholder="Quantity"
            placeholderTextColor="#777777"
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
          />
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inventoryTable}>
          <View style={styles.DropdownContainer}>
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: '#007FFF'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
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
          <DataTable>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>
                <Text style={styles.inventData}>ID</Text>
              </DataTable.Title>
              <DataTable.Title style={{marginLeft: -35}}>
                <Text style={styles.inventData}>Item</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.inventData}>Weight</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.inventData}>Qty</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.inventData}>Action</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              <DataTable.Row style={{borderBottomWidth: 1, height: 50}}>
                <DataTable.Cell>
                  <Text style={styles.inventCellData}>01</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{marginLeft: -35}}>
                  <Text style={styles.inventCellData}>Chicken</Text>
                </DataTable.Cell>

                <DataTable.Cell style={{left: 20}}>
                  <Text style={styles.inventCellData}>01</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: 10}}>
                  <Text style={styles.inventCellData}>01</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: -10, top: 5}}>
                  <TouchableOpacity
                    style={styles.manageBtnOpacity}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.manageTextBtn}>Manage</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            </ScrollView>
          </DataTable>
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.invetoryModal}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.updateInvetoryOpacity}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.filterTextBtn}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.delInvetoryOpacity}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.filterTextBtn}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}
