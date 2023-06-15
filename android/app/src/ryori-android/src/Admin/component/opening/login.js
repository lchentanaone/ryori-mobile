/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {openingStyles} from './opening-style';
import ryoriText from '../../images/ryori-text.png';
import axios from 'axios';

export default function Login({navigation}) {
  const API_URL = 'http://10.0.2.2:3000';

  const [email, setEmail] = useState('ryoriapp@gmail.com');
  const [password, setPassword] = useState('ryori2023');

  const handleLogin = () => {
    axios
      .post(`${API_URL}/auth/login`, {email, password})
      .then(response => {
        console.log('Login successful:', response.data);
        // handle successful login, such as storing authentication token in AsyncStorage and navigating to homepage
        navigation.navigate('Drawer');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        // handle login error, such as displaying error message to user
      });
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
          secureTextEntry={false}
          onChangeText={setPassword}
        />
        <View style={openingStyles.forgotBtn}>
          <TouchableOpacity style={openingStyles.textBtbOpacity}>
            <Text style={openingStyles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={openingStyles.SignIn}>
          <TouchableOpacity
            style={openingStyles.SignInOpacity}
            // onPress={handleLogin}
            onPress={() => navigation.navigate('Setup your Store')}>
            <Text style={openingStyles.SignInTextBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={openingStyles.SignIn}>
          <TouchableOpacity
            style={openingStyles.SignInOpacity}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={openingStyles.SignInTextBtn}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
