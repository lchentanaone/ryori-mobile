import {View, Text} from 'react-native';
import React from 'react';
import {TransacStyle} from './transactionStyle';
import {DataTable} from 'react-native-paper';
export default function TransactionList() {
  return (
    <View style={TransacStyle.listArchive}>
      <View style={TransacStyle.listArchiveC}>
        <View>
          <DataTable>
            <DataTable.Header style={TransacStyle.tableHeader}>
              <DataTable.Title>
                <Text style={TransacStyle.textHeader}>ID</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={TransacStyle.textHeader}>Name</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={TransacStyle.textHeader}>Time</Text>
              </DataTable.Title>
            </DataTable.Header>
            {/* <ScrollView> */}

            {/* <View key={item.id}> */}
            <DataTable.Row>
              <DataTable.Cell>
                <Text style={TransacStyle.textCell}>Test</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={TransacStyle.textCell}>Test</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={TransacStyle.textCell}>Test</Text>
              </DataTable.Cell>
            </DataTable.Row>
            {/* </View> */}

            {/* </ScrollView> */}
          </DataTable>
        </View>
      </View>
    </View>
  );
}
