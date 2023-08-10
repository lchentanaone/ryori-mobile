import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PreparingOrderTab from '../user/Kitchen/components/activeOrder/preparingOrderTab';
import ProfileEmpoyee from '../user/profile/profile';
import OrderSummary from '../user/dining/components/orderPage/orderTableNumber';
import DiningBottomNavigator from '../user/dining/bottomNavigation';

const Stack = createStackNavigator();
const DiningNavigators = () => {
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
          component={DiningBottomNavigator}
          name="DiningBottomNavigator"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OrderSummary}
          name="OrderSummary"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default DiningNavigators;
