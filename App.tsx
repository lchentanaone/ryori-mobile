/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/ryori-android/src/navigation/stackNavigators';
// import Sidebar from './android/app/src/ryori-android/src/component/dashboard/overview/drawer'

const App = () => {

  return (
    <>
      <NavigationContainer>
          <StackNavigators/>
          {/* <Sidebar/> */}
      </NavigationContainer>
    </>
  );
};

export default App;