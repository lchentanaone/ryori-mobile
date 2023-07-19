import React, {useState, useEffect} from 'react';
import {ProfileStyle} from './profileStyle';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';

export default function UserCredentials({route}) {
  const {userId} = route.params;

  const [password, setPassword] = useState('');
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
    Alert.alert('Password has been saved.');
  };

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
        <Text style={ProfileStyle.changeText}>Change Email and Password</Text>
        <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
          {userData ? (
            <>
              <TextInput
                mode="outlined"
                style={ProfileStyle.userCredInput}
                placeholder="Email"
                placeholderTextColor="#777777"
                value={userData.email}
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
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={ProfileStyle.saveNewCred}
                onPress={updateUserCred}>
                <Text>Save</Text>
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
