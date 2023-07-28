import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Products from '../Kitchen/components/products/product';
import LoginEmployee from '../login/login';
import PreparingOrderTab from '../Kitchen/components/activeOrder/preparingOrderTab';

const Tab = createBottomTabNavigator();

export default function KitchenBottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          borderTopColor: 'white',
          shadowColor: 0,
        },
      }}>
      <Tab.Screen
        name="Product"
        component={Products}
        options={{
          headerShown: false,
          tabBarLabel: 'Product',
          tabBarIcon: ({focused, size}) => (
            <Entypo
              name="home"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={LoginEmployee}
        options={{
          headerShown: false,
          tabBarLabel: 'TEST',
          tabBarIcon: ({focused, size}) => (
            <AntDesign
              name="home"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order Top Navigation"
        component={PreparingOrderTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Active Order',
          tabBarIcon: ({focused, size}) => (
            <FontAwesome5
              name="box-open"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
