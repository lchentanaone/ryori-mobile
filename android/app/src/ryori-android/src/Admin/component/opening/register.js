import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import ryoriText from '../../images/ryori-text.png';
import {openingStyles} from './opening-style';
import axios from 'axios';

export default function Register({navigation}) {
  const API_URL = 'http://10.0.2.2:3000';


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // const handleRegister = () => {
  //   axios
  //     .post(`${API_URL}/auth/register`, {name, lastName, email, password})
  //     .then(response => {
  //       console.log('Registration successful:', response.data);
  //       // handle successful registration, such as storing authentication token in AsyncStorage and navigating to homepage
  //       navigation.navigate('drawer');
  //     })
  //     .catch(error => {
  //       console.error('Error registering:', error);
  //       // handle registration error, such as displaying error message to user
  //     });
  // };

  return (
    <View style={openingStyles.register}>
      <View style={openingStyles.registerContent}>
        <View style={openingStyles.forLogo}>
          <Image source={ryoriText} style={openingStyles.ryoriText} />
        </View>
        <Text style={openingStyles.pleaseText}>Please sign in to Continue</Text>
        <View style={openingStyles.form}>
          <View style={openingStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="First name"
              placeholderTextColor="#777777"
              value={firstname}
              secureTextEntry={false}
              onChangeText={setFirstname}
            />
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Last name"
              placeholderTextColor="#777777" 
              value={lastname}
              secureTextEntry={false}
              onChangeText={setLastname}
            />
          </View>
          <View style={openingStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Email"
              placeholderTextColor="#777777"
              value={email}
              secureTextEntry={false}
              onChangeText={setEmail}
            />
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Password"
              placeholderTextColor="#777777"
              value={password}
              secureTextEntry={false}
              onChangeText={setPassword}
            />
          </View>
          <View style={openingStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Confirm Password"
              placeholderTextColor="#777777"
              value={confirmPassword}
              secureTextEntry={false}
              onChangeText={setConfirmPassword}
            />
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Phone Number"
              placeholderTextColor="#777777"
              value={phoneNumber}
              secureTextEntry={false}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
        <View>
    </View>
        <View style={openingStyles.SignUp}>
          <TouchableOpacity
            style={openingStyles.SignUpOpacity}
            onPress={() => navigation.navigate('Set up your Store')}
          >
            <Text style={openingStyles.SignUpTextBtn}>SING IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
