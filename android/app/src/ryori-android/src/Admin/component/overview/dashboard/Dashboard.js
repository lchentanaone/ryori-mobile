/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import {overviewStyle} from '../overview-style';
import ryoriLogo from '../../../images/logo/RYORI-Logo.png';
import {DrawerActions} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../header';

export default function Dashboard({navigation}) {
  return (
    <View style={overviewStyle.container}>
      <Header />
      <View style={overviewStyle.menu}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Entypo name="menu" size={30} color="#48e88e" />
        </TouchableOpacity>
      </View>
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
