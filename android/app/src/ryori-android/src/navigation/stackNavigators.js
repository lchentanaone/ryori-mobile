/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../component/welcome/welcome';
import Login from '../component/welcome/login';
import Overview from './../component/dashboard/overview/overview';
import Sidebar from '../component/dashboard/overview/drawer';

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
          component={Welcome}
          name="welcome"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Overview}
          name="overview"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Sidebar}
          name="sidebar"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
