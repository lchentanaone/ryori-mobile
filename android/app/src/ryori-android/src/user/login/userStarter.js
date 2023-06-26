import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {OpeningSytle as styles} from './openingStyle';
import ryori from '../images/ryori.png';
import {useNavigation} from '@react-navigation/native';

export default function UserStarter() {
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
    <View style={styles.starter}>
      <Image source={ryori} style={styles.ryoriStarter} />
    </View>
  );
}
