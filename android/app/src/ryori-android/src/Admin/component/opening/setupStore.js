import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {setUpStoreStyles as setStore} from './opening-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants'
export default function SetupStore({navigation}) {

  const [storeName, setStoreName] = useState('');
  const [store_Id, setStore_Id] = useState('');
  const [email, setEmail] = useState('');
  const [branchName, setBranchName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleAddStore = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        `${API_URL}/store`,
        {storeName, store_Id},
        {headers},
      );
      console.log(response.data);
      AsyncStorage.setItem('store_Id', response.data.id.toString());
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddBranch = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
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

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    await handleAddStore();
    handleAddBranch();
    navigation.navigate('Drawer');
  };

  return (
    <View style={setStore.setUpStore}>
      <View style={setStore.setUpTextCon}>
        <Text style={setStore.setUpText}>Setup your Store</Text>
      </View>
      <View style={setStore.setUpContent}>
        <View style={setStore.uploadLogoCol}>
          <Text style={setStore.storeLogoText}>Store Logo</Text>
          <View style={setStore.logo}>
            <Text> This Area for Logo</Text>
          </View>
          <View style={setStore.uploadLogoBtn}>
            <TouchableOpacity
              style={setStore.uploadLogoOpacity}
              // onPress={() => navigation.navigate('BottomNavs')}
            >
              <Text style={setStore.uploadLogoTextBtn}>Upload</Text>
            </TouchableOpacity>
          </View>
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
