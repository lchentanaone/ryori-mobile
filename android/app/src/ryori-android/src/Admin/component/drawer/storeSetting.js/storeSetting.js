import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StoreSetStyle} from './storeSettingStyle';
import tempoLogo from '../../../images/tempoLogo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function StoreSetting({navigation}) {
  const API_URL = 'http://10.0.2.2:3000';
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    fetchStoreData();
  }, []);

  const fetchStoreData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/store`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStoreData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  return (
    <View style={StoreSetStyle.storeSetting}>
      <View style={StoreSetStyle.storeSetContent}>
        <Text style={StoreSetStyle.storeSetTitle}>Store Details</Text>

        <View style={StoreSetStyle.storeDetailsContainer}>
          <View style={StoreSetStyle.storeDetail}>
            {storeData ? (
              <>
                <View style={StoreSetStyle.storeDetails}>
                  <View style={StoreSetStyle.infoTitle}>
                    <Text style={StoreSetStyle.storeInfo}>Store Name</Text>
                    <Text style={StoreSetStyle.storeInfo}>Store Branch</Text>
                    <Text style={StoreSetStyle.storeInfo}>Email</Text>
                    <Text style={StoreSetStyle.storeInfo}>Contact</Text>
                    <Text style={StoreSetStyle.storeInfo}>Store Address</Text>
                  </View>
                  <View style={StoreSetStyle.info}>
                    <Text style={StoreSetStyle.storeInfo}>
                      {storeData.storeName}
                    </Text>
                    <Text style={StoreSetStyle.storeInfo}>Mintal Branch</Text>
                    <Text style={StoreSetStyle.storeInfo}>
                      {storeData.email}
                    </Text>
                    <Text style={StoreSetStyle.storeInfo}>+639012345678</Text>
                    <Text style={StoreSetStyle.storeInfo}>
                      Mintal, Davao City
                    </Text>
                  </View>
                </View>
                <View style={StoreSetStyle.storePhoto}>
                  <Image style={StoreSetStyle.storeLogo} source={tempoLogo} />
                </View>
              </>
            ) : (
              <Text>Loading user data...</Text>
            )}
          </View>
          <View style={StoreSetStyle.buttons}>
            {/* <TouchableOpacity style={StoreSetStyle.buttonsOpacity}>
              <Text style={StoreSetStyle.buttonsText}> Add new Store</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={StoreSetStyle.buttonsOpacity}
              onPress={() => navigation.navigate('Update Store')}>
              <Text style={StoreSetStyle.buttonsText}>Edit this store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
