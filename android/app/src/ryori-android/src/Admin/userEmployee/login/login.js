import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import {OpeningSytle as styles} from './openingStyle';
import ryoriText from '../../images/ryori-text.png';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import PushNotification from 'react-native-push-notification';
import io from 'socket.io-client';
import {API_URL} from '../../../utils/constants'

export default function LoginEmployee({navigation}) {
  const [screenOrientaion, setScreenOrientaion] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleNotification = () => {
    
  };

  return (
    <>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <View style={styles.kitchenLogin}>
        <Image source={ryoriText} style={styles.ryoriText} />
        <View style={styles.loginForm}>
          <Button
            title="Screen Orientation"
            onPress={() => setScreenOrientaion(!screenOrientaion)}
          />
          <Text style={styles.pleaseText}>Please sign in to Continue</Text>
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry={false}
            onChangeText={setPassword}
          />
          <View style={styles.forgotBtn}>
            <TouchableOpacity
              style={styles.textBtbOpacity}
              onPress={() => navigation.navigate('OrderProductList')}>
              <Text style={styles.forgotText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SignIn}>
            <TouchableOpacity
              style={styles.SignInOpacity}
              onPress={() => navigation.navigate('BottomNavs')}>
              <Text style={styles.SignInTextBtn}>SING IN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SignIn}>
            <TouchableOpacity
              style={styles.SignInOpacity}
              onPress={handleNotification}>
              <Text style={styles.SignInTextBtn}>handleNotification</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
