import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import redRyori from '../../../../images/redRyori.png';
import {OrderListStyles as styles} from '../../../dining/components/productList/orderProductListStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import male from '../../../../images/male3.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';

export default function PreparingOrderTab({navigation}) {
  const [userData, setUserData] = useState(null);
  const [transactionData, setTransactionData] = useState([]);

  const handlePress = index => {
    const tempData = [...transactionData];
    tempData[index].expanded = !tempData[index].expanded;
    setTransactionData(tempData);
  };

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

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/pos/transaction?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {headers},
      );
      console.log('Response Data:', response.data);
      const statusNew = response.data.filter(
        transactionStatus =>
          transactionStatus.status !== 'new' &&
          transactionStatus.status !== 'done',
      );
      setTransactionData(statusNew);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateTransStatus = async (_id, newStatus) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.patch(
        `${API_URL}/pos/transaction/${_id}`,
        {
          status: newStatus,
          table,
        },
        {headers},
      );
      fetchTransactionsData();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateTransactionItem = async (id, newStatus) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.patch(
        `${API_URL}/pos/transactionItem/${id}`,
        {
          status: newStatus,
        },
        {headers},
      );

      fetchTransactionsData();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
      fetchTransactionsData();
    }, []),
  );

  return (
    <>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <View style={styles.orderProducts}>
        <View style={styles.crewHeader}>
          <View style={styles.ryoriIconTitle}>
            <Image source={redRyori} style={styles.ryori} />
            <Text style={styles.ryoriIconText}>Orders</Text>
          </View>
          {userData ? (
            <TouchableOpacity
              style={styles.viewProfile}
              onPress={() => navigation.navigate('Profile Employee')}>
              <Image source={male} style={styles.crewImage} />
              <View style={{top: -5}}>
                <Text style={styles.crewName}>{userData.firstName}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <Text>Loading user...</Text>
          )}
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 10,
          }}>
          <View>
            <ScrollView>
              {transactionData.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <TouchableOpacity
                    onPress={() => handlePress(index)}
                    style={styles.title}>
                    <FontAwesome name="circle" color={'#FF7A00'} size={20} />
                    <Text
                      style={styles.tableText}>{`Table ${item.table} `}</Text>
                    {item.status === 'to_pay_cash' && (
                      <View style={styles.toCash}>
                        <Text style={styles.payCashBtnText}>Pay Cash</Text>
                      </View>
                    )}
                  </TouchableOpacity>

                  {item.expanded && (
                    <View style={styles.content}>
                      <View style={styles.textFields}>
                        <Text style={styles.label}>Set Status:</Text>
                        {item.status === 'new' && (
                          <TouchableOpacity
                            style={styles.toPrepareBtn}
                            onPress={() => {
                              updateTransStatus(item._id, 'to_prepare');
                            }}>
                            <Text style={styles.btnText}>To prepare</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'to_prepare' && (
                          <TouchableOpacity
                            style={styles.toPrepareBtn}
                            onPress={() => {
                              updateTransStatus(item._id, 'preparing');
                            }}>
                            <Text style={styles.btnText}>Preparing</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'preparing' && (
                          <TouchableOpacity
                            style={styles.toPrepareBtn}
                            onPress={() => {
                              updateTransStatus(item._id, 'serving');
                            }}>
                            <Text style={styles.btnText}>Serving</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'serving' && (
                          <TouchableOpacity
                            style={styles.toPrepareBtn}
                            onPress={() => {
                              updateTransStatus(item._id, 'served');
                            }}>
                            <Text style={styles.btnText}>Served</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'served' && (
                          <TouchableOpacity style={styles.toPrepareBtn}>
                            <Text style={styles.btnText}>Served</Text>
                          </TouchableOpacity>
                        )}
                        {/* {-----------Pay cash-------------} */}

                        {item.status === 'to_pay_cash' && (
                          <TouchableOpacity
                            style={styles.toPrepareBtn}
                            onPress={() => {
                              updateTransStatus(item._id, 'done');
                            }}>
                            <Text style={styles.btnText}>Confirmed</Text>
                          </TouchableOpacity>
                        )}
                      </View>

                      <View style={styles.textFields}>
                        <Text style={styles.label}>Notes:</Text>
                        <View style={styles.notes}>
                          <Text style={{color: '#000', padding: 5}}>
                            {item.notes}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.tableContainer}>
                        <View style={styles.tableRow}>
                          <Text style={[styles.columnQty, styles.headerText]}>
                            Qty
                          </Text>
                          <Text style={[styles.columnItem, styles.headerText]}>
                            Order Item
                          </Text>
                          <Text
                            style={[styles.columnMngBtn, styles.headerText]}>
                            Manage
                          </Text>
                        </View>
                        <ScrollView>
                          {item.transactionItems.map(
                            (transItem, transIndex) => (
                              <View key={transIndex} style={styles.tableRow}>
                                <Text
                                  style={[styles.columnQty, styles.textItem]}>
                                  {transItem.quantity}
                                </Text>
                                <Text
                                  style={[styles.columnItems, styles.textItem]}>
                                  {transItem.menuItem.title || ''}
                                </Text>
                                <Text style={[styles.mngBtn, styles.textItem]}>
                                  <View style={styles.buttons}>
                                    {transItem.status === 'new' && (
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                        }}>
                                        <TouchableOpacity
                                          style={styles.newOrder}
                                          onPress={() =>
                                            updateTransactionItem(
                                              transItem._id,
                                              'preparing',
                                            )
                                          }>
                                          <AntDesign
                                            name="checkcircle"
                                            color={'#0085ff'}
                                            size={25}
                                          />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                          style={styles.newOrder}
                                          onPress={() =>
                                            updateTransactionItem(
                                              transItem._id,
                                              'cancel',
                                            )
                                          }>
                                          <MaterialIcons
                                            name="cancel"
                                            color={'#DB1B1B'}
                                            size={27}
                                          />
                                        </TouchableOpacity>
                                      </View>
                                    )}
                                    {transItem.status === 'cancel' && (
                                      <TouchableOpacity
                                        style={styles.preparingBtn}>
                                        <Text style={styles.btnText}>
                                          Canceled
                                        </Text>
                                      </TouchableOpacity>
                                    )}

                                    {transItem.status === 'preparing' && (
                                      <TouchableOpacity
                                        style={styles.preparingBtn}
                                        onPress={() => {
                                          updateTransactionItem(
                                            transItem._id,
                                            'serving',
                                          );
                                        }}>
                                        <Text style={styles.btnText}>
                                          Serving
                                        </Text>
                                      </TouchableOpacity>
                                    )}
                                    {transItem.status === 'serving' && (
                                      <TouchableOpacity
                                        style={styles.servingBtn}
                                        onPress={() => {
                                          updateTransactionItem(
                                            transItem._id,
                                            'served',
                                          );
                                        }}>
                                        <Text style={styles.btnText}>
                                          Served
                                        </Text>
                                      </TouchableOpacity>
                                    )}
                                    {transItem.status === 'served' && (
                                      <View style={styles.servedBtn}>
                                        <Text style={styles.btnText}>
                                          Served
                                        </Text>
                                      </View>
                                    )}

                                    {/* {transItem.status !== 'new' && (
                            <View style={styles.newOrder}>
                              <Text style={styles.btnText}>
                                {transItem.status}
                              </Text>
                            </View>
                          )} */}
                                  </View>
                                </Text>
                              </View>
                            ),
                          )}
                        </ScrollView>
                      </View>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}
