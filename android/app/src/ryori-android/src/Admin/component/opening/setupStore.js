import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {setUpStoreStyles as setStore} from './opening-style';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../utils/constants'
import defaultPhoto from '../../../Admin/images/no-image.png';

export default function SetupStore({navigation, route}) {
  const {type} = route.params;
  const title = type === 'branch' ? 'New Branch' : 'New Store';
  const [photo, setPhoto] = useState(route.params.store?.photo || null)

  const [storeName, setStoreName] = useState(route.params.store?.storeName || '');
  const [store_Id, setStore_Id] = useState('');
  const [email, setEmail] = useState('');
  const [branchName, setBranchName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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
  const handleAddStoreWithBranch = async () => {
    const token = await AsyncStorage.getItem('access_token');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    const fileType = /(?:\.([^.]+))?$/.exec(photo)[1]
    const randomFileName = (new Date().valueOf()).toString() + "." +fileType
    const formData = new FormData();
    formData.append('storeName', storeName);
    formData.append('photo', {
      uri: photo,
      name: randomFileName,
      type: 'image/jpeg',
    });
    formData.append('branchName', branchName);
    formData.append('email', email);
    formData.append('contactNumber', contactNumber);
    formData.append('address', address);
    formData.append('store_Id', store_Id);

    const response = await axios.post(
      `${API_URL}/store`,
      formData,
      {headers},
    );
    AsyncStorage.setItem('store_Id', response.data.id.toString());
  };

  const handleAddBranch = async () => {
    const token = await AsyncStorage.getItem('access_token');
    const store_Id = await AsyncStorage.getItem('store_Id');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    const response = await axios.post(
      `${API_URL}/branch`,
      {
        branchName,
        email,
        contactNumber,
        address,
        store_Id,
      },
      {headers},
    );
  };

  const handleSave = async () => {    
    if(type === 'branch') {
      await handleAddBranch();
    }
    else {
      await handleAddStoreWithBranch();
    }
    navigation.navigate('Drawer');
  };

  return (
    <View style={setStore.setUpStore}>
      <View style={setStore.setUpTextCon}>
        <Text style={setStore.setUpText}>{title}</Text>
      </View>
      <View style={setStore.setUpContent}>
        <View style={setStore.uploadLogoCol}>
          <Text style={setStore.storeLogoText}>Store Logo</Text>
          <View style={setStore.logo}>
            <Image
              source={ photo ? {uri: photo} : defaultPhoto}
              style={{width: '100%', height: 150}}
            />
          </View>
          {type === 'store' && (
            <View style={setStore.uploadLogoBtn}>
              <TouchableOpacity
                style={setStore.uploadLogoOpacity}
                onPress={handleChoosePhoto}
                // onPress={() => navigation.navigate('BottomNavs')}
                >
                <Text style={setStore.uploadLogoTextBtn}>Upload</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={setStore.uploadLogoC}>
          <View style={setStore.setupRow}>
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Store Name"
              placeholderTextColor="#777777"
              value={storeName}
              onChangeText={setStoreName}
              editable={type==='store'}
            />
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Email"
              placeholderTextColor="#777777"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={setStore.setupRow}>
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Branch Name"
              placeholderTextColor="#777777"
              value={branchName}
              onChangeText={setBranchName}
            />
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Address"
              placeholderTextColor="#777777"
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={setStore.setupRow}>
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Contact Number"
              placeholderTextColor="#777777"
              value={contactNumber}
              onChangeText={setContactNumber}
            />
            <View style={setStore.saveStore}>
              <TouchableOpacity
                style={setStore.saveStoreOpacity}
                onPress={handleSave}
                // onPress={() => navigation.navigate('Drawer')}
              >
                <Text style={setStore.saveStoreTextBtn}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
