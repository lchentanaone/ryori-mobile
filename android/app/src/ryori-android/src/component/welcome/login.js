/* eslint-disable prettier/prettier */

import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {welcomeStyles} from './welcome-style';
import ryoriLogo from './../../images/RYORI-Logo.png';

export default function Login() {
  return (
    <View style={welcomeStyles.welcomes}>
      <View style={welcomeStyles.circleContainer}>
        <View style={welcomeStyles.circle} />
      </View>
      <View style={welcomeStyles.ryoriLogoLeft}>
        <Image source={ryoriLogo} style={welcomeStyles.ryoriLogoLogin} />
      </View>
    </View>
  );
}
