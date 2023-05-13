import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {kitchenStarter} from './kitchen-style';
import ryori from '../../images/ryori.png';
import {useNavigation} from '@react-navigation/native';

export default function KitchenStarter() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    let isMounted = true;
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={kitchenStarter.starter}>
      <Image source={ryori} style={kitchenStarter.ryoriStarter} />
    </View>
  );
}
