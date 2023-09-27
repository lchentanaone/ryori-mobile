import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderProductList from './components/productList/orderProductList';
import DoneOrder from './components/productList/doneOrderTab';

const Tab = createBottomTabNavigator();

export default function DiningBottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          borderTopColor: '#000',
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
            <MaterialCommunityIcons
              name="cart"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order Top Navigation"
        component={DoneOrder}
        options={{
          headerShown: false,
          tabBarLabel: 'Done',
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="check-circle"
              color={focused ? '#12BF38' : '#464646'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
