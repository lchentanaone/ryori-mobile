import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from '../Admin/component/drawer/menu/menu';
import AddMenu from '../Admin/component/drawer/menu/addMenu';
import MenuDetails from '../Admin/component/drawer/menu/addMenu';
import UpdateMenu from '../Admin/component/drawer/menu/updateMenu';
import Dashboard from './../Admin/component/drawer/dashboard/dashboard';
import ReportOfTransaction from '../Admin/component/drawer/Report/reportOfTransaction';
import ReportOfFood from '../Admin/component/drawer/Report/reportOfFood';
import Inventory from '../Admin/component/drawer/inventory/inventory';
import StoreSetting from '../Admin/component/drawer/storeSetting.js/storeSetting';
import UpdateStore from '../Admin/component/drawer/storeSetting.js/updateStore';
import Employees from '../Admin/component/drawer/employee/employee';
import ProfileAdmin from '../Admin/component/drawer/profileAdmin/profile';
import UpdateProfileAdmin from '../Admin/component/drawer/profileAdmin/updateProfile';
import Branches from '../Admin/component/opening/selectBranch/selectBranch';
import UserCredentials from '../Admin/component/drawer/profileAdmin/UserCredentials';

const Stack = createStackNavigator();
export const StoreSettingsNavigators = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={StoreSetting}
      name="Store Setting"
      options={{headerShown: false}}
    />
    <Stack.Screen
      component={UpdateStore}
      name="Update Store"
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
export const MenuNavigators = () => (
  <Stack.Navigator>
    <Stack.Screen component={Menu} name="Menu" options={{headerShown: false}} />
    <Stack.Screen
      component={AddMenu}
      name="Add new menu"
      options={{headerShown: false}}
    />
    <Stack.Screen
      component={MenuDetails}
      name="menu-details"
      options={{headerShown: false}}
    />
    <Stack.Screen
      component={UpdateMenu}
      name="Update Menu"
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
export const ProfileNavigators = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={ProfileAdmin}
      name="Profile"
      options={{headerShown: false}}
    />
    <Stack.Screen
      component={UserCredentials}
      name="User Credential"
      options={{headerShown: false}}
    />
    <Stack.Screen
      component={UpdateProfileAdmin}
      name="Update Admin"
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export const AdminNavigators = () => {
  return (
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
        component={Dashboard}
        name="Dashboard"
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
        component={Employees}
        name="Employees"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={Branches}
        name="Select Branch"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
