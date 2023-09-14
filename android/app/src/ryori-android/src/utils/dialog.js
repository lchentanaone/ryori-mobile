import React from 'react';
import {Text, TouchableOpacity, View, Linking, Pressable} from 'react-native';
import {Dialog} from '@rneui/themed';

export default function DialogModal() {
  const handleEmailPress = () => {
    const email = 'mailto:ryoridavao@gmail.com';
    Linking.openURL(email).catch(err =>
      console.error('Error opening email: ', err),
    );
  };
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      {/* <Dialog.Title style={{color: 'red'}} title="Comming Soon" /> */}
      <Text
        style={{
          color: '#000',
          fontFamily: 'Quicksand-Bold',
          fontSize: 20,
          top: -10,
        }}>
        Comming Soon
      </Text>
      <Text style={{color: '#505050', fontFamily: 'Quicksand-SemiBold'}}>
        This feature is comming soon. For urgent concerns, please email us at
        <Text
          onPress={handleEmailPress}
          style={{textDecorationLine: 'underline', color: '#BD0A0A'}}>
          {' '}
          ryoridavao@gmail.com
        </Text>
      </Text>
    </View>
  );
}
