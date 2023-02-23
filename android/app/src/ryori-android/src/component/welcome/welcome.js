/* eslint-disable prettier/prettier */

import React from 'react';
import {Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {welcomeStyles} from './welcome-style';
import ryoriLogo from './../../images/RYORI-Logo.png';

export default function Welcome({navigation}) {
  return (
    <SafeAreaView style={welcomeStyles.welcomes}>
      <View style={welcomeStyles.circleContainer}>
        <View style={welcomeStyles.circle} />
      </View>
      <View style={welcomeStyles.content}>
        <View style={welcomeStyles.logoContainer}>
          <Image source={ryoriLogo} style={welcomeStyles.ryoriLogo} />
          <Text style={welcomeStyles.ryoriText}>R Y O R I</Text>
        </View>
        <View style={welcomeStyles.wcTextContainer}>
          <Text style={welcomeStyles.welcomeText}>WELCOME</Text>
          <Text style={welcomeStyles.welcomeIntro}>
            It’s a pleasure to meet you.{'\n'} We are excited that you’re{'\n'}
            here so let’s get started!
          </Text>
        </View>
        <View style={welcomeStyles.getStarted}>
          <TouchableOpacity
            style={welcomeStyles.getStartedOpacity}
            onPress={() => navigation.navigate('login')}>
            <Text style={welcomeStyles.getStartedTextBtn}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
