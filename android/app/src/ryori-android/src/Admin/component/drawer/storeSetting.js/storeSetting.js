import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StoreSetStyle as styles} from './storeSettingStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import imagePlaceholder from '../../../images/no-image.png'

export default function StoreSetting({navigation}) {
  const [storeData, setStoreData] = useState(null);
  const [branchData, setBranchData] = useState(null);

  const fetchStoreData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/store/${store_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },

        {headers},
      );
      setStoreData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchBranchData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const getBranch_Id = await AsyncStorage.getItem('branch_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/branch/${getBranch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          store_Id,
        },
        {headers},
      );
      setBranchData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const init = async () => {
    await fetchStoreData();
    fetchBranchData();
  };
  useEffect(() => {
    init();
  }, []);

  const getStoreBranch = store => {
    navigation.navigate('Update Store', {id: branchData.id});
    console.log({branchId: branchData.id});
  };
  return (
    <View style={styles.storeSetting}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.storeSetTitle}>Store Details</Text>
      </View>
      <View style={styles.setStoreContent}>
        <View style={styles.storeInfoContainer}>
          <View style={styles.storeLogoCon}>
            {storeData ? (
              <>              
                <Image
                  style={styles.storeLogo}
                  source={storeData.photo ? {uri: storeData.photo} : imagePlaceholder}
                />
                <View style={styles.nameEmail}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.storeNameText}>
                      {storeData.storeName}
                    </Text>
                  </View>
                </View>
              </>
            ) : (
              <Text>Loading user data...</Text>
            )}
          </View>

          <View style={{width: '60%'}}>
            {branchData ? (
              <>
                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Branch</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>{branchData.branchName}</Text>
                  </View>
                </View>
                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Email</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}> {branchData.email}</Text>
                  </View>
                </View>

                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Contact No.</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>
                      {branchData.contactNumber}
                    </Text>
                  </View>
                </View>

                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Address</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>{'Davao City'}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonsOpacity}
                  onPress={getStoreBranch}>
                  <Text style={styles.buttonsText}>Edit this Store</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text>Loading user data...</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
