import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {List, DataTable} from 'react-native-paper';
import male from '../../../../images/male3.png';
import redRyori from '../../../../images/redRyori.png';
import {OrderListStyles as styles} from './orderProductListStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';

export default function DoneOrder() {
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
                            {transItem.status === 'served' && (
                              <View style={styles.checkOrder}>
                                <Text style={styles.btnText}>Served</Text>
                              </View>
                            )}
                          </View>
                        </View>
                      ))}
                      {/* {-----------Pay cash-------------} */}
                      {item.status === 'done' && (
                        <>
                          <View style={styles.toCashDone}>
                            <Text style={styles.payCashBtnText}>Paid: ₱ </Text>
                            <Text style={styles.payCashBtnText}>
                              {item.total}
                            </Text>
                          </View>
                        </>
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
