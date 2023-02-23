/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/ryori-android/src/navigation/stackNavigators';


const App = () => {

  return (
    <>
      <NavigationContainer>
          <StackNavigators/>
      </NavigationContainer>
    </>
  );
};

export default App;