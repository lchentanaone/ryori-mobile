/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {overviewStyle} from '../overview-style';

export default function Customers({navigate}) {
  return (
    <View style={overviewStyle.container}>
      <View style={overviewStyle.circleContainer}>
        <View style={overviewStyle.circle} />
      </View>
      <Text>Customer</Text>
    </View>
  );
}
