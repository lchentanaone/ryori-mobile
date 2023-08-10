import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TransactionStyle} from './transactionStyle';
import {DataTable, Provider} from 'react-native-paper';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TransactionDaily() {
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
        `${API_URL}/pos/transaction?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {headers},
      );

      // const status = response.data.filter(
      //   transactionStatus => transactionStatus.status === 'done',
      // );

      setTransactionData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    fetchTransactionsData();
  }, []);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <Provider>
      <View style={TransactionStyle.trasactionContainer}>
        <View style={TransactionStyle.content}>
          <View style={TransactionStyle.titlePagination}>
            <Text style={TransactionStyle.title}>Daily Transaction</Text>
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(transactionData.length / itemsPerPage)}
              onPageChange={page => setPage(page)}
              label={`${from + 1}-${to} of ${transactionData.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={'Rows per page'}
            />
          </View>
          <View style={TransactionStyle.table}>
            <DataTable>
              <DataTable.Header style={TransactionStyle.tableHeader}>
                <DataTable.Title>
                  <Text style={TransactionStyle.tableHeaderText}>ID</Text>
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
                        <Text style={TransactionStyle.cellData}>{item.id}</Text>
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
                          {item.total}
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
