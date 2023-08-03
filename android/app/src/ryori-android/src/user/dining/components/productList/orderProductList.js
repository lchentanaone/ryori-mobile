import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {OrderListStyles as styles} from './orderProductListStyles';
import male from '../../../images/male3.png';
import redRyori from '../../../images/redRyori.png';
import {List} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

export default function OrderProductList({navigation}) {
  const [expanded, setExpanded] = React.useState(true);
  const [total, setTotal] = useState(0);
  const handlePress = () => setExpanded(!expanded);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const store_Id = await AsyncStorage.getItem('store_Id');
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
      const statusPreparing = response.data.filter(
        transactionStatus => transactionStatus.status !== 'done',
      );
      setTransactionData(statusPreparing);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateTransStatus = async (id, newStatus) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.patch(
        `${API_URL}/pos/transaction/${id}`,
        {
          status: newStatus,
        },
        {headers},
      );
      fetchTransactionsData();
      console.log(response);
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
      console.log(response);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const deleteTransactionItem = async id => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.delete(
        `${API_URL}/pos/transactionItem/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      fetchTransactionsData();
      console.log(response);
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
        <View
          style={{
            width: '100%',
          }}>
          <View style={styles.accordions}>
            <ScrollView>
              {transactionData.map((item, index) => (
                <List.Section key={index}>
                  <View style={styles.accordionList}>
                    <List.Accordion
                      title={`Table # ${item.table} ${item.id}`}
                      titleStyle={{
                        fontFamily: 'Quicksand-SemiBold',
                        fontSize: 18,
                      }}
                      theme={{colors: {primary: '#000'}}}
                      onPress={handlePress}
                      left={props => (
                        <FontAwesome
                          name="circle"
                          color={'#FF7A00'}
                          size={20}
                        />
                      )}>
                      {item.transactionItem.map((transItem, transIndex) => (
                        <View key={transIndex} style={styles.table}>
                          <View style={styles.qtyItem}>
                            <Text style={styles.quantity}>
                              {transItem.quantity}
                            </Text>
                            <Text style={styles.item}>
                              {transItem.menuItem.title || ''}
                            </Text>
                          </View>
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
                                      transItem.id,
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
                                  onPress={() => {
                                    deleteTransactionItem(transItem.id);
                                  }}>
                                  <MaterialIcons
                                    name="cancel"
                                    color={'#DB1B1B'}
                                    size={27}
                                  />
                                </TouchableOpacity>
                              </View>
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
                                <Text style={styles.btnText}>serving</Text>
                              </TouchableOpacity>
                            )}
                            {transItem.status === 'serving' && (
                              <TouchableOpacity
                                style={styles.servingBtn}
                                onPress={() => {
                                  updateTransactionItem(transItem.id, 'served');
                                }}>
                                <Text style={styles.btnText}>served</Text>
                              </TouchableOpacity>
                            )}
                            {transItem.status === 'served' && (
                              <View style={styles.servedBtn}>
                                <Text style={styles.btnText}>Served</Text>
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
                        </View>
                      ))}
                      {item.status === 'new' && (
                        <TouchableOpacity
                          style={styles.toPrepareBtn}
                          onPress={() => {
                            updateTransStatus(item.id, 'to_prepare');
                          }}>
                          <Text style={styles.btnText}>To Prepare</Text>
                        </TouchableOpacity>
                      )}
                      {item.status === 'to_prepare' && (
                        <View
                          style={styles.toPrepareBtn}
                          // onPress={() => {
                          //   updateTransStatus(item.id, 'to_prepare');
                          // }}
                        >
                          <Text style={styles.btnText}>Preparing</Text>
                        </View>
                      )}
                      {item.status === 'preparing' && (
                        <View style={styles.toPrepareBtn}>
                          <Text style={styles.btnText}>{item.status}</Text>
                        </View>
                      )}
                      {item.status === 'serving' && (
                        <View style={styles.toPrepareBtn}>
                          <Text style={styles.btnText}>{item.status}</Text>
                        </View>
                      )}
                      {item.status === 'served' && (
                        <View style={styles.toPrepareBtn}>
                          <Text style={styles.btnText}>{item.status}</Text>
                        </View>
                      )}
                      {/* {-----------Pay cash-------------} */}

                      {item.status === 'to_pay' && (
                        <View style={styles.toCash}>
                          <Text style={styles.payCashBtnText}>
                            Pay Cash: ₱{' '}
                          </Text>
                          <Text style={styles.payCashBtnText}>
                            {item.total}
                          </Text>
                        </View>
                      )}
                      {item.status === 'to_pay' && (
                        <TouchableOpacity
                          style={styles.toPrepareBtn}
                          onPress={() => {
                            updateTransStatus(item.id, 'done');
                            // navigation.navigate('PaymentReceived');
                          }}>
                          <Text style={styles.btnText}>Confirm</Text>
                        </TouchableOpacity>
                      )}
                    </List.Accordion>
                  </View>
                </List.Section>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}
