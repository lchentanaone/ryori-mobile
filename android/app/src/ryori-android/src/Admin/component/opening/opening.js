import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {openingStyles} from './opening-style';
import ryori from '../../images/ryori.png';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  useEffect(() => {
    async function checkIfTokenExist() {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const role = await AsyncStorage.getItem('role');
      if (role === 'Admin') {
        if (store_Id) {
          setTimeout(() => {
            navigation.navigate('Select Branch');
          }, 2000);
        } else if (token) {
          setTimeout(() => {
            navigation.navigate('New-Store-Branch', {type: 'store'});
          }, 2000);
        }
      } else if (role === 'Dining') {
        if (store_Id) {
          setTimeout(() => {
            navigation.navigate('DiningBottomNavigator');
          }, 2000);
        }
      } else if (role === 'Kitchen') {
        if (store_Id) {
          setTimeout(() => {
            navigation.navigate('Kitchen');
          }, 2000);
        }
      } else {
        setTimeout(() => {
          navigation.navigate('Login-admin');
        }, 2000);
      }

      let isMounted = true;
      return () => {
        isMounted = false;
      };
    }
    checkIfTokenExist();
  }, []);

  return (
    <View style={openingStyles.welcomes}>
      <Image source={ryori} style={openingStyles.ryoriStarter} />
    </View>
  );
}
