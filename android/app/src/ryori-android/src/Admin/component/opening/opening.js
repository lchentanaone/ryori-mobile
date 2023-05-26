import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {openingStyles} from './opening-style';
import ryori from '../../images/ryori.png';
import {useNavigation} from '@react-navigation/native';

export default function Opening() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login-admin');
    }, 2000);
    let isMounted = true;
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={openingStyles.welcomes}>
      <Image source={ryori} style={openingStyles.ryoriStarter} />
    </View>
  );
}
