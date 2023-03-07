/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../component/welcome/welcome';
import Login from '../component/welcome/login';
import Drawers from './../component/overview/drawer';

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
          component={Drawers}
          name="drawer"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
