import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {OrientationLocker, LANDSCAPE} from 'react-native-orientation-locker';
import OutsideNavigators from './android/app/src/ryori-android/src/navigations/outsideNavigators';
import {createStackNavigator} from '@react-navigation/stack';
import codePush from 'react-native-code-push';
const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <OrientationLocker
        orientation={LANDSCAPE}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      {/* to hide status bar <StatusBar hidden/>  */}
      <StatusBar hidden />
      <NavigationContainer>
        <OutsideNavigators />
      </NavigationContainer>
    </>
  );
};

export default codePush(App);
