import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {EmployeeStyle} from './employeeStyle';
import {DataTable} from 'react-native-paper';

export default function Employees() {
  return (
    <View style={EmployeeStyle.employee}>
      <View style={EmployeeStyle.employeeContent}>
        <Text style={EmployeeStyle.employeeTitle}>Employees</Text>
        <View style={EmployeeStyle.employeeTable}>
          <DataTable>
            <DataTable.Header style={EmployeeStyle.tableHeader}>
              <DataTable.Title>
                <Text style={EmployeeStyle.tableTitle}>ID</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={EmployeeStyle.tableTitle}>Name</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={EmployeeStyle.tableTitle}>position</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={EmployeeStyle.tableTitle}>Schedule</Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              <DataTable.Row style={{borderBottomWidth: 1}}>
                <DataTable.Cell>
                  <Text style={EmployeeStyle.employeeCellData}>01</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={EmployeeStyle.employeeCellData}>
                    Employee one
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={EmployeeStyle.employeeCellData}>Kitchen</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={EmployeeStyle.employeeCellData}>8Am</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </ScrollView>
          </DataTable>
        </View>
      </View>
    </View>
  );
}
