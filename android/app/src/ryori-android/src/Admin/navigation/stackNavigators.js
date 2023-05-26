import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Opening from '../component/opening/opening';
import Login from '../component/opening/login';
import Drawers from '../component/overview/drawer';
import Register from '../component/opening/register';
import EditMenu from '../component/overview/menu/edit-menu';
import Transaction from '../component/overview/transaction/transaction';
import TransactionReport from '../component/overview/transaction/transaction-report';
import SetupStore from '../component/opening/setupStore';

const Stack = createStackNavigator();
const StackNavigators = () => {
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
          component={Opening}
          name="opening"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Register}
          name="Register-admin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login-admin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SetupStore}
          name="Set up your Store"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Drawers}
          name="drawer"
          options={{headerShown: false}}
        />
        
        {/* <Stack.Screen
          component={EditMenu}
          name="Edit-menu"
          // options={{headerShown: false}}
        /> */}
        <Stack.Screen
          component={Transaction}
          name="Transation"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={TransactionReport}
          name="Reports of Transaction"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
