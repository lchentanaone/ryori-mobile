import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import ryoriText from '../../images/ryori-red.png';
import {openingStyles} from './opening-style';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const navigation = useNavigation();
  const [errors, setErrors] = useState('');

  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    if (
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phoneNumber
    ) {
      setErrors('All fields are required.');
    } else if (password.length < 6) {
      setErrors('Password must be at least 6 characters.');
    } else if (!isValidEmail(email)) {
      setErrors('Invalid email format.');
    } else {
      setErrors('');

      try {
        response = await axios.post(`${API_URL}/auth/register`, {
          username,
          email,
          firstName,
          lastName,
          password,
          phone: phoneNumber,
        });
        const token = response.data.access_token;
        await AsyncStorage.setItem('access_token', token);
        const getToken = await AsyncStorage.getItem('access_token');
        console.log({getToken});
        console.log('Registration successful:', response.data);
        navigation.navigate('New-Store-Branch', {type: 'store'});
      } catch (error) {
        console.error('Error registering:', error);
      }
    }
  };
  // Email validation using a regular expression
  const isValidEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
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
              placeholder="Username"
              placeholderTextColor="#777777"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Email"
              placeholderTextColor="#777777"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
          </View>
          <View style={openingStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="First Name"
              placeholderTextColor="#777777"
              value={firstName}
              onChangeText={setFirstname}
            />
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Last name"
              placeholderTextColor="#777777"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={openingStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Password"
              placeholderTextColor="#777777"
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Contact Number"
              placeholderTextColor="#777777"
              value={phoneNumber}
              keyboardType="numeric"
              onChangeText={setPhoneNumber}
            />
          </View>
          {errors !== '' && (
            <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
          )}
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
