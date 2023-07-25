import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StoreSetStyle, updateStoreStyle as updStyle} from './storeSettingStyle';
import tempoLogo from '../../../images/tempoLogo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import {launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

export default function UpdateStore({route, navigation}) {
  const {branchId} = route.params;

  const [branchData, setBranchData] = useState(null);
  const [storeData, setStoreData] = useState(null);
  const [storeName, SetStoreName] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchBranchData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branchId = await AsyncStorage.getItem('branch_Id');
      const response = await axios.get(`${API_URL}/branch/${branchId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setBranchData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const updateBranchData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branchId = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.patch(
        `${API_URL}/branch/${branchId}`,
        {
          branchName: branchData.branchName,
          email: branchData.email,
          contactNumber: branchData.contactNumber,
          address: branchData.contactNumber,
        },
        {headers},
      );
      console.log({branchData});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchStoreData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const response = await axios.get(`${API_URL}/store/${store_Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStoreData(response.data);
      setPhoto(response.data.photo);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response);
      if (response) {
        setPhoto({uri: response.uri});
      }
      // console.log(response);
    });
  };
  const handleUpdateStore = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        };

        const fileType = /(?:\.([^.]+))?$/.exec(photo)[1];
        const randomFileName = new Date().valueOf().toString() + '.' + fileType;
        const formData = new FormData();
        formData.append('storeName', storeName);
        formData.append('photo', {
          uri: photo,
          name: randomFileName,
          type: 'image/jpeg',
        });

        const response = await axios.patch(`${API_URL}/store`, formData, {
          headers,
        });
        console.log(response.data);
        // AsyncStorage.setItem('store_Id', response.data.id.toString());
        resolve('done');
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };
  const SaveData = () => {
    updateBranchData();
  };
  const handleChangeText = (key, value) => {
    const tempData = {...branchData};
    tempData[key] = value;
    setBranchData(tempData);
  };

  useEffect(() => {
    fetchStoreData();
    fetchBranchData();
  }, [branchId]);
  return (
    <View style={StoreSetStyle.storeSetting}>
      <Text style={StoreSetStyle.storeSetTitle}>Edit Store</Text>

      <View style={StoreSetStyle.storeDetailsContainer}>
        <View style={updStyle.storeFormDetails}>
          {storeData ? (
            <>
              <View style={updStyle.updateLogo}>
                <Image
                  source={{uri: photo}}
                  // source={photo ? {uri: storeData.photo} : storeData.photo}
                  style={updStyle.storeLogo}
                />
                <TouchableOpacity
                  style={updStyle.uploadLogoOpacity}
                  onPress={handleChoosePhoto}>
                  <Feather name="camera" color={'#fff'} size={16} />
                  <Text style={updStyle.uploadLogoTextBtn}>Upload</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <Text>Loading user data...</Text>
          )}
          <View style={updStyle.storeFormInputCont}>
            {branchData ? (
              <>
                <View style={updStyle.FormInput}>
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeInput}
                    placeholder="Store Name"
                    placeholderTextColor="#777777"
                    value={storeData && storeData.storeName}
                    secureTextEntry={false}
                    onChangeText={SetStoreName}
                  />
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeInput}
                    placeholder="Branch"
                    placeholderTextColor="#777777"
                    value={branchData.branchName}
                    onChangeText={value => {
                      handleChangeText('branchName', value);
                    }}
                  />
                </View>
                <View style={updStyle.FormInput}>
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeInput}
                    placeholder="Email"
                    placeholderTextColor="#777777"
                    value={branchData.email}
                    onChangeText={value => {
                      handleChangeText('email', value);
                    }}
                  />
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeInput}
                    placeholder="Contact Number"
                    placeholderTextColor="#777777"
                    value={branchData.contactNumber}
                    keyboardType="numeric"
                    onChangeText={value => {
                      handleChangeText('contactNumber', value);
                    }}
                  />
                </View>
                <TextInput
                  mode="outlined"
                  style={updStyle.storeInputAddress}
                  placeholder="Address"
                  placeholderTextColor="#777777"
                  value={branchData.address}
                  onChangeText={value => {
                    handleChangeText('address', value);
                  }}
                />
              </>
            ) : (
              <Text>Loading store data...</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={updStyle.saveUpdateOpacity}
          onPress={handleUpdateStore}>
          <Text style={StoreSetStyle.buttonsText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
