import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/ryori-android/src/Admin/navigation/stackNavigators';
import {StatusBar} from 'react-native';
import {OrientationLocker, LANDSCAPE} from 'react-native-orientation-locker';
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
        <StackNavigators />
      </NavigationContainer>
    </>
  );
};

export default App;
