import React, {useState, useCallback} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import redRyori from '../../../../images/redRyori.png';
import {OrderListStyles as styles} from './orderProductListStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import {useFocusEffect} from '@react-navigation/native';

export default function DoneOrder() {
  const [transactionData, setTransactionData] = useState([]);

  const handlePress = index => {
    const tempData = [...transactionData];
    tempData[index].expanded = !tempData[index].expanded;
    setTransactionData(tempData);
  };

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/pos/transactionarchive/today?branch_Id=${branch_Id}`,
        {headers},
      );
      if (response.data) {
        const statusPreparing = await response.data
          .filter(transactionStatus => transactionStatus.status === 'complete')
          .map(tempData => {
            tempData.grandTotal = tempData.amount;
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

  useFocusEffect(
    useCallback(() => {
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
            <Text style={styles.ryoriIconText}>Done Orders</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 10,
          }}>
          <ScrollView>
            {transactionData.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() => handlePress(index)}
                  style={styles.title}>
                  <FontAwesome name="circle" color={'#12BF38'} size={20} />
                  <Text style={styles.tableText}>{`Table ${item.table} `}</Text>
                  {item.status === 'to_pay_cash' && (
                    <View style={styles.toCash}>
                      <Text style={styles.payCashBtnText}>Pay Cash</Text>
                    </View>
                  )}
                </TouchableOpacity>

                {item.expanded && (
                  <View style={styles.content}>
                    <View style={styles.textFields}>
                      <Text style={styles.label}>Charges:</Text>
                      <Text style={styles.label}>₱ {item.charges || '0'}</Text>
                    </View>
                    <View style={styles.textFields}>
                      <Text style={styles.label}>Discount:</Text>
                      <Text style={styles.label}>₱ {item.discount || '0'}</Text>
                    </View>

                    <View style={styles.textFields}>
                      <Text style={styles.label}>Status:</Text>
                      {item.status === 'complete' && (
                        <Text>
                          <Text style={styles.label}>Done</Text>
                        </Text>
                      )}
                    </View>

                    <View style={styles.textFields}>
                      <Text style={styles.label}>Subtotal: </Text>
                      <Text style={styles.label}>₱ {item.amount}</Text>
                    </View>
                    <View style={styles.textFields}>
                      <Text style={styles.label}>Total: </Text>
                      <Text style={styles.label}>
                        ₱ {item.grandTotal || item.amount}
                      </Text>
                    </View>

                    <View>
                      <View style={styles.tableRow}>
                        <Text style={[styles.columnQty, styles.headerText]}>
                          Qty
                        </Text>
                        <Text style={[styles.columnItem, styles.headerText]}>
                          Order Item
                        </Text>
                        <Text style={[styles.columnMngBtn, styles.headerText]}>
                          Manage
                        </Text>
                      </View>
                      <ScrollView>
                        {item.transactionItems.map((transItem, transIndex) => (
                          <View key={transIndex} style={styles.tableRow}>
                            <Text style={[styles.columnQty, styles.textItem]}>
                              {transItem.quantity}
                            </Text>
                            <Text style={[styles.columnItems, styles.textItem]}>
                              {transItem.menuItem.title || ''}
                            </Text>
                            <Text style={[styles.mngBtn, styles.textItem]}>
                              <View style={styles.buttons}>
                                {transItem.status === 'cancelled' && (
                                  <View
                                    style={[styles.TiBtn, styles.cancelColor]}>
                                    <Text style={styles.btnText}>Canceled</Text>
                                  </View>
                                )}
                                {transItem.status === 'new' && (
                                  <View
                                    style={[styles.TiBtn, styles.statusNew]}>
                                    <Text style={styles.btnText}>New</Text>
                                  </View>
                                )}
                                {transItem.status === 'cooking' && (
                                  <View
                                    style={[
                                      styles.TiBtn,
                                      styles.statusCooking,
                                    ]}>
                                    <Text style={styles.btnText}>Cooking</Text>
                                  </View>
                                )}
                                {transItem.status === 'ready' && (
                                  <View
                                    style={[styles.TiBtn, styles.statusReady]}>
                                    <Text style={styles.btnText}>Ready</Text>
                                  </View>
                                )}
                                {transItem.status === 'served' && (
                                  <View
                                    style={[styles.TiBtn, styles.doneColor]}>
                                    <Text style={styles.btnText}>Served</Text>
                                  </View>
                                )}
                              </View>
                            </Text>
                          </View>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
