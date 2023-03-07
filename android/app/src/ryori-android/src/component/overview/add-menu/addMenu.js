/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {overviewStyle} from '../overview-style';

export default function AddMenu({navigate}) {
  return (
    <View style={overviewStyle.container}>
      <View style={overviewStyle.circleContainer}>
        <View style={overviewStyle.circle} />
      </View>
    </View>
  );
}
