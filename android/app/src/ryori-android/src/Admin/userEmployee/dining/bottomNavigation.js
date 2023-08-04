import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OrderProductList from './components/productList/orderProductList';
// import OrderSummary from './components/orderLists/orderTableNumber';
import DoneOrder from './components/productList/doneOrderTab';

const Tab = createBottomTabNavigator();

export default function DiningBottomNavigator() {
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
        component={OrderProductList}
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
      {/* <Tab.Screen
        name="Test"
        component={OrderSummary}
        options={{
          headerShown: false,
          tabBarLabel: 'TEST',
          tabBarIcon: ({focused, size}) => (
            <FontAwesome
              name="shopping-cart"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Order Top Navigation"
        component={DoneOrder}
        options={{
          headerShown: false,
          tabBarLabel: 'Active Order',
          tabBarIcon: ({focused, size}) => (
            <AntDesign
              name="home"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
