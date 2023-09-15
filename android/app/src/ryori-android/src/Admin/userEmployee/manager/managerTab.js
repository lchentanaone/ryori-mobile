import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Products from '../kitchen/component/products/product';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PreparingOrderTab from '../kitchen/component/activeOrder/preparingOrderTab';
import DoneOrder from '../dining/components/productList/doneOrderTab';
import OrderProductList from '../dining/components/productList/orderProductList';

const Tab = createBottomTabNavigator();

export default function ManagerTab() {
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
        name="Order"
        component={OrderProductList}
        options={{
          headerShown: false,
          tabBarLabel: 'done',
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
        component={PreparingOrderTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Active Order',
          tabBarIcon: ({focused, size}) => (
            <FontAwesome
              name="list-alt"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DoneOrder"
        component={DoneOrder}
        options={{
          headerShown: false,
          tabBarLabel: 'done',
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="check-circle"
              color={focused ? '#12BF38' : '#464646'}
              size={30}
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
            <MaterialIcons
              name="inventory"
              color={focused ? '#db1a1c' : '#464646'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
