import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TransacStyle} from './transactionStyle';
import {DataTable} from 'react-native-paper';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TransactionList() {
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
      const status = response.data.filter(
        transactionStatus => transactionStatus.status === 'to_prepare',
      );
      setTransactionData(status);
      console.log({status});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    fetchTransactionsData();
  }, []);
  return (
    <View style={TransacStyle.listArchive}>
      <View style={TransacStyle.listArchiveC}>
        <View>
          <DataTable>
            <DataTable.Header style={TransacStyle.tableHeader}>
              <DataTable.Title style={{flex: 0.3}}>
                <Text style={TransacStyle.textHeader}>ID</Text>
              </DataTable.Title>
              <DataTable.Title style={{flex: 0.3}}>
                <Text style={TransacStyle.textHeader}>Table</Text>
              </DataTable.Title>
              <DataTable.Title style={{flex: 1.8}}>
                <Text style={TransacStyle.textHeader}>Transactions</Text>
              </DataTable.Title>
              <DataTable.Title style={{flex: 0.5}}>
                <Text style={TransacStyle.textHeader}>Date</Text>
              </DataTable.Title>
              <DataTable.Title style={{flex: 0.5}}>
                <Text style={TransacStyle.textHeader}>Total</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView style={{height: 260}}>
              {transactionData.map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell style={{flex: 0.3}}>
                    <Text style={TransacStyle.textCell}>{item.id}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 0.3}}>
                    <Text style={TransacStyle.textCell}>{item.table}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 1.8}}>
                    <Text style={TransacStyle.textCell}>Test</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 0.5}}>
                    <Text style={TransacStyle.textCell}>{item.createdAt}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 0.5, marginLeft: 10}}>
                    <Text style={TransacStyle.textCell}>{item.total}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </ScrollView>
          </DataTable>
        </View>
      </View>
    </View>
  );
}
