import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ProfileStyle as styles} from './profileStyle';
import adminImg from '../../../images/male3.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';

export default function UpdateProfileAdmin({route, navigation}) {
  const [errors, setErrors] = useState('');
  const {userId} = route.params;
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

  const updateUserData = async () => {
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.username ||
      !userData.phone
    ) {
      setErrors('All fields are required.');
    } else {
      setErrors('');
      try {
        const token = await AsyncStorage.getItem('access_token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        await axios.patch(
          `${API_URL}/user/${userId}`,
          {
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            role: userData.role,
          },
          {headers},
        );
        console.log({userData});
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    navigation.navigate('Profile');
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
    <View style={styles.profileAdmin}>
      <Text style={styles.profiletTitle}>Edit Profile</Text>
      <View style={styles.profileContent}>
        {userData ? (
          <>
            <View style={styles.columnView}>
              <View style={styles.profileUpdate}>
                <Image source={adminImg} style={styles.profilepic} />
              </View>
              <View style={styles.updateAdminInfo}>
                <TextInput
                  mode="outlined"
                  style={styles.addressInput}
                  placeholder="Email"
                  placeholderTextColor="#777777"
                  value={userData.email}
                  editable={false}
                  onChangeText={value => {
                    handleChangeText('email', value);
                  }}
                />
                <View style={styles.updateInput}>
                  <TextInput
                    mode="outlined"
                    style={styles.adminInputInfo}
                    placeholder="Firt name"
                    placeholderTextColor="#777777"
                    value={userData.firstName}
                    onChangeText={value => {
                      handleChangeText('firstName', value);
                    }}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.adminInputInfo}
                    placeholder="Last name"
                    placeholderTextColor="#777777"
                    value={userData.lastName}
                    onChangeText={value => {
                      handleChangeText('lastName', value);
                    }}
                  />
                </View>
                <View style={styles.updateInput}>
                  <TextInput
                    mode="outlined"
                    style={styles.adminInputInfo}
                    placeholder="Username"
                    placeholderTextColor="#777777"
                    value={userData.username}
                    secureTextEntry={false}
                    onChangeText={value => {
                      handleChangeText('username', value);
                    }}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.adminInputInfo}
                    placeholder="Phone number"
                    placeholderTextColor="#777777"
                    value={userData.phone}
                    secureTextEntry={false}
                    onChangeText={value => {
                      handleChangeText('phone', value);
                    }}
                  />
                </View>

                <View style={styles.saveAdminInfo}>
                  {errors !== '' && (
                    <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
                  )}
                  <TouchableOpacity
                    style={styles.updateBtn}
                    onPress={updateUserData}>
                    <Text style={styles.buttonsText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ) : (
          <Text>Loading user data...</Text>
        )}
      </View>
    </View>
  );
}
