import React from 'react';
import {ReportStyle} from './report-style';
import {DataTable, Modal} from 'react-native-paper';
import {View, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

export default function ReportOfFood() {
  return (
    <View style={ReportStyle.reportContainer}>
      <View style={ReportStyle.reportContent}>
        <Text style={ReportStyle.reportTitle}>
          Report of Food Quantity Set per Day
        </Text>
        <View style={ReportStyle.reportTable}>
          <DataTable>
            <DataTable.Header style={ReportStyle.tableHeader}>
              <DataTable.Title>
                <Text style={ReportStyle.reportData}>ID</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={ReportStyle.reportData}>Title</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={ReportStyle.reportData}>Data</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              <DataTable.Row style={{borderBottomWidth: 1}}>
                <DataTable.Cell>
                  <Text style={ReportStyle.reportCellData}>01</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={ReportStyle.reportCellData}>
                    Transaction one
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={ReportStyle.reportCellData}>March 07, 23</Text>
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row style={{borderBottomWidth: 1}}>
                <DataTable.Cell>
                  <Text style={ReportStyle.reportCellData}>01</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={ReportStyle.reportCellData}>
                    Transaction Two
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={ReportStyle.reportCellData}>March 07, 23</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </ScrollView>
          </DataTable>
        </View>
        <View style={ReportStyle.reportButtons}>
          <View style={ReportStyle.buttons}>
            <TouchableOpacity style={ReportStyle.reportDownloadOpacity}>
              <Text style={ReportStyle.addMenuTextBtn}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ReportStyle.reportDeleteOpacity}>
              <Text style={ReportStyle.addMenuTextBtn}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
