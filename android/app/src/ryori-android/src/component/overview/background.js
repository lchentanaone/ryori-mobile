/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import {overviewStyle} from '../overview/overview-style';
import ryoriLogo from '../../images/logo/RYORI-Logo.png';
import {DrawerActions} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Backgrounds({navigation}) {
  return (
    <View style={overviewStyle.container}>
      {/* <View style={overviewStyle.menu}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Entypo name="menu" size={30} color="#48e88e" />
        </TouchableOpacity>
      </View> */}
      <ImageBackground
        source={ryoriLogo}
        style={overviewStyle.ryoriLogoLogin}
      />
      <View style={overviewStyle.circleContainer}>
        <View style={overviewStyle.circle} />
      </View>
    </View>
  );
}
