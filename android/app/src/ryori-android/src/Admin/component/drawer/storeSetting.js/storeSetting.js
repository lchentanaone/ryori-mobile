import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {StoreSetStyle} from './storeSettingStyle';
import tempoLogo from '../../../images/tempoLogo.png';

export default function StoreSetting() {
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
                <Text style={StoreSetStyle.storeInfo}>Ryori</Text>
                <Text style={StoreSetStyle.storeInfo}>Mintal Branch</Text>
                <Text style={StoreSetStyle.storeInfo}>
                  ryori.artificer@gmail.com
                </Text>
                <Text style={StoreSetStyle.storeInfo}>+639012345678</Text>
                <Text style={StoreSetStyle.storeInfo}>Mintal, Davao City</Text>
              </View>
            </View>
            <View style={StoreSetStyle.storePhoto}>
              <View style={StoreSetStyle.storeLogo}>
                <Image source={tempoLogo} />
              </View>
            </View>
          </View>
          <View style={StoreSetStyle.buttons}>
            {/* <TouchableOpacity style={StoreSetStyle.buttonsOpacity}>
              <Text style={StoreSetStyle.buttonsText}> Add new Store</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={StoreSetStyle.buttonsOpacity}>
              <Text style={StoreSetStyle.buttonsText}>Edit this store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
