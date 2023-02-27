/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Overview from './overview';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function Sidebar() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'permanent',
        drawerActiveTintColor: '#FFFF',
        drawerInactiveTintColor: '#FFFF',
        drawerActiveBackgroundColor: '#FBBC05',
        drawerItemStyle: {
          borderRadius: 5,
          width: '85%',
          marginLeft: 10,
        },
        drawerStyle: {
          backgroundColor: '#000000',
          width: 130,
          activeTintColor: '#fffff',
        },
        contentOptions: {
          labelStyle: {
            fontFamily: 'SomeFont',
            color: 'white',
          },
        },
      }}>
      <Drawer.Screen
        name="Overview"
        component={Overview}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Article"
        component={Article}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
