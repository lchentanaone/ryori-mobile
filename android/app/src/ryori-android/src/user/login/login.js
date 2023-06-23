import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {OpeningSytle as styles} from './openingStyle';
import ryoriText from '../images/ryori-text.png';
import PushNotification from 'react-native-push-notification';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    createChannel();
  }, []);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'Testing',
      channelName: 'Test Channel',
    });
  };

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'Testing',
      title: 'Ryori',
      message: 'Local Notification Ryori',
    });
  };

  return (
    <View style={styles.kitchenLogin}>
      <Image source={ryoriText} style={styles.ryoriText} />
      <View style={styles.loginForm}>
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
  );
}
