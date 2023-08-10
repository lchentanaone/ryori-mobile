import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Opening from '../Admin/component/opening/opening';
import Login from '../Admin/component/opening/login';
import Register from '../Admin/component/opening/register';
import SetupStore from '../Admin/component/opening/setupStore';
import DrawersNav from '../Admin/component/drawer/drawerNavigation/drawer';
import Branches from '../Admin/component/opening/selectBranch/selectBranch';

// Employee

const Stack = createStackNavigator();
const GuestNavigators = () => {
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
          name="Setup your Store"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={DrawersNav}
          name="Drawer"
          options={{headerShown: false}}
        />        
        <Stack.Screen
          component={Branches}
          name="Select Branch"
          options={{headerShown: false}}
        />        
      </Stack.Navigator>
    </>
  );
};

export default GuestNavigators;
