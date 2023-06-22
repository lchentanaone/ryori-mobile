import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './bottomNavigator';
import UserStarter from '../login/userStarter';
import Login from '../login/login';
import PreparingOrderTab from '../Kitchen/components/activeOrder/orderTopTab/preparingOrderTab';
import Profile from '../profile/profile';
import ProfileEdit from '../profile/profileEdit';
import Inventory from '../Kitchen/components/inventory/inventory';
import PreparingOrderTable from '../Kitchen/components/activeOrder/preparing/preparing';

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
          component={Login}
          name="Login"
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
          component={Profile}
          name="Profile"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ProfileEdit}
          name="Profile Edit"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Inventory}
          name="Inventory"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default UserNavigators;
