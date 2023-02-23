/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {welcomeStyles} from './welcome-style';
import ryoriLogo from './../../images/RYORI-Logo.png';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {FloatingLabelInput} from 'react-native-floating-label-input';

export default function Login() {
  const [phone, setPhone] = useState('');
  return (
    <View style={welcomeStyles.welcomes}>
      <View style={welcomeStyles.circleContainer}>
        <View style={welcomeStyles.circle} />
      </View>
      <View style={welcomeStyles.ryoriLogoLeft}>
        <Image source={ryoriLogo} style={welcomeStyles.ryoriLogoLogin} />
      </View>
      <View style={welcomeStyles.loginFormContainer}>
        <View style={welcomeStyles.welcomeLoginTextCon}>
          <Text style={welcomeStyles.welcomeLoginText}>Welcome to RYORI!</Text>
          <Text style={welcomeStyles.loginIntro}>
            Enter you Phone number or Email address for{'\n'} sign in. Create
            your menu and setup your store
          </Text>
        </View>
        <View style={welcomeStyles.loginfield}>
          <View style={welcomeStyles.textFieldContainer}>
            <TextInput
              mode="outlined"
              style={welcomeStyles.input}
              placeholder="Email Address"
            />
            <View style={welcomeStyles.inputMargin}>
              <TextInput
                mode="outlined"
                style={welcomeStyles.input}
                placeholder="Password"
              />
            </View>
            <View style={welcomeStyles.forgotBtn}>
              <TouchableOpacity
                style={welcomeStyles.textBtbOpacity}
                // onPress={() => navigation.navigate('Forgot Password')}
              >
                <Text style={welcomeStyles.forgotText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <View style={welcomeStyles.loginBtnContainer}>
              <TouchableOpacity
                style={welcomeStyles.signInBtn}
                // onPress={() => navigation.navigate('login')}
              >
                <Text style={welcomeStyles.getStartedTextBtn}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            <View style={welcomeStyles.optionBtnCont}>
              <View style={welcomeStyles.optionBtn}>
                <View style={welcomeStyles.textBtbOpacity}>
                  <Text style={welcomeStyles.forgotText}>
                    Don't have account?
                  </Text>
                </View>
              </View>
              <View style={welcomeStyles.optionBtn}>
                <TouchableOpacity
                  style={welcomeStyles.textBtbOpacity}
                  // onPress={() => navigation.navigate('Forgot Password')}
                >
                  <Text style={welcomeStyles.createAccText}>
                    Create new account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
