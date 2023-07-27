import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import redRyori from '../../../../images/redRyori.png';
import {PrepareStyle as pstyles} from './prepareStyle';
import {OrderStyle as styles} from '../orderStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';

export default function PreparingOrderTable({route, navigation}) {
  const {item} = route.params;
  console.log(item);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      console.log('StoresID', {store_Id});
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/pos/transaction/${item}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },

        {headers},
      );
      setTransactionData(response.data);
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
    <View style={styles.activeOrder}>
      <View style={styles.ryoriIcon}>
        <Image source={redRyori} style={styles.ryori} />
        <Text
          style={styles.ryoriIconText}>{`Table #7 ${transactionData.id}`}</Text>
      </View>

      <View style={pstyles.table}>
        {transactionData.transactionItem &&
          transactionData.transactionItem.map((transItem, transIndex) => (
            <View key={transIndex}>
              <View style={{flexDirection: 'row'}}>
                <Text style={pstyles.quantity}>{transItem.quantity}</Text>
                <Text style={pstyles.item}>
                  {transItem.menuItem.title || ''}
                </Text>
              </View>
              <View style={pstyles.buttonsContainer}>
                <View style={pstyles.buttons}>
                  {transItem.status === 'new' && (
                    <TouchableOpacity
                      style={pstyles.preparingBtn}
                      onPress={() => {
                        updateTransactionItem(transItem.id, 'preparing');
                      }}>
                      <Text style={pstyles.btnText}>Preparing</Text>
                    </TouchableOpacity>
                  )}
                  {transItem.status === 'preparing' && (
                    <TouchableOpacity
                      style={pstyles.preparingBtn}
                      onPress={() => {
                        updateTransactionItem(transItem.id, 'serving');
                      }}>
                      <Text style={pstyles.btnText}>Serving</Text>
                    </TouchableOpacity>
                  )}
                  {transItem.status === 'serving' && (
                    <TouchableOpacity
                      style={pstyles.preparingBtn}
                      onPress={() => {
                        updateTransactionItem(transItem.id, 'done');
                      }}>
                      <Text style={pstyles.btnText}>Done</Text>
                    </TouchableOpacity>
                  )}
                  {transItem.status === 'done' && (
                    <TouchableOpacity style={pstyles.preparingBtn}>
                      <Text style={pstyles.btnText}>Done</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View style={{borderBottomWidth: 0.5}} />
            </View>
          ))}
      </View>
    </View>
  );
}
