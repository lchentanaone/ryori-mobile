import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {OrderListStyles as styles} from './orderProductListStyles';
import male from '../../../../images/male3.png';
import redRyori from '../../../../images/redRyori.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import SkeletonItem from '../../../../../utils/skeletonItem';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import PushNotification from 'react-native-push-notification';
import io from 'socket.io-client';

export default function OrderProductList({navigation}) {
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
      if (response.data) {
        setUserData(response.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const watchPushNotifications = async () => {
    const branch_Id = await AsyncStorage.getItem('branch_Id');
    const socket = io(API_URL);
    socket.on('connection', () => {
      console.log('Connected to server');
    });
    socket.on('message', data => {
      if (data) {
        const options = {
          channelId: data.channelId,
          title: data.title,
          message: data.message,
          playSound: true,
          vibrate: true,
        };
        PushNotification.localNotification(options);
      }
    });

    return () => {
      socket.disconnect();
    };
  };

  useEffect(() => {
    createChannel();
    watchPushNotifications();
  }, []);

  const createChannel = async () => {
    const branch_Id = await AsyncStorage.getItem('branch_Id');
    PushNotification.createChannel({
      channelId: 'sc-channel-' + branch_Id,
      channelName: 'sc-channel-' + branch_Id,
      playSound: true,
      vibrate: true,
    });
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, []),
  );

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

      if (response.data) {
        const statusPreparing = await response.data
          .filter(transactionStatus => transactionStatus.status !== 'done')
          .map(tempData => {
            tempData.grandTotal = tempData.total;

            if (tempData.charges > 0) {
              tempData.grandTotal =
                parseFloat(tempData.grandTotal) + parseFloat(tempData.charges);
            }
            if (tempData.discount > 0) {
              tempData.grandTotal =
                parseFloat(tempData.grandTotal) - parseFloat(tempData.discount);
            }
            return tempData;
          });

        setTransactionData(statusPreparing);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const chargeDiscount = async (_id, index) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.patch(
        `${API_URL}/pos/transaction/${_id}`,
        {
          table: transactionData[index].table,
          charges: transactionData[index].charges,
          discount: transactionData[index].discount,
        },
        {headers},
      );
      fetchTransactionsData();
      console.log({response});
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
        },
        {headers},
      );
      fetchTransactionsData();
      console.log({response});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateTransactionItem = async (_id, newStatus) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.patch(
        `${API_URL}/pos/transactionItem/${_id}`,
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

  const handleChangeText = (key, value, index) => {
    const tempData = [...transactionData];
    tempData[index][key] = value;

    tempData[index].grandTotal = tempData[index].total;

    if (tempData[index].charges > 0) {
      tempData[index].grandTotal =
        parseFloat(tempData[index].grandTotal) +
        parseFloat(tempData[index].charges);
    }
    if (tempData[index].discount > 0) {
      tempData[index].grandTotal =
        parseFloat(tempData[index].grandTotal) -
        parseFloat(tempData[index].discount);
    }

    setTransactionData(tempData);
  };

  useEffect(() => {
    fetchTransactionsData();
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
        <KeyboardAwareScrollView>
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
                      {/* <FontAwesome name="circle" color={'#FF7A00'} size={20} /> */}
                      {item.status === 'new' && (
                        <FontAwesome name="circle" color={'red'} size={20} />
                      )}
                      {item.status === 'to_prepare' && (
                        <FontAwesome
                          name="circle"
                          color={'#4285F4'}
                          size={20}
                        />
                      )}
                      {item.status === 'preparing' && (
                        <FontAwesome
                          name="circle"
                          color={'#FF7A00'}
                          size={20}
                        />
                      )}
                      {item.status === 'serving' && (
                        <FontAwesome
                          name="circle"
                          color={'#efb700'}
                          size={20}
                        />
                      )}
                      {item.status === 'served' && (
                        <FontAwesome
                          name="circle"
                          color={'#12BF38'}
                          size={20}
                        />
                      )}
                      {item.status === 'done' && (
                        <FontAwesome
                          name="circle"
                          color={'#12BF38'}
                          size={20}
                        />
                      )}
                      {item.status === 'awaiting_payment_method' && (
                        <FontAwesome
                          name="circle"
                          color={'#4285F4'}
                          size={20}
                        />
                      )}
                      <Text
                        style={styles.tableText}>{`Table ${item.table} `}</Text>
                      {item.status === 'to_pay_cash' && (
                        <View style={styles.toCash}>
                          <Text style={styles.payCashBtnText}>Pay Cash</Text>
                        </View>
                      )}

                      {item.status === 'awaiting_payment_method' && (
                        <View style={styles.toCash}>
                          <Text style={styles.payCashBtnText}>
                            Pay via Gcash
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>

                    {item.expanded && (
                      <View style={styles.content}>
                        <View style={styles.textFields}>
                          <Text style={styles.label}>Table No.</Text>
                          <TextInput
                            mode="outlined"
                            style={[styles.input, styles.inputs]}
                            keyboardType="numeric"
                            value={item.table ? item.table.toString() : ''}
                            onChangeText={value => {
                              handleChangeText('table', value, index);
                            }}
                          />
                        </View>
                        <View style={styles.textFields}>
                          <Text style={styles.label}>Charges:</Text>
                          <TextInput
                            mode="outlined"
                            style={[styles.input, styles.inputs]}
                            keyboardType="numeric"
                            placeholderTextColor={'#777777'}
                            placeholder="Charges"
                            value={item.charges ? item.charges.toString() : ''} // Convert to string
                            onChangeText={value => {
                              handleChangeText('charges', value, index);
                            }}
                          />
                        </View>
                        <View style={styles.textFields}>
                          <Text style={styles.label}>Discount:</Text>
                          <TextInput
                            mode="outlined"
                            style={[styles.input, styles.inputs]}
                            keyboardType="numeric"
                            placeholder="Discount"
                            placeholderTextColor={'#777777'}
                            value={
                              item.discount ? item.discount.toString() : ''
                            } // Convert to string
                            onChangeText={value => {
                              handleChangeText('discount', value, index);
                            }}
                          />
                        </View>
                        <View style={styles.savebtn}>
                          <TouchableOpacity
                            style={styles.save}
                            onPress={() => {
                              chargeDiscount(item._id, index);
                            }}>
                            <Text style={styles.btnText}>Save</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.textFields}>
                          <Text style={styles.label}>Set Status:</Text>
                          {item.status === 'new' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.toPrepareColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'to_prepare');
                              }}>
                              <Text style={styles.btnText}>To prepare</Text>
                            </TouchableOpacity>
                          )}
                          {item.status === 'to_prepare' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.toPrepareColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'preparing');
                              }}>
                              <Text style={styles.btnText}>Preparing</Text>
                            </TouchableOpacity>
                          )}
                          {item.status === 'preparing' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.preparingColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'serving');
                              }}>
                              <Text style={styles.btnText}>Serving</Text>
                            </TouchableOpacity>
                          )}
                          {item.status === 'serving' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.servingColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'served');
                              }}>
                              <Text style={styles.btnText}>Serve</Text>
                            </TouchableOpacity>
                          )}
                          {item.status === 'served' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.doneColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'done');
                              }}>
                              <Text style={styles.btnText}>Done</Text>
                            </TouchableOpacity>
                          )}
                          {item.status === 'cancel' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.cancelColor]}>
                              <Text style={styles.btnText}>Canceled</Text>
                            </TouchableOpacity>
                          )}

                          {/* {-----------Pay cash-------------} */}

                          {item.status === 'to_pay_cash' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.toPrepareColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'done');
                              }}>
                              <Text style={styles.btnText}>Confirmed</Text>
                            </TouchableOpacity>
                          )}
                          {item.status === 'awaiting_payment_method' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.toPrepareColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'done');
                              }}>
                              <Text style={styles.btnText}>Confirmed</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                        <View style={styles.textFields}>
                          <Text style={styles.label}>
                            Total: {'   '} ₱{item.grandTotal || item.total}
                          </Text>
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
                            <Text
                              style={[styles.columnItem, styles.headerText]}>
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
                                    style={[
                                      styles.columnItems,
                                      styles.textItem,
                                    ]}>
                                    {transItem.menuItem.title || ''}
                                  </Text>
                                  <Text
                                    style={[styles.mngBtn, styles.textItem]}>
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
                                          style={[
                                            styles.TiBtn,
                                            styles.cancelColor,
                                          ]}>
                                          <Text style={styles.btnText}>
                                            Canceled
                                          </Text>
                                        </TouchableOpacity>
                                      )}

                                      {transItem.status === 'preparing' && (
                                        <TouchableOpacity
                                          style={[
                                            styles.TiBtn,
                                            styles.preparingColor,
                                          ]}
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
                                            Serve
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
        </KeyboardAwareScrollView>
      </View>
    </>
  );
}
