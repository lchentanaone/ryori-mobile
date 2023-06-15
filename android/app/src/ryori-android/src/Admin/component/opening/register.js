import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import ryoriText from '../../images/ryori-text.png';
import {openingStyles} from './opening-style';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  const API_URL = 'http://10.0.2.2:3000';

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    axios
      .post(`${API_URL}/auth/register`, {name, lastName, email, password})
      .then(response => {
        console.log('Registration successful:', response.data);
        // handle successful registration, such as storing authentication token in AsyncStorage and navigating to homepage
        navigation.navigate('Setup your Store');
      })
      .catch(error => {
        console.error('Error registering:', error);
        // handle registration error, such as displaying error message to user
      });
  };

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
              value={name}
              secureTextEntry={false}
              onChangeText={setName}
            />
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Last name"
              placeholderTextColor="#777777"
              value={lastName}
              secureTextEntry={false}
              onChangeText={setLastName}
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
          <Text>Terms and Conditions</Text>
        </View>
        <View style={openingStyles.SignUp}>
          <TouchableOpacity
            style={openingStyles.SignUpOpacity}
            // onPress={() => navigation.navigate('Set up your Store')}
            onPress={handleRegister}>
            <Text style={openingStyles.SignUpTextBtn}>SING IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
