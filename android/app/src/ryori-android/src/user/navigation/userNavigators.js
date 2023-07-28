import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './bottomNavigator';
import UserStarter from '../login/userStarter';
import LoginEmployee from '../login/login';
import PreparingOrderTab from '../Kitchen/components/activeOrder/preparingOrderTab';
import ProfileEmployee from '../profile/profile';
import ProfileEdit from '../profile/profileEdit';
import InventoryEmployee from '../Kitchen/components/inventory/inventory';
import PreparingOrderTable from '../Kitchen/components/activeOrder/preparing/preparing';
import OrderProductList from '../dining/components/productList/orderProductList';
import OrderSummary from '../dining/components/orderPage/orderTableNumber';
import PaymentReceived from '../dining/components/pamentReceived/paymentRec';

const Stack = createStackNavigator();
const UserNavigators = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
          animationEnabled: false,
        }}>
        <Stack.Screen
          component={UserStarter}
          name="Kitchen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LoginEmployee}
          name="Login Employee"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BottomNavigator}
          name="BottomNavs"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PreparingOrderTab}
          name="Prepare Table"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PreparingOrderTable}
          name="Prepare Table Tab"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ProfileEmployee}
          name="Profile Employee"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ProfileEdit}
          name="Profile Edit"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={InventoryEmployee}
          name="Inventory"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OrderProductList}
          name="OrderProductList"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OrderSummary}
          name="OrderSummary"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PaymentReceived}
          name="PaymentReceived"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default UserNavigators;
