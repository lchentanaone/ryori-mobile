import React, {useState, useEffect} from 'react';
import {prodStyle as styles} from './product-style';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import redRyori from '../../../../images/redRyori.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DataTable} from 'react-native-paper';
import male from '../../../../images/male3.png';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';

export default function Products({navigation}) {
  const [quantity, setQuantity] = useState('0');

  const [category, setCategory] = useState([]);
  const [menu, setMenu] = useState([]);

  const handleIncrease = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity.toString());
  };
  const handleDecrease = () => {
    const newQuantity = parseInt(quantity) - 1;
    if (newQuantity >= 0) {
      setQuantity(newQuantity.toString());
    }
  };
  const fetchMenuCategoryData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/branchItem?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {headers},
      );
      // const statusNew = response.data.filter(
      //   transactionStatus =>
      //     transactionStatus.status !== 'new' &&
      //     transactionStatus.status !== 'done',
      // );
      setCategory(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
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
      setMenu(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMenuCategoryData();
    fetchItems();
  }, []);
  return (
    <>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <View style={styles.products}>
        <View style={styles.productContent}>
          <View style={styles.crewHeader}>
            <View style={styles.ryoriIconTitle}>
              <Image source={redRyori} style={styles.ryori} />
              <Text style={styles.ryoriIconText}>Products</Text>
            </View>
            <TouchableOpacity
              style={styles.viewProfile}
              onPress={() => navigation.navigate('Profile Employee')}>
              <Image source={male} style={styles.crewImage} />
              <View style={{top: -5, left: 5}}>
                <Text style={styles.crewName}>{'John Doe'}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchbar}>
            <FontAwesome name="search" size={20} style={styles.SearchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Food here"
              placeholderTextColor="#6b6b6d"
              numberOfLines={1}
            />
          </View>
          <View style={styles.Table}>
            <ScrollView>
              {category.map((item, index) => (
                <>
                  <View key={index} style={styles.productTable}>
                    <DataTable>
                      <DataTable.Header>
                        <DataTable.Title style={{flex: 2.4}}>
                          <Text style={styles.tableProductHeader}>
                            {item.title}
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{flex: 0.8}}>
                          <Text style={styles.productQty}>Quantity</Text>
                        </DataTable.Title>
                      </DataTable.Header>
                      {menu.map((menuItem, menuIndex) => (
                        <DataTable.Row key={menuIndex}>
                          <DataTable.Cell style={{flex: 2.4}}>
                            <Text style={styles.porklist}>
                              {menuItem.title}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{flex: 0.8}}>
                            <View style={styles.qtyContainer}>
                              <TouchableOpacity onPress={handleDecrease}>
                                <Entypo name="minus" size={18} />
                              </TouchableOpacity>
                              <TextInput
                                style={styles.input}
                                value={quantity}
                                onChangeText={text => setQuantity(text)}
                                keyboardType="numeric"
                              />
                              <TouchableOpacity onPress={handleIncrease}>
                                <Entypo name="plus" size={18} />
                              </TouchableOpacity>
                            </View>
                          </DataTable.Cell>
                        </DataTable.Row>
                      ))}
                    </DataTable>
                  </View>
                  {/* <View style={styles.productTable}>
                    <DataTable>
                      <DataTable.Header>
                        <DataTable.Title>
                          <Text style={styles.tableProductHeader}>Chicken</Text>
                        </DataTable.Title>
                      </DataTable.Header>
                      <DataTable.Row>
                        <DataTable.Cell>
                          <Text style={styles.porklist}>Chicken Combo 1</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{left: '37%'}}>
                          <Text style={styles.porklistQty}>26</Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    </DataTable>
                  </View> */}
                  {/* <View style={styles.productTable}>
                    <DataTable>
                      <DataTable.Header>
                        <DataTable.Title>
                          <Text style={styles.tableProductHeader}>Beef</Text>
                        </DataTable.Title>
                      </DataTable.Header>
                      <DataTable.Row>
                        <DataTable.Cell>
                          <Text style={styles.porklist}>Chicken Combo 1</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{left: '37%'}}>
                          <Text style={styles.porklistQty}>26</Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    </DataTable>
                  </View> */}
                </>
              ))}
            </ScrollView>
          </View>

          <View style={styles.invenBtn}>
            <TouchableOpacity
              style={styles.inventoryBtn}
              onPress={() => navigation.navigate('Inventory')}>
              <Text style={styles.btnText}>Open Inventory</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
