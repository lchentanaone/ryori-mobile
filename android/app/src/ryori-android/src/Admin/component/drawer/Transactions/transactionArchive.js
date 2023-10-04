import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {TransactionStyle} from './transactionStyle';
import {DataTable, Provider} from 'react-native-paper';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

export default function TransactionArchive() {
  const [transactionData, setTransactionData] = useState([]);
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([10, 20]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, transactionData.length);

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/pos/transactionarchive/nottoday?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {headers},
      );
      console.log(response);
      setTransactionData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchTransactionsData();
    }, []),
  );

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage, transactionData]);

  return (
    <Provider>
      <View style={TransactionStyle.trasactionContainer}>
        <View style={TransactionStyle.content}>
          <View style={TransactionStyle.titlePagination}>
            <Text style={TransactionStyle.title}>Archive Transaction</Text>
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(transactionData.length / itemsPerPage)}
              onPageChange={page => setPage(page)}
              label={
                <Text style={{color: '#000'}}>
                  {from + 1}-{to} of {transactionData.length}
                </Text>
              }
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={
                <Text style={{color: '#000'}}>Rows per page</Text>
              }
            />
          </View>
          <View style={TransactionStyle.table}>
            <DataTable>
              <DataTable.Header style={TransactionStyle.tableHeader}>
                <DataTable.Title>
                  <Text style={TransactionStyle.tableHeaderText}>No.</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={TransactionStyle.tableHeaderText}>table</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={TransactionStyle.tableHeaderText}>Pay Id</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={TransactionStyle.tableHeaderText}>Amount</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={TransactionStyle.tableHeaderText}>Date</Text>
                </DataTable.Title>
              </DataTable.Header>
              <ScrollView style={{height: 250}}>
                {transactionData.slice(from, to).map((item, index) => (
                  <View key={index}>
                    <DataTable.Row style={{borderBottomWidth: 1}}>
                      <DataTable.Cell>
                        <Text style={TransactionStyle.cellData}>
                          {index + 1}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell>
                        <Text style={TransactionStyle.cellData}>
                          {item.table}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell>
                        <Text style={TransactionStyle.cellData}>
                          {item.paymongo_pi_id}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell>
                        <Text style={TransactionStyle.cellData}>
                          {item.amount}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell>
                        <Text style={TransactionStyle.cellData}>
                          {item.createdAt}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                  </View>
                ))}
              </ScrollView>
            </DataTable>
          </View>
        </View>
      </View>
    </Provider>
  );
}
