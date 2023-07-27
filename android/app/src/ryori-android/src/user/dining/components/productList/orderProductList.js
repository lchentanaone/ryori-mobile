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
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

export default function OrderProductList({navigation}) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [transactionData, setTransactionData] = useState([]);

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
      setTransactionData(response.data);
      console.log(response.data);
      console.log({transactionData});
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
                      title={`Table #2 ${item.id}`}
                      titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                      theme={{colors: {primary: '#000'}}}
                      // expanded={expanded}
                      onPress={handlePress}
                      left={props => (
                        <FontAwesome
                          name="circle"
                          color={'#FF7A00'}
                          size={20}
                        />
                      )}
                      // right={props => (
                      //   <TouchableOpacity>
                      //     <Text>To Prepare</Text>
                      //   </TouchableOpacity>
                      // )}
                      style={{
                        fontSize: 30,
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 15,
                      }}>
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
                                style={styles.newOrder}
                                onPress={() => {
                                  updateTransactionItem(
                                    transItem.id,
                                    'canceled',
                                  );
                                }}>
                                <Text style={styles.btnText}>Cancel</Text>
                              </TouchableOpacity>
                            )}
                            {transItem.status === 'canceled' && (
                              <TouchableOpacity style={styles.cancelOrder}>
                                <Text style={styles.btnText}>Canceled</Text>
                              </TouchableOpacity>
                            )}
                            {/* {transItem.status !== 'new' && (
                              <View style={styles.readyServeBtn}>
                                <TouchableOpacity style={styles.btnText}>
                                  {transItem.status}
                                </TouchableOpacity>
                              </View>
                            )} */}
                          </View>
                        </View>
                      ))}
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'red',
                          width: 200,
                          height: 38,
                          marginLeft: 70,
                          justifyContent: 'center',
                          marginBottom: 10,
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 16,
                            fontFamily: 'Quicksand-Medium',
                          }}>
                          To Prepare
                        </Text>
                      </TouchableOpacity>
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
