import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StoreSetStyle} from './storeSettingStyle';
import tempoLogo from '../../../images/tempoLogo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function StoreSetting({navigation}) {
  const API_URL = 'http://10.0.2.2:3000';
  const [storeData, setStoreData] = useState(null);
  const [branchData, setBranchData] = useState(null);

  const fetchStoreData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/store`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStoreData(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const fetchBranchData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await axios.get(`${API_URL}/branch`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBranchData(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchStoreData();
    fetchBranchData();
  }, []);

  return (
    <View style={StoreSetStyle.storeSetting}>
      <View style={StoreSetStyle.storeSetContent}>
        <Text style={StoreSetStyle.storeSetTitle}>Store Details</Text>

        <View style={StoreSetStyle.storeDetailsContainer}>
          <View style={StoreSetStyle.storeDetail}>
            <View style={StoreSetStyle.storeDetails}>
              <View style={StoreSetStyle.infoTitle}>
                <Text style={StoreSetStyle.storeInfo}>Store Name</Text>
                <Text style={StoreSetStyle.storeInfo}>Store Branch</Text>
                <Text style={StoreSetStyle.storeInfo}>Email</Text>
                <Text style={StoreSetStyle.storeInfo}>Contact</Text>
                <Text style={StoreSetStyle.storeInfo}>Store Address</Text>
              </View>

              <View style={StoreSetStyle.info}>
                {storeData ? (
                  <>
                    <Text style={StoreSetStyle.storeInfo}>
                      {storeData.storeName}
                    </Text>
                  </>
                ) : (
                  <Text>Loading user data...</Text>
                )}
                {branchData ? (
                  <>
                    <Text style={StoreSetStyle.storeInfo}>
                      {branchData.branchName}
                    </Text>
                    <Text style={StoreSetStyle.storeInfo}>
                      {branchData.email}
                    </Text>
                    <Text style={StoreSetStyle.storeInfo}>
                      {branchData.contactNumber}
                    </Text>
                    <Text style={StoreSetStyle.storeInfo}>
                      {branchData.address}
                    </Text>
                  </>
                ) : (
                  <Text>Loading user data...</Text>
                )}
              </View>
            </View>
            <View style={StoreSetStyle.storePhoto}>
              <Image style={StoreSetStyle.storeLogo} source={tempoLogo} />
            </View>
          </View>
          <View style={StoreSetStyle.buttons}>
            {/* <TouchableOpacity style={StoreSetStyle.buttonsOpacity}>
              <Text style={StoreSetStyle.buttonsText}> Add new Store</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={StoreSetStyle.buttonsOpacity}
              onPress={
                // () => navigation.navigate('Update Store')
                fetchStoreData
              }>
              <Text style={StoreSetStyle.buttonsText}>Edit this store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
