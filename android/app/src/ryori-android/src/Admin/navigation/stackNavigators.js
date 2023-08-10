import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Opening from '../component/opening/opening';
import Login from '../component/opening/login';
import Register from '../component/opening/register';
import SetupStore from '../component/opening/setupStore';
import DrawersNav from '../component/drawer/drawerNavigation/drawer';
import Menu from '../component/drawer/menu/menu';
import AddMenu from '../component/drawer/menu/addMenu';
import MenuDetails from '../component/drawer/menu/addMenu';
import UpdateMenu from '../component/drawer/menu/updateMenu';
import TransactionTab from '../component/drawer/Transactions/transactionNav';
import Dashboard from './../component/drawer/dashboard/dashboard';
import ReportOfTransaction from '../component/drawer/Report/reportOfTransaction';
import ReportOfFood from '../component/drawer/Report/reportOfFood';
import Inventory from '../component/drawer/inventory/inventory';
import StoreSetting from '../component/drawer/storeSetting.js/storeSetting';
import UpdateStore from '../component/drawer/storeSetting.js/updateStore';
import Employees from '../component/drawer/employee/employee';
import ProfileAdmin from '../component/drawer/profileAdmin/profile';
import UpdateProfileAdmin from '../component/drawer/profileAdmin/updateProfile';
import Branches from '../component/opening/selectBranch/selectBranch';
import UserCredentials from '../component/drawer/profileAdmin/UserCredentials';

// Employee
import LoginEmpoyee from '../userEmployee/login/login';
import KitchenBottomNavigator from '../userEmployee/kitchen/bottomNavigator';
import PreparingOrderTab from '../userEmployee/kitchen/component/activeOrder/preparingOrderTab';
import ProfileEmpoyee from '../userEmployee/profile/profile';
import ProfileEdit from '../userEmployee/profile/profileEdit';
import PaymentReceived from '../userEmployee/dining/components/pamentReceived/paymentRec';
import DiningBottomNavigator from '../userEmployee/dining/bottomNavigation';

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
          name="New-Store-Branch"
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
          component={MenuDetails}
          name="menu-details"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UpdateMenu}
          name="Update Menu"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={TransactionTab}
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
        <Stack.Screen
          component={UpdateStore}
          name="Update Store"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Employees}
          name="Employees"
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          component={Branches}
          name="Select Branch"
          options={{headerShown: false}}
        />
        {/* ----------------KITCHEN--AND--DINING-------------------- */}
        <Stack.Screen
          component={LoginEmpoyee}
          name="Login Employee"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={KitchenBottomNavigator}
          name="Kitchen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PreparingOrderTab}
          name="Prepare Table"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ProfileEmpoyee}
          name="Profile Employee"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ProfileEdit}
          name="Profile Edit"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={DiningBottomNavigator}
          name="DiningBottomNavigator"
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

export default StackNavigators;
