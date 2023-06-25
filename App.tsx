import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/ryori-android/src/Admin/navigation/stackNavigators';
import {StatusBar} from 'react-native';
// import UserNavigators from './android/app/src/ryori-android/src/user/navigation/userNavigators';

const App = () => {
  return (
    <>
      {/* to hide status bar <StatusBar hidden/>  */}
      <StatusBar hidden />
      <NavigationContainer>
        <StackNavigators />
        {/* <UserNavigators /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
