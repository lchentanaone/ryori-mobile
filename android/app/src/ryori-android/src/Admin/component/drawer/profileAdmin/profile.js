import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileStyle} from './profileStyle';
import userProfile from '../../../images/male3.png';
import axios from 'axios';

export default function ProfileAdmin({navigation}) {
  const API_URL = 'http://10.0.2.2:3000';
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make an API call to retrieve user data
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGF5bG9hZCI6eyJpZCI6OSwicm9sZSI6IiIsInVzZXJuYW1lIjoiUnlvcmkiLCJlbWFpbCI6InJ5b3JpYXBwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHBrRXVFY2RVVm5nSkEveWpuU1lGcE9kcGdZazJ2NE10Mm41NENYTmF6VkM5OS5KcjUxWTMuIiwiZmlyc3ROYW1lIjoiUnlvcmkiLCJsYXN0TmFtZSI6IkFydGlmIiwiYWRkcmVzcyI6IkRhdmFvIn0sImlhdCI6MTY4NzQ5NzI0NywiZXhwIjoxNjg3NTgzNjQ3fQ.j4GetBTT89zEYa9u94KoAT0x4KSKyOxw-IbbMKJTr0w'; // Replace with your actual token
      const response = await axios.get(`${API_URL}/user/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Set the user data in the state
      setUserData(response.data);
      console.log(
        '------------------TOken----------------------',
        response.data,
      );
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <View style={ProfileStyle.profileAdmin}>
      <Text style={ProfileStyle.profiletTitle}>Profile</Text>
      <View style={ProfileStyle.profileContent}>
        <View style={ProfileStyle.profileInfo}>
          {/* {items.map((item, index) => (
            <View key={index}> */}
          <View style={ProfileStyle.profileImageCol}>
            <Image source={userProfile} style={ProfileStyle.profilepic} />
            <View style={ProfileStyle.nameEmail}>
              {userData ? (
                <View>
                  <Text style={ProfileStyle.profileInfoText}>
                    {userData.username}
                  </Text>
                  <Text style={ProfileStyle.profileInfoText}>
                    {userData.email}
                  </Text>
                </View>
              ) : (
                <Text>Loading user data...</Text>
              )}
            </View>
          </View>
          <View style={ProfileStyle.profileDetailsCol}>
            <View style={ProfileStyle.detailColored}>
              <View style={ProfileStyle.infoCol}>
                <Text style={ProfileStyle.infoTetx}>Email</Text>
              </View>
              <View style={ProfileStyle.infoCol2}>
                <Text style={ProfileStyle.infoTetx}>{'email'}</Text>
              </View>
            </View>
            <View style={ProfileStyle.detail}>
              <View style={ProfileStyle.infoCol}>
                <Text style={ProfileStyle.infoTetx}>Contact</Text>
              </View>
              <View style={ProfileStyle.infoCol2}>
                <Text style={ProfileStyle.infoTetx}>{'+639012345678'}</Text>
              </View>
            </View>
            <View style={ProfileStyle.detailColored}>
              <View style={ProfileStyle.infoCol}>
                <Text style={ProfileStyle.infoTetx}>Birthday</Text>
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
          {/* </View>
          ))} */}
        </View>
      </View>
    </View>
  );
}
