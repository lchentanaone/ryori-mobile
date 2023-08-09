import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Products from './component/products/product';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PreparingOrderTab from './component/activeOrder/preparingOrderTab';

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
        name="Order Top Navigation"
        component={PreparingOrderTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Active Order',
          tabBarIcon: ({focused, size}) => (
            <FontAwesome
              name="shopping-cart"
              color={focused ? '#db1a1c' : '#464646'}
              size={40}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Products}
        options={{
          headerShown: false,
          tabBarLabel: 'Product',
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="food-turkey"
              color={focused ? '#db1a1c' : '#464646'}
              size={45}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
