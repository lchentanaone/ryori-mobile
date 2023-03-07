/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {overviewStyle} from '../overview-style';
import Backgrounds from '../background';
import {Text} from 'react-native-elements';
import {menuStyle} from './menu-style';

export default function Menus({navigate}) {
  return (
    <Backgrounds>
      <View style={menuStyle.total}>
        <Text style={menuStyle.test}>Hello</Text>
      </View>
    </Backgrounds>
  );
}
