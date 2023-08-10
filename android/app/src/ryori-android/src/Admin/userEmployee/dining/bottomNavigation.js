import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="shopping-cart"
              color={focused ? '#db1a1c' : '#464646'}
              size={40}
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
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="check-circle"
              color={focused ? '#db1a1c' : '#464646'}
              size={40}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
