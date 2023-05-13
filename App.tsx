/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/ryori-android/src/Admin/navigation/stackNavigators';
// import Sidebar from './android/app/src/ryori-android/src/component/dashboard/overview/drawer'
import {StatusBar} from 'react-native';
import KitchenNavigators from './android/app/src/ryori-android/src/Kitchen/navigation/kitchenNavigators';

const App = () => {

  return (
    <>
    <StatusBar hidden />
      <NavigationContainer>
          {/* <StackNavigators/> */}
          <KitchenNavigators/>
      </NavigationContainer>
    </>
  );
};

export default App;