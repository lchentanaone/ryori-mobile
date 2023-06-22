import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {kitchenStarter} from './kitchen-style';
import ryoriText from '../../images/ryori-text.png';
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
    <View style={kitchenStarter.kitchenLogin}>
      <Image source={ryoriText} style={kitchenStarter.ryoriText} />
      <View style={kitchenStarter.loginForm}>
        <Text style={kitchenStarter.pleaseText}>
          Please sign in to Continue
        </Text>
        <TextInput
          mode="outlined"
          style={kitchenStarter.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          mode="outlined"
          style={kitchenStarter.input}
          placeholder="Password"
          value={password}
          secureTextEntry={false}
          onChangeText={setPassword}
        />
        <View style={kitchenStarter.forgotBtn}>
          <TouchableOpacity
            style={kitchenStarter.textBtbOpacity}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={kitchenStarter.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={kitchenStarter.SignIn}>
          <TouchableOpacity
            style={kitchenStarter.SignInOpacity}
            onPress={() => navigation.navigate('BottomNavs')}>
            <Text style={kitchenStarter.SignInTextBtn}>SING IN</Text>
          </TouchableOpacity>
        </View>
        <View style={kitchenStarter.SignIn}>
          <TouchableOpacity
            style={kitchenStarter.SignInOpacity}
            onPress={handleNotification}>
            <Text style={kitchenStarter.SignInTextBtn}>handleNotification</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
