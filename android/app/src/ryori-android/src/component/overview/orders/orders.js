/* eslint-disable prettier/prettier */
import React from 'react';
import {overviewStyle} from '../overview-style';
import Entypo from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';
import ryoriLogo from '../../../images/logo/RYORI-Logo.png';
import Header from '../header';
import {orderStyle} from './order-style';
import {DataTable} from 'react-native-paper';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

export default function Orders({navigation}) {
  return (
    <View style={overviewStyle.container}>
      <Header />
      <View style={overviewStyle.menu}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Entypo name="menu" size={30} color="#48e88e" />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={ryoriLogo}
        style={overviewStyle.ryoriLogoLogin}
      />
      <View style={overviewStyle.circleContainer}>
        <View style={overviewStyle.circle} />
      </View>
      <View style={orderStyle.overAll}>
        <View style={orderStyle.overAllContent}>
          <Text style={orderStyle.overAllText}>Menus Today</Text>
          <Text style={orderStyle.overAllValue}>Test</Text>
        </View>
        <View style={orderStyle.overAllContent}>
          <Text style={orderStyle.overAllText}>Orders Today</Text>
          <Text style={orderStyle.overAllValue}>Test</Text>
        </View>
        <View style={orderStyle.overAllContent}>
          <Text style={orderStyle.overAllText}>Customers Today</Text>
          <Text style={orderStyle.overAllValue}>Test</Text>
        </View>
        <View style={orderStyle.overAllContent}>
          <Text style={orderStyle.overAllText}>Revenues Today</Text>
          <Text style={orderStyle.overAllValue}>Test</Text>
        </View>
      </View>
      <View style={orderStyle.tableData}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>OrdersNo</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>TableNo</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>OrderTime</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Server</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Status</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>TotalPrice</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Action</Text>
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            <DataTable.Row>
              <DataTable.Cell>
                <Text style={orderStyle.orderCellData}>1</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={orderStyle.orderCellData}>2</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={orderStyle.orderCellData}>3</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={orderStyle.orderCellData}>4</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={orderStyle.orderCellData}>5</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={orderStyle.orderCellData}>6</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <View style={orderStyle.actionBtn}>
                  <TouchableOpacity style={orderStyle.actionOpacity}>
                    <Text style={orderStyle.actionText}>Manage</Text>
                  </TouchableOpacity>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          </ScrollView>
        </DataTable>
      </View>
    </View>
  );
}
