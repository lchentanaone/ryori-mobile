import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import ryoriText from '../../images/ryori-red.png';
import {openingStyles} from './opening-style';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CheckBox} from 'react-native-elements';
import DialogModal from '../../../utils/dialog';
import {Dialog} from '@rneui/themed';

export default function Register() {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [errors, setErrors] = useState('');

  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPasswor] = useState('');

  const handleRegister = async () => {
    if (
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phoneNumber ||
      !confirmPassword
    ) {
      setErrors('All fields are required.');
    } else if (!isValidEmail(email)) {
      setErrors('Invalid email format.');
    } else if (password.length < 6) {
      setErrors('Password must be at least 6 characters.');
    } else if (password !== confirmPassword) {
      setErrors('Passwords do not match.');
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

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const toggleDialog1 = () => {
    setVisible1(!visible1);
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
              placeholder="Password"
              placeholderTextColor="#777777"
              secureTextEntry={true}
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
          <View style={openingStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={openingStyles.inputR}
              placeholder="Confirm Password"
              placeholderTextColor="#777777"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPasswor}
            />
            <View style={openingStyles.SignUp}>
              {errors !== '' && (
                <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
              )}
              <TouchableOpacity
                style={openingStyles.SignUpOpacity}
                onPress={handleRegister}>
                <Text style={openingStyles.SignUpTextBtn}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: -10,
              width: '50%',
            }}>
            <CheckBox
              checked={isChecked}
              onPress={toggleCheckbox}
              checkedColor="#BD0A0A"
              containerStyle={{marginLeft: 2, padding: 0}}
            />
            <TouchableOpacity onPress={toggleDialog1}>
              <Text style={{textDecorationLine: 'underline', color: '#000'}}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
          <DialogModal />
        </Dialog>
      </View>
    </View>
  );
}
