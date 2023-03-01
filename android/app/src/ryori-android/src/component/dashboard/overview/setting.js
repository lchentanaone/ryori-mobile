/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {dashboadrStyles} from '../dashboard-style';

export default function Setting({navigate}) {
  return (
    <View style={dashboadrStyles.container}>
      <View style={dashboadrStyles.circleContainer}>
        <View style={dashboadrStyles.circle} />
      </View>
    </View>
  );
}
