import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import redRyori from '../../../images/redRyori.png';
import {List, DataTable} from 'react-native-paper';
import {OrderStyle as styles} from './orderStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';

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
        }}>
        <View style={styles.accordions}>
          <ScrollView>
            {transactionData.map((item, index) => (
              <List.Section key={index}>
                <View style={styles.accordionList}>
                  <List.Accordion
                    title={`Table ${'2'}   ${item.id}`}
                    titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 16}}
                    theme={{colors: {primary: '#000'}}}
                    // expanded={expanded}
                    onPress={handlePress}
                    left={props => (
                      <FontAwesome name="circle" color={'#0085ff'} size={20} />
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
                            <TouchableOpacity
                              style={styles.newOrderBtn}
                              onPress={() => {
                                updateTransactionItem(
                                  transItem.id,
                                  'preparing',
                                );
                              }}>
                              <Text style={styles.newBtnText}>Preparing</Text>
                            </TouchableOpacity>
                          )}
                          {transItem.status === 'preparing' && (
                            <TouchableOpacity
                              style={styles.preparingBtn}
                              onPress={() => {
                                updateTransactionItem(transItem.id, 'serving');
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
                                updateTransactionItem(transItem.id, 'served');
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
                          {/* {transItem.status === 'canceled' && (
                            <TouchableOpacity style={styles.cancelOrder}>
                              <Text style={styles.preparingBtnText}>
                                Canceled
                              </Text>
                            </TouchableOpacity>
                          )} */}
                        </View>
                      </View>
                    ))}
                  </List.Accordion>
                </View>
              </List.Section>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
