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
import imagePlaceholder from '../../../images/no-image.png';

export default function UpdateStore({route, navigation}) {
  const {branchId} = route.params;
  const [errors, setErrors] = useState('');

  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState({});

  const fetchStoreAndCurrentBranchData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branchId = await AsyncStorage.getItem('branch_Id');
      const response = await axios.get(
        `${API_URL}/store/${store_Id}/${branchId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setData({
        storeName: response.data.storeName,
        photo: response.data.photo,
        appId: response.data.appId,
        appSecret: response.data.appSecret,

        branchName: response.data.branch.branchName,
        email: response.data.branch.email,
        contactNumber: response.data.branch.contactNumber,
        address: response.data.branch.address,
      });
      setPhoto(response.data.photo);
    } catch (error) {
      console.error('');
    }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        includeBase64: false,
      },
      response => {
        if (response.assets) {
          setPhoto(response.assets[0].uri);
        }
      },
    );
  };

  const handleChangeText = (key, value) => {
    const tempData = {...data};
    tempData[key] = value;
    setData(tempData);
  };

  const handleSave = async () => {
    if (!data.storeName || !data.branchName) {
      setErrors('Store and Branch name are required.');
    } else {
      setErrors('');
      try {
        const token = await AsyncStorage.getItem('access_token');
        const store_Id = await AsyncStorage.getItem('store_Id');
        const branchId = await AsyncStorage.getItem('branch_Id');
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        };

        const fileType = /(?:\.([^.]+))?$/.exec(photo)[1];
        const randomFileName = new Date().valueOf().toString() + '.' + fileType;
        const formData = new FormData();
        formData.append('storeName', data.storeName);
        formData.append('appId', data.appId);
        formData.append('appSecret', data.appSecret);
        formData.append('photo', {
          uri: photo,
          name: randomFileName,
          type: 'image/jpeg',
        });
        formData.append('branch_Id', branchId);
        formData.append('branchName', data.branchName);
        formData.append('email', data.email);
        formData.append('contactNumber', data.contactNumber);
        formData.append('address', data.address);
        const response = await axios.patch(
          `${API_URL}/store/${store_Id}`,
          formData,
          {headers},
        );
        if (response.data._id) {
          navigation.navigate('Store Setting');
        }
      } catch (error) {
        console.error('');
      }
    }
  };

  useEffect(() => {
    fetchStoreAndCurrentBranchData();
  }, [branchId]);
  return (
    <View style={StoreSetStyle.storeSetting}>
      <Text style={StoreSetStyle.storeSetTitle}>Edit Store</Text>

      <View style={StoreSetStyle.storeDetailsContainer}>
        <View style={updStyle.storeFormDetails}>
          {data ? (
            <>
              <View style={updStyle.updateLogo}>
                <Image
                  source={photo ? {uri: photo} : imagePlaceholder}
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
            {data ? (
              <>
                <View style={updStyle.FormInput}>
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeInput}
                    placeholder="Store Name"
                    placeholderTextColor="#777777"
                    value={data && data.storeName}
                    secureTextEntry={false}
                    onChangeText={value => {
                      handleChangeText('storeName', value);
                    }}
                  />
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeInput}
                    placeholder="Branch"
                    placeholderTextColor="#777777"
                    value={data.branchName}
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
                    value={data.email}
                    onChangeText={value => {
                      handleChangeText('email', value);
                    }}
                  />
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeInput}
                    placeholder="Contact Number"
                    placeholderTextColor="#777777"
                    value={data.contactNumber}
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
                  value={data.address}
                  onChangeText={value => {
                    handleChangeText('address', value);
                  }}
                />

                <View style={updStyle.appidSec}>
                  <Text style={updStyle.appidSecText}>App ID:</Text>
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeIdSecret}
                    placeholder="App ID"
                    placeholderTextColor="#777777"
                    value={data.appId}
                    onChangeText={value => {
                      handleChangeText('appId', value);
                    }}
                  />
                </View>
                <View style={updStyle.appidSec}>
                  <Text style={updStyle.appidSecText}>App Secret:</Text>
                  <TextInput
                    mode="outlined"
                    style={updStyle.storeIdSecret}
                    placeholder="App Secret"
                    placeholderTextColor="#777777"
                    value={data.appSecret}
                    onChangeText={value => {
                      handleChangeText('appSecret', value);
                    }}
                  />
                </View>
              </>
            ) : (
              <Text>Loading store data...</Text>
            )}
            {errors !== '' && (
              <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={updStyle.saveUpdateOpacity}
          onPress={handleSave}>
          <Text style={StoreSetStyle.buttonsText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
