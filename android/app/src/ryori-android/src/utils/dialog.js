import React from 'react';
import {Text, TouchableOpacity, View, Linking} from 'react-native';
import {Dialog} from '@rneui/themed';

export default function DialogModal() {
  const handleEmailPress = () => {
    const email = 'mailto:ryoridavao@gmail.com';
    Linking.openURL(email).catch(err =>
      console.error('Error opening email: ', err),
    );
  };
  return (
    <View>
      <Dialog.Title style={{color: '#000'}} title="Comming Soon" />
      <Text style={{color: '#505050', fontFamily: 'Quicksand-SemiBold'}}>
        This feature is comming soon. For urgent concerns, please email us at
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={{textDecorationLine: 'underline', color: '#BD0A0A'}}>
            {''} ryoridavao@gmail.com
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
