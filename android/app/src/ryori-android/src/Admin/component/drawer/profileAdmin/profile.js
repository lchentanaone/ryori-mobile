import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileStyle} from './profileStyle';
import userProfile from '../../../images/male3.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants'
export default function ProfileAdmin({navigation}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

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

  return (
    <View style={ProfileStyle.profileAdmin}>
      <Text style={ProfileStyle.profiletTitle}>Profile</Text>
      <View style={ProfileStyle.profileContent}>
        <View style={ProfileStyle.profileInfo}>
          {userData ? (
            <>
              <View style={ProfileStyle.profileImageCol}>
                <Image source={userProfile} style={ProfileStyle.profilepic} />
                <View style={ProfileStyle.nameEmail}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={ProfileStyle.profileInfoText}>
                      {userData.username}
                    </Text>
                    <Text style={ProfileStyle.profileInfoText}>
                      {userData.email}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={ProfileStyle.profileDetailsCol}>
                <View style={ProfileStyle.detail}>
                  <View style={ProfileStyle.infoCol}>
                    <Text style={ProfileStyle.infoTetx}>Full Name</Text>
                  </View>
                  <View style={ProfileStyle.infoCol2}>
                    <Text style={ProfileStyle.infoTetx}>
                      {userData.firstName} {userData.lastName}
                    </Text>
                  </View>
                </View>
                <View style={ProfileStyle.detailColored}>
                  <View style={ProfileStyle.infoCol}>
                    <Text style={ProfileStyle.infoTetx}>Email</Text>
                  </View>
                  <View style={ProfileStyle.infoCol2}>
                    <Text style={ProfileStyle.infoTetx}> {userData.email}</Text>
                  </View>
                </View>
                <View style={ProfileStyle.detail}>
                  <View style={ProfileStyle.infoCol}>
                    <Text style={ProfileStyle.infoTetx}>Address</Text>
                  </View>
                  <View style={ProfileStyle.infoCol2}>
                    <Text style={ProfileStyle.infoTetx}>
                      {userData.address}
                    </Text>
                  </View>
                </View>
                <View style={ProfileStyle.detailColored}>
                  <View style={ProfileStyle.infoCol}>
                    <Text style={ProfileStyle.infoTetx}>Contact No.</Text>
                  </View>
                  <View style={ProfileStyle.infoCol2}>
                    <Text style={ProfileStyle.infoTetx}>{'May 20 1999'}</Text>
                  </View>
                </View>
                <View style={ProfileStyle.detail}>
                  <View style={ProfileStyle.infoCol}>
                    <Text style={ProfileStyle.infoTetx}>Gender</Text>
                  </View>
                  <View style={ProfileStyle.infoCol2}>
                    <Text style={ProfileStyle.infoTetx}>{'Male'}</Text>
                  </View>
                </View>
                <View style={ProfileStyle.detailColored}>
                  <View style={ProfileStyle.infoCol}>
                    <Text style={ProfileStyle.infoTetx}>Address</Text>
                  </View>
                  <View style={ProfileStyle.infoCol2}>
                    <Text style={ProfileStyle.infoTetx}>{'Davao City'}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={ProfileStyle.buttonsOpacity}
                  onPress={() => navigation.navigate('Update Admin')}>
                  <Text style={ProfileStyle.buttonsText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <Text>Loading user data...</Text>
          )}
        </View>
      </View>
    </View>
  );
}
