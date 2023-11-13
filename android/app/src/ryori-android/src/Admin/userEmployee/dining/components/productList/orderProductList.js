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
  const socket = io(API_URL);

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
      if (response.data) {
        const statusPreparing = await response.data
          .filter(transactionStatus => transactionStatus.status !== 'complete')
          .filter(transactionStatus => transactionStatus.status !== 'complete')
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
      navigation.navigate('Login-admin');
    }
  };

  const watchPushNotifications = async () => {
    const branch_Id = await AsyncStorage.getItem('branch_Id');
    const channelName = `channel-branch-${branch_Id}`;
    PushNotification.createChannel({
      channelId: channelName,
      channelName: channelName,
      playSound: true,
      vibrate: true,
    });
    socket.emit('join-channel-branch', {branch_Id});
    socket.on('join-channel-branch-response', () => {
      console.log('Connected to branch ' + branch_Id);
    });
    socket.on('message-to-branch', data => {
      if (data) {
        const options = {
          channelId: channelName,
          title: data.title,
          message: data.message,
          playSound: true,
          vibrate: true,
        };
        PushNotification.localNotification(options);
        fetchTransactionsData();
      }
    });
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, []),
  );

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
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateTransactionItem = async (_id, newStatus, transactionKey) => {
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
      // This will send a blank message to the customer to update their current page.
      socket.emit('message-to-customer', {
        customer_socket: response.data.customer_socket,
      });

      const _transaction = [...transactionData];
      _transaction[transactionKey]; //.find(item => item._id === _id).status = newStatus;
      _transaction[transactionKey].transactionItems.find(
        item => item._id === _id,
      ).status = newStatus;
      setTransactionData(_transaction);
    } catch (error) {
      console.error('Error updating transaction data:', error);
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
    watchPushNotifications();
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
                      {item.status === 'draft' && (
                        <FontAwesome
                          name="circle"
                          color={'#DB1B1B'}
                          size={20}
                        />
                      )}
                      {item.status === 'new' && (
                        <FontAwesome
                          name="circle"
                          color={'#4285F4'}
                          size={20}
                        />
                      )}
                      {item.status === 'cooking' && (
                        <FontAwesome
                          name="circle"
                          color={'#FF7A00'}
                          size={20}
                        />
                      )}
                      {item.status === 'ready' && (
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
                      {item.status === 'paying' && (
                        <FontAwesome name="circle" color={'red'} size={20} />
                      )}
                      {item.status === 'complete' && (
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
                      {item.status === 'paying' && (
                        <View style={styles.toCash}>
                          <Text style={styles.payCashBtnText}>
                            Requesting Payment
                          </Text>
                        </View>
                      )}
                      {item.status === 'to_pay_gcash' && (
                        <View style={styles.toCash}>
                          <Text style={styles.payCashBtnText}>
                            Pay via GCash
                          </Text>
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
                              style={[styles.TBtn, styles.doneColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'paying');
                              }}>
                              <Text style={styles.btnText}>Paying</Text>
                            </TouchableOpacity>
                          )}
                          {item.status === 'cancelled' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.cancelColor]}>
                              <Text style={styles.btnText}>Canceled</Text>
                            </TouchableOpacity>
                          )}

                          {/* {-----------Pay cash-------------} */}

                          {item.status === 'paying' && (
                            <TouchableOpacity
                              style={[styles.TBtn, styles.toPrepareColor]}
                              onPress={() => {
                                updateTransStatus(item._id, 'complete');
                              }}>
                              <Text style={styles.btnText}>Complete</Text>
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

                        <View>
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
                                  <View>
                                    <Text
                                      style={[
                                        styles.columnItems,
                                        styles.textItem,
                                      ]}>
                                      {transItem.menuItem.title || ''}
                                    </Text>
                                    <Text style={styles.nameItem}>
                                      {transItem.customer_name || ''}
                                    </Text>
                                  </View>
                                  <Text
                                    style={[styles.mngBtn, styles.textItem]}>
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
                                                index,
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
                                                'cancelled',
                                                index,
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
                                              index,
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
                                              index,
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
                                              index,
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
