import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {setUpStoreStyles as setStore} from './opening-style';

export default function SetupStore({navigation}) {
  const [storename, setStorename] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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
              value={storename}
              secureTextEntry={false}
              onChangeText={setStorename}
            />
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Email"
              placeholderTextColor="#777777"
              value={email}
              secureTextEntry={false}
              onChangeText={setEmail}
            />
          </View>
          <View style={setStore.setupRow}>
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Branch"
              placeholderTextColor="#777777"
              value={branch}
              secureTextEntry={false}
              onChangeText={setBranch}
            />
            <TextInput
              mode="outlined"
              style={setStore.setupInput}
              placeholder="Address"
              placeholderTextColor="#777777"
              value={address}
              secureTextEntry={false}
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
              secureTextEntry={false}
              onChangeText={setContactNumber}
            />
            <View style={setStore.saveStore}>
              <TouchableOpacity
                style={setStore.saveStoreOpacity}
                onPress={() => navigation.navigate('Drawer')}
                // onPress={() => navigation.navigate('Menu')}
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
