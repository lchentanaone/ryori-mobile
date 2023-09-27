import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {List, DataTable} from 'react-native-paper';
import redRyori from '../../../../images/redRyori.png';
import {OrderListStyles as styles} from './orderProductListStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';

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
        `${API_URL}/pos/transaction?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },

        {headers},
      );
      const statusDone = response.data.filter(
        transactionStatus => transactionStatus.status === 'done',
      );
      setTransactionData(statusDone);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
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
                  <FontAwesome name="circle" color={'#FF7A00'} size={20} />
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
                      <Text style={styles.label}>{item.charges}</Text>
                    </View>
                    <View style={styles.textFields}>
                      <Text style={styles.label}>Discount:</Text>
                      <Text style={styles.label}>{item.discount}</Text>
                    </View>

                    <View style={styles.textFields}>
                      <Text style={styles.label}>Set Status:</Text>
                      <Text style={styles.label}>{item.status}</Text>

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
                      <Text style={styles.label}>Total: </Text>
                      <Text style={styles.label}>
                        ₱ {'   '}
                        {item.total}
                      </Text>
                    </View>

                    <View style={styles.tableContainer}>
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
                                <View style={styles.servedBtn}>
                                  <Text style={styles.btnText}>
                                    {transItem.status}
                                  </Text>
                                </View>
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
