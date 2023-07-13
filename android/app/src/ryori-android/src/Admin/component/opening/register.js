import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import ryoriText from '../../images/ryori-text.png';
import {openingStyles} from './opening-style';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../../utils/constants'
export default function Register() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    console.log({
      username,
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
    })
    axios
      .post(`${API_URL}/auth/register`, {
        username,
        email,
        firstName,
        lastName,
        password,
        phone: phoneNumber,
      })
      .then(response => {
        console.log('Registration successful:', response.data);
        navigation.navigate('Setup your Store');
      })
      .catch(error => {
        console.error('Error registering:', error);
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
              value={address}
              keyboardType="numeric"
              onChangeText={setAddress}
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
