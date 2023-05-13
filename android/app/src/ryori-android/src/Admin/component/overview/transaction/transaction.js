/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, TextInput, Button} from 'react-native';
import {transacStyle} from './transac-style';
import {Text} from 'react-native-paper';
import {DataTable} from 'react-native-paper';
const Transaction = () => {
  return (
    <View style={transacStyle.container}>
      <View style={transacStyle.row}>
        <View style={transacStyle.trasactionList}>
          <Text>Transactions</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text>Transaction Id</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text>Title</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text>Photo</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text>Add to Archive</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              {/* {items.map(item => (
                    <View key={item.id}> */}
              <DataTable.Row>
                <DataTable.Cell>
                  <Text>123456789</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>For Testing</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>testing.png</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                <Text>1</Text>
                </DataTable.Cell>
              </DataTable.Row>
              {/* </View>
                    ))} */}
            </ScrollView>
          </DataTable>
        </View>
        <View style={transacStyle.trasactionArchive}>
          <Text>Archive</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text>Transaction Id</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text>Title</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text>Photo</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text>parent_transaction_id</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              {/* {items.map(item => (
              <View key={item.id}> */}
              <DataTable.Row>
                <DataTable.Cell>
                  <Text>123456789</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>For Testing</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>testing.png</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>1</Text>
                </DataTable.Cell>
              </DataTable.Row>
              {/* </View>
            ))} */}
            </ScrollView>
          </DataTable>
        </View>
      </View>
    </View>
  );
};

export default Transaction;
