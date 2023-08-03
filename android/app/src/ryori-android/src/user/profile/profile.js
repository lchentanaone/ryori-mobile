import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {ProfileStyle as styles} from './profileStyle';
import redRyori from '../images/redRyori.png';
import male from '../images/male3.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../utils/constants';

export default function ProfileEmployee({navigation}) {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login-admin');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <View style={styles.ryoriIcon}>
          <Image source={redRyori} style={styles.ryori} />
          <Text style={styles.ryoriIconText}>My Profile</Text>
        </View>
        {userData ? (
          <>
            <View style={styles.crewImageCon}>
              <Image source={male} style={styles.crewImage} />
              <Text style={styles.crewName}>{userData.username}</Text>
              <Text style={styles.crewName}>{userData.email}</Text>
            </View>
            <View style={styles.crewInfo}>
              <View style={{width: '40%'}}>
                <Text style={styles.columnText}>First name</Text>
                <Text style={styles.columnText}>Last name</Text>
                <Text style={styles.columnText}>Position</Text>
                <Text style={styles.columnText}>Contact no.</Text>
                <Text style={styles.columnText}>Address</Text>
              </View>
              <View style={{width: '60%', marginLeft: 10, paddingRight: 10}}>
                <Text style={styles.columnText}>{userData.firstName}</Text>
                <Text style={styles.columnText}>{userData.lastName}</Text>
                <Text style={styles.columnText}>{userData.role}</Text>
                <Text style={styles.columnText}>{userData.phone}</Text>
                <Text style={styles.columnText}>{'Mintal'}</Text>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                <Text style={styles.btnText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Loading user data...</Text>
        )}
      </View>
    </View>
  );
}
