import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {StoreSetStyle, updateStoreStyle as updStyle} from './storeSettingStyle';
import tempoLogo from '../../../images/tempoLogo.png';

export default function UpdateStore({navigation}) {
  const [storeName, SetStoreName] = useState('');
  const [storeBranch, SetStoreBranch] = useState('');
  const [email, SetEemail] = useState('');
  const [contactNumber, SetContactNumber] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={StoreSetStyle.storeSetting}>
      <View style={StoreSetStyle.storeSetContent}>
        <Text style={StoreSetStyle.storeSetTitle}>Edit Store</Text>
        <View style={StoreSetStyle.storeDetailsContainer}>
          <View style={updStyle.storeFormDetails}>
            <View style={updStyle.storeFormInputCont}>
              <View style={updStyle.FormInput}>
                <TextInput
                  mode="outlined"
                  style={updStyle.storeInput}
                  placeholder="Store Name"
                  placeholderTextColor="#777777"
                  value={storeName}
                  secureTextEntry={false}
                  onChangeText={SetStoreName}
                />
                <TextInput
                  mode="outlined"
                  style={updStyle.storeInput}
                  placeholder="Branch"
                  placeholderTextColor="#777777"
                  value={storeBranch}
                  secureTextEntry={false}
                  onChangeText={SetStoreBranch}
                />
              </View>
              <View style={updStyle.FormInput}>
                <TextInput
                  mode="outlined"
                  style={updStyle.storeInput}
                  placeholder="Email"
                  placeholderTextColor="#777777"
                  value={email}
                  secureTextEntry={false}
                  onChangeText={SetEemail}
                />
                <TextInput
                  mode="outlined"
                  style={updStyle.storeInput}
                  placeholder="Contact Number"
                  placeholderTextColor="#777777"
                  value={contactNumber}
                  secureTextEntry={false}
                  onChangeText={SetContactNumber}
                />
              </View>
              <TextInput
                mode="outlined"
                style={updStyle.storeInputAddress}
                placeholder="Address"
                placeholderTextColor="#777777"
                value={address}
                secureTextEntry={false}
                onChangeText={setAddress}
              />
            </View>
            <View style={updStyle.updateLogo}>
              <Image source={tempoLogo} style={updStyle.storeLogo} />
              <TouchableOpacity style={updStyle.updatebtnOpacity}>
                <Text style={StoreSetStyle.buttonsText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={updStyle.saveUpdateOpacity}
            onPress={() => navigation.navigate('Store Setting')}>
            <Text style={StoreSetStyle.buttonsText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
