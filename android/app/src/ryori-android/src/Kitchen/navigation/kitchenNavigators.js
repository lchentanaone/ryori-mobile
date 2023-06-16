import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import KitchenStarter from '../components/login/KitchenStarter';
import Login from '../components/login/login';
import BottomNavigator from './bottomNavigator';
import PreparingOrderTable from '../components/activeOrder/preparing/preparing';

const Stack = createStackNavigator();
const KitchenNavigators = () => {
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
          component={KitchenStarter}
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
          component={PreparingOrderTable}
          name="Prepare Table"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default KitchenNavigators;
