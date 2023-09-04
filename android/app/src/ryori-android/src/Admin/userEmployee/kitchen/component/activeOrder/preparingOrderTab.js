import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import redRyori from '../../../../images/redRyori.png';
import {List} from 'react-native-paper';
import {OrderStyle as styles} from './orderStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';

export default function PreparingOrderTab({route}) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
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
          transactionStatus.status !== 'new' &&
          transactionStatus.status !== 'done',
      );
      setTransactionData(statusNew);
      console.log({statusNew});
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
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 5,
          }}>
          <View style={styles.accordions}>
            <ScrollView>
              {transactionData.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <TouchableOpacity onPress={handlePress} style={styles.title}>
                    <FontAwesome name="circle" color={'#FF7A00'} size={20} />
                    <Text
                      style={
                        styles.tableText
                      }>{`Table ${item.table} ${item.id}`}</Text>
                  </TouchableOpacity>

                  {expanded && (
                    <View style={styles.content}>
                      <View
                        style={{
                          flexDirection: 'row',
                          // justifyContent: 'center',
                          marginTop: 5,
                          marginBottom: 10,
                        }}></View>
                      <Text> Notes: {item.notes} </Text>
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
                            Status
                          </Text>
                        </View>
                        <ScrollView>
                          {item.transactionItem.map((transItem, transIndex) => (
                            <View key={transIndex} style={styles.tableRow}>
                              <Text style={[styles.columnQty, styles.textItem]}>
                                {transItem.quantity}
                              </Text>
                              <Text
                                style={[styles.columnItems, styles.textItem]}>
                                {transItem.menuItem.title || ''}
                              </Text>
                              <Text style={[styles.mngBtn, styles.textItem]}>
                                <View style={styles.buttons}>
                                  <View style={styles.buttons}>
                                    {transItem.status === 'new' && (
                                      <TouchableOpacity
                                        style={styles.newOrderBtn}
                                        onPress={() => {
                                          updateTransactionItem(
                                            transItem.id,
                                            'preparing',
                                          );
                                        }}>
                                        <Text style={styles.newBtnText}>
                                          Preparing
                                        </Text>
                                      </TouchableOpacity>
                                    )}
                                    {transItem.status === 'preparing' && (
                                      <TouchableOpacity
                                        style={styles.preparingBtn}
                                        onPress={() => {
                                          updateTransactionItem(
                                            transItem.id,
                                            'serving',
                                          );
                                        }}>
                                        <Text style={styles.preparingBtnText}>
                                          Serving
                                        </Text>
                                      </TouchableOpacity>
                                    )}

                                    {transItem.status === 'serving' && (
                                      <TouchableOpacity
                                        style={styles.servingBtn}
                                        onPress={() => {
                                          updateTransactionItem(
                                            transItem.id,
                                            'served',
                                          );
                                        }}>
                                        <Text style={styles.preparingBtnText}>
                                          Served
                                        </Text>
                                      </TouchableOpacity>
                                    )}
                                    {transItem.status === 'served' && (
                                      <View style={styles.servedBtn}>
                                        <Text style={styles.preparingBtnText}>
                                          Served
                                        </Text>
                                      </View>
                                    )}
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
      </View>
    </>
  );
}
