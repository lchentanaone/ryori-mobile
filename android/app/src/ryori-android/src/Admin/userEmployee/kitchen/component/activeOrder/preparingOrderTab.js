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
      navigation.navigate('Login-admin');
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
      const statusNew = response.data.filter(
        transactionStatus =>
          transactionStatus.status !== 'draft' &&
          transactionStatus.status !== 'complete' &&
          transactionStatus.status !== 'cancel',
      );
      setTransactionData(statusNew);
    } catch (error) {
      navigation.navigate('Login-admin');
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
        },
        {headers},
      );
      fetchTransactionsData();
    } catch (error) {
      navigation.navigate('Login-admin');
    }
  };

  // const updateTransactionItem = async (_id, newStatus, transactionKey) => {
  //   try {
  //     const token = await AsyncStorage.getItem('access_token');
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };
  //     const response = await axios.patch(
  //       `${API_URL}/pos/transactionItem/${_id}`,
  //       {
  //         status: newStatus,
  //       },
  //       {headers},
  //     );
  //     const _transaction = [...transactionData];
  //     _transaction[transactionKey]; //.find(item => item._id === _id).status = newStatus;
  //     _transaction[transactionKey].transactionItems.find(
  //       item => item._id === _id,
  //     ).status = newStatus;
  //     setTransactionData(_transaction);
  //   } catch (error) {
  //     console.error('Error updating transaction data:', error);
  //   }
  // };

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

          <TouchableOpacity
            style={styles.viewProfile}
            onPress={() => navigation.navigate('Profile Employee')}>
            <Image source={male} style={styles.crewImage} />
            {userData ? (
              <View style={{top: -5}}>
                <Text style={styles.crewName}>{userData.firstName}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            ) : (
              <Text>Loading user...</Text>
            )}
          </TouchableOpacity>
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
                    {item.status === 'draft' && (
                      <FontAwesome name="circle" color={'#DB1B1B'} size={20} />
                    )}
                    {item.status === 'new' && (
                      <FontAwesome name="circle" color={'#4285F4'} size={20} />
                    )}
                    {item.status === 'cooking' && (
                      <FontAwesome name="circle" color={'#FF7A00'} size={20} />
                    )}
                    {item.status === 'ready' && (
                      <FontAwesome name="circle" color={'#efb700'} size={20} />
                    )}
                    {item.status === 'served' && (
                      <FontAwesome name="circle" color={'#12BF38'} size={20} />
                    )}
                    {item.status === 'paying' && (
                      <FontAwesome name="circle" color={'red'} size={20} />
                    )}
                    {item.status === 'complete' && (
                      <FontAwesome name="circle" color={'#12BF38'} size={20} />
                    )}
                    {item.status === 'awaiting_payment_method' && (
                      <FontAwesome name="circle" color={'#4285F4'} size={20} />
                    )}
                    <Text
                      style={styles.tableText}>{`Table ${item.table} `}</Text>
                  </TouchableOpacity>

                  {item.expanded && (
                    <View style={styles.content}>
                      <View style={styles.textFields}>
                        <Text style={styles.label}>Set Status:</Text>
                        {item.status === 'draft' && (
                          <TouchableOpacity
                            style={[styles.TBtn, styles.statusDraft]}
                            onPress={() => {
                              updateTransStatus(item._id, 'new');
                            }}>
                            <Text style={styles.btnText}>New</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'new' && (
                          <TouchableOpacity
                            style={[styles.TBtn, styles.statusNew]}
                            onPress={() => {
                              updateTransStatus(item._id, 'cooking');
                            }}>
                            <Text style={styles.btnText}>Cooking</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'cooking' && (
                          <TouchableOpacity
                            style={[styles.TBtn, styles.statusCooking]}
                            onPress={() => {
                              updateTransStatus(item._id, 'ready');
                            }}>
                            <Text style={styles.btnText}>Ready</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'ready' && (
                          <TouchableOpacity
                            style={[styles.TBtn, styles.statusReady]}
                            onPress={() => {
                              updateTransStatus(item._id, 'served');
                            }}>
                            <Text style={styles.btnText}>Served</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'served' && (
                          <TouchableOpacity
                            style={[styles.TBtn, styles.doneColor]}>
                            <Text style={styles.btnText}>Served</Text>
                          </TouchableOpacity>
                        )}
                        {item.status === 'awaiting_payment_method' && (
                          <View style={[styles.TBtn, styles.doneColor]}>
                            <Text style={styles.btnText}>Served</Text>
                          </View>
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

                      <View>
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
                                    {transItem.status === 'draft' && (
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                        }}>
                                        <TouchableOpacity
                                          style={styles.newOrder}
                                          onPress={() =>
                                            updateTransactionItem(
                                              transItem._id,
                                              'new',
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
                                    {transItem.status === 'cancelled' && (
                                      <View
                                        style={[
                                          styles.TiBtn,
                                          styles.cancelColor,
                                        ]}>
                                        <Text style={styles.btnText}>
                                          Canceled
                                        </Text>
                                      </View>
                                    )}

                                    {transItem.status === 'new' && (
                                      <TouchableOpacity
                                        style={[
                                          styles.TiBtn,
                                          styles.preparingColor,
                                        ]}
                                        onPress={() => {
                                          updateTransactionItem(
                                            transItem._id,
                                            'cooking',
                                          );
                                        }}>
                                        <Text style={styles.btnText}>
                                          Cooking
                                        </Text>
                                      </TouchableOpacity>
                                    )}
                                    {transItem.status === 'cooking' && (
                                      <TouchableOpacity
                                        style={[
                                          styles.TiBtn,
                                          styles.statusCooking,
                                        ]}
                                        onPress={() => {
                                          updateTransactionItem(
                                            transItem._id,
                                            'ready',
                                          );
                                        }}>
                                        <Text style={styles.btnText}>
                                          Ready
                                        </Text>
                                      </TouchableOpacity>
                                    )}
                                    {transItem.status === 'ready' && (
                                      <TouchableOpacity
                                        style={[
                                          styles.TiBtn,
                                          styles.servingColor,
                                        ]}
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
                                      <View
                                        style={[
                                          styles.TiBtn,
                                          styles.doneColor,
                                        ]}>
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
