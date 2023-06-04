import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Opening from '../component/opening/opening';
import Login from '../component/opening/login';
// import Drawers from '../component/overview/drawer';
import Register from '../component/opening/register';
import EditMenu from '../component/overview/menu/edit-menu';
import Transaction from '../component/overview/transaction/transaction';
import TransactionReport from '../component/overview/transaction/transaction-report';
import SetupStore from '../component/opening/setupStore';
import DrawersNav from '../component/drawer/drawerNavigation/drawer';
import Menu from '../component/drawer/menu/menu';
import AddMenu from '../component/drawer/menu/addMenu';
import UpdateMenu from '../component/drawer/menu/updateMenu';
import TopTabNavs from './topTabNavigation';
import Dashboard from './../component/drawer/dashboard/dashboard';
import ReportOfTransaction from '../component/drawer/Report/reportOfTransaction';
import ReportOfFood from '../component/drawer/Report/reportOfFood';
import Inventory from '../component/drawer/inventory/inventory';
import StoreSetting from '../component/drawer/storeSetting.js/storeSetting';
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
          component={DrawersNav}
          name="Drawer"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Menu}
          name="Menu"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AddMenu}
          name="Add new menu"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UpdateMenu}
          name="Update Menu"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={TopTabNavs}
          name="TopTabNavs"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ReportOfTransaction}
          name="Report of Transaction"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ReportOfFood}
          name="Report of Food"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Inventory}
          name="Inventory"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={StoreSetting}
          name="Store Setting"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
