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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default Products = ({navigation}) => {
  const [menu, setMenu] = useState([]);
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateQuantity = async (id, groupId, type) => {
    const token = await AsyncStorage.getItem('access_token');
    const itemMenu = menu
      .find(i => i.id === groupId)
      .items.find(i => i.id === id);
    const quantity =
      type === '+' ? itemMenu.quantity + 1 : itemMenu.quantity - 1;

    await axios.patch(
      `${API_URL}/branchItem/${id}`,
      JSON.stringify({quantity}),
      {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    fetchItems();
  };
  const transformer = input => {
    return input.reduce((result, item) => {
      item.menuCategory
        .map(categoryObj => categoryObj.title)
        .forEach(categoryTitle => {
          const existingCategory = result.find(
            cat => cat.category === categoryTitle,
          );

          const content = {
            id: item.menuItemId,
            title: item.menuItem.title,
            quantity: item.quantity,
          };

          if (existingCategory) {
            existingCategory.items.push(content);
          } else {
            result.push({
              id: item.id,
              category: categoryTitle,
              items: [content],
            });
          }
        });

      return result;
    }, []);
  };

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
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
      setMenu(transformer(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <OrientationLocker orientation={PORTRAIT} />
      <View style={styles.products}>
        <View style={styles.crewHeader}>
          <View style={styles.ryoriIconTitle}>
            <Image source={redRyori} style={styles.ryori} />
            <Text style={styles.ryoriIconText}>Products</Text>
          </View>
          {userData ? (
            <TouchableOpacity
              style={styles.viewProfile}
              onPress={() => navigation.navigate('Profile Employee')}>
              <Image source={male} style={styles.crewImage} />
              <View style={{top: -5, left: 5}}>
                <Text style={styles.crewName}>{userData.firstName}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <Text>Loading user...</Text>
          )}
        </View>
        <View style={styles.searchInventory}>
          <View style={styles.searchbar}>
            <FontAwesome name="search" size={20} style={styles.SearchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Food here"
              placeholderTextColor="#6b6b6d"
              numberOfLines={1}
            />
          </View>
          <TouchableOpacity
            style={styles.invetoryIcon}
            onPress={() => navigation.navigate('Inventory')}>
            <FontAwesome5 name="box-open" color={'#464646'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.table}>
          <ScrollView>
            {menu.map((item, index) => (
              <>
                <View key={index} style={styles.productTable}>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title style={{flex: 2.4}}>
                        <Text style={styles.tableProductHeader}>
                          {item.category}
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{flex: 0.8}}>
                        <Text style={styles.productQty}>Quantity</Text>
                      </DataTable.Title>
                    </DataTable.Header>
                    {item.items.map((menuItem, menuIndex) => (
                      <DataTable.Row key={menuIndex}>
                        <DataTable.Cell style={{flex: 2.4}}>
                          <Text style={styles.porklist}>{menuItem.title}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{flex: 0.8}}>
                          <View style={styles.qtyContainer}>
                            <TouchableOpacity
                              onPress={() =>
                                updateQuantity(menuItem.id, item.id, '-')
                              }>
                              <Entypo name="minus" size={18} />
                            </TouchableOpacity>
                            <Text style={styles.input}>
                              {menuItem.quantity.toString()}
                            </Text>
                            <TouchableOpacity
                              onPress={() =>
                                updateQuantity(menuItem.id, item.id, '+')
                              }>
                              <Entypo name="plus" size={18} />
                            </TouchableOpacity>
                          </View>
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                  </DataTable>
                </View>
              </>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};
