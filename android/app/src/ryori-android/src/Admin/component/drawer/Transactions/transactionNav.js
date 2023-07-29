import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Menu from '../menu/menu';
import UpdateMenu from '../menu/updateMenu';
import TransactionList from './transactionList';
import TransactionArchive from './transactionArchive';

const Tab = createMaterialTopTabNavigator();

export default function TransactionTab() {
  return (
    <>
      <Text>Transactions</Text>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'orange',
          tabBarActiveBackgroundColor: 'blue',
          tabBarStyle: {
            borderTopColor: 'white',
            shadowColor: 0,
            width: '90%',
            marginHorizontal: '5%',
            tabBarActiveBackgroundColor: 'blue',
          },
          tabBarOptions: {
            tabStyle: {
              width: 'auto',
              height: 100,
              backgroundColor: 'red', //color you want to change
            },
            activeBackgroundColor: 'blue',
          },
        }}>
        <Tab.Screen name="List" component={TransactionList} />
        <Tab.Screen name="Archive" component={TransactionArchive} />
      </Tab.Navigator>
    </>
  );
}
