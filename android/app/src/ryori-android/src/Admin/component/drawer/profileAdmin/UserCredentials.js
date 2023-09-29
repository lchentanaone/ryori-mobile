import React, {useState, useEffect} from 'react';
import {ProfileStyle} from './profileStyle';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';

export default function UserCredentials({route}) {
  const {userId} = route.params;
  const [errors, setErrors] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateUserCred = async () => {
    if (!password || !confirmPassword) {
      setErrors('All fields are required.');
    } else if (password.length < 6) {
      setErrors('Password must be at least 6 characters.');
    } else if (password !== confirmPassword) {
      setErrors('Passwords do not match.');
    } else {
      setErrors('');
      try {
        const token = await AsyncStorage.getItem('access_token');
        const store_Id = await AsyncStorage.getItem('store_id');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        await axios.patch(
          `${API_URL}/user/${userId}`,
          {
            store_Id,
            password,
          },
          {headers},
        );
        const tempUserData = {...userData};
        setUserData(tempUserData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
      setPassword('');
      setConfirmPassword('');
      Alert.alert('Password has been saved.');
    }
  };

  // const isValidEmail = email => {
  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   return emailPattern.test(email);
  // };

  const handleChangeText = (key, value) => {
    const tempUserData = {...userData};
    tempUserData[key] = value;
    setUserData(tempUserData);
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  return (
    <View style={ProfileStyle.userCred}>
      <View style={ProfileStyle.userCredForm}>
        <Text style={ProfileStyle.changeText}>Change Password</Text>
        <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
          {userData ? (
            <>
              <TextInput
                mode="outlined"
                style={ProfileStyle.userCredInput}
                placeholder="Email"
                placeholderTextColor="#777777"
                value={userData.email}
                editable={false}
                onChangeText={value => {
                  handleChangeText('email', value);
                }}
              />
              <TextInput
                mode="outlined"
                style={ProfileStyle.userCredInput}
                placeholder="Password"
                placeholderTextColor="#777777"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
              />
              <TextInput
                mode="outlined"
                style={ProfileStyle.userCredInput}
                placeholder="confirm Password"
                placeholderTextColor="#777777"
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
              />
              {errors !== '' && (
                <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
              )}
              <TouchableOpacity
                style={ProfileStyle.saveNewCred}
                onPress={updateUserCred}>
                <Text style={{color: '#fff'}}>Save</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text>Loading user data...</Text>
          )}
        </View>
      </View>
    </View>
  );
}
