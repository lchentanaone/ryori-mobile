/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, TextInput, Button} from 'react-native';
import {transacStyle} from './transac-style';
import {Text} from 'react-native-paper';
import {DataTable} from 'react-native-paper';

const TransactionReport = () => {
  return (
    <View style={transacStyle.container}>
        <View style={transacStyle.reportTrasaction}>
          <Text>Report of Transaction</Text>
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
          <View style={transacStyle.btn}>
            <Button title='Extract' color={"red"}></Button>
            <Button title='Download' color={"green"}></Button>
            </View>
        </View>
    </View>
  );
};

export default TransactionReport;
