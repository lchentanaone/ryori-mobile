import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProfileStyle} from './profileStyle';
import userProfile from '../../../images/male3.png';

export default function ProfileAdmin({navigation}) {
  return (
    <View style={ProfileStyle.profileAdmin}>
      <Text style={ProfileStyle.profiletTitle}>Profile</Text>
      <View style={ProfileStyle.profileContent}>
        <View style={ProfileStyle.profileInfo}>
          <View style={ProfileStyle.profileImageCol}>
            <Image source={userProfile} style={ProfileStyle.profilepic} />
            <View style={ProfileStyle.nameEmail}>
              <Text style={ProfileStyle.profileInfoText}>John Doe</Text>
              <Text style={ProfileStyle.profileInfoText}>
                JohnDoe99@gmail.com
              </Text>
            </View>
          </View>
          <View style={ProfileStyle.profileDetailsCol}>
            <View style={ProfileStyle.detailColored}>
              <View style={ProfileStyle.infoCol}>
                <Text style={ProfileStyle.infoTetx}>Email</Text>
              </View>
              <View style={ProfileStyle.infoCol2}>
                <Text style={ProfileStyle.infoTetx}>
                  {'JohnDoe99@gmail.com'}
                </Text>
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
        </View>
      </View>
    </View>
  );
}
