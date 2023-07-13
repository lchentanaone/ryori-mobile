import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {openingStyles} from './opening-style';
import ryoriText from '../../images/ryori-text.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants'
export default function Login({navigation}) {

  const [email, setEmail] = useState('ryoriapp@gmail.com');
  const [password, setPassword] = useState('ryori2023');

  const handleLogin = async () => {
    try {
      const response = axios
        .post(`${API_URL}/auth/login`, {email, password})
        .then(async response => {
          const token = response.data.access_token;
          await AsyncStorage.setItem('access_token', token);
          response.data.store_Id &&
            (await AsyncStorage.setItem(
              'store_Id',
              response.data.store_Id.toString(),
            ));
          // navigation.navigate('Setup your Store');
          navigation.navigate('Select Branch');
        });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={openingStyles.login}>
      <View style={openingStyles.loginContent}>
        <View style={openingStyles.forLogo}>
          <Image source={ryoriText} style={openingStyles.ryoriText} />
        </View>
        <Text style={openingStyles.pleaseText}>Please sign in to Continue</Text>
        <TextInput
          mode="outlined"
          style={openingStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          mode="outlined"
          style={openingStyles.input}
          placeholder="Password"
          value={password}
          // secureTextEntry={true}
          onChangeText={setPassword}
        />
        <View style={openingStyles.forgotBtn}>
          <TouchableOpacity
            style={openingStyles.textBtbOpacity}
            // onPress={() => navigation.navigate('Select Branch')}
          >
            <Text style={openingStyles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={openingStyles.SignIn}>
          <TouchableOpacity
            style={openingStyles.SignInOpacity}
            onPress={handleLogin}>
            <Text style={openingStyles.SignInTextBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={openingStyles.SignIn}>
          <TouchableOpacity
            style={openingStyles.SignInOpacity}
            onPress={() => navigation.navigate('Register-admin')}>
            <Text style={openingStyles.SignInTextBtn}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
