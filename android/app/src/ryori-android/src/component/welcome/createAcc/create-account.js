/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {welcomeStyles} from './../welcome-style';
import {SignUpStyle} from './createAccount-style';
import ryoriLogo from './../../../images/logo/RYORI-Logo.png';

export default function CreateAccount({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirsname] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <View style={welcomeStyles.welcomes}>
      <View style={welcomeStyles.circleContainer2}>
        <View style={welcomeStyles.circle} />
        <Image source={ryoriLogo} style={welcomeStyles.ryoriLogoLogin} />
      </View>
      <View style={SignUpStyle.loginFormContainer}>
        <View style={SignUpStyle.welcomeLoginTextCon}>
          <Text style={SignUpStyle.welcomeLoginText}>Welcome to RYORI!</Text>
          <Text style={SignUpStyle.loginIntro}>
            Enter you Phone number or Email address for{'\n'} sign in. Create
            your menu and setup your store
          </Text>
        </View>
        <View style={welcomeStyles.signUpfield}>
          <View style={SignUpStyle.textFieldContainer}>
            <View style={SignUpStyle.inputMargin}>
              <TextInput
                mode="outlined"
                style={SignUpStyle.input}
                placeholder="Name"
                value={firstname}
                onChangeText={firstname => setFirsname(firstname)}
              />
            </View>
            <View style={SignUpStyle.inputMargin}>
              <TextInput
                mode="outlined"
                style={SignUpStyle.input}
                placeholder="Last Name"
                value={lastname}
                onChangeText={lastname => setLastname(lastname)}
              />
            </View>
            <View style={SignUpStyle.inputMargin}></View>
            <TextInput
              mode="outlined"
              style={SignUpStyle.input}
              placeholder="Email Address"
              value={email}
              onChangeText={email => setEmail(email)}
            />
            <View style={SignUpStyle.inputMargin}>
              <TextInput
                mode="outlined"
                style={SignUpStyle.input}
                placeholder="Password"
                value={password}
                secureTextEntry={false}
                onChangeText={password => setPassword(password)}
              />
            </View>
          </View>
          <View style={SignUpStyle.signUpBtnContainer}>
            <TouchableOpacity
              style={SignUpStyle.signUpBtn}
              onPress={() => navigation.navigate('drawer')}>
              <Text style={SignUpStyle.signUpBtnText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
