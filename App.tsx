/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/ryori-android/src/Admin/navigation/stackNavigators';
import {StatusBar} from 'react-native';
import KitchenNavigators from './android/app/src/ryori-android/src/Kitchen/navigation/kitchenNavigators';

const App = () => {
  return (
    <>
     {/* to hide status bar <StatusBar hidden/>  */}
    <StatusBar/>
      <NavigationContainer>
          {/* <StackNavigators/> */}
          <KitchenNavigators/>
      </NavigationContainer>
    </>
  );
};

export default App;