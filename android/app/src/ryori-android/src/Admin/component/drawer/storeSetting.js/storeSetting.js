import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StoreSetStyle as styles} from './storeSettingStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import imagePlaceholder from '../../../images/no-image.png';
import SkeletonItem from '../../../../utils/skeletonItem';
import {useFocusEffect} from '@react-navigation/native';

export default function StoreSetting({navigation}) {
  const [data, setData] = useState(null);

  const fetchStoreAndCurrentdata = async () => {
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
        branchName: response.data.branches[0].branchName,
        email: response.data.branches[0].email,
        contactNumber: response.data.branches[0].contactNumber,
        address: response.data.branches[0].address,
      });
      console.log(response.data.branches[0].branchName);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchStoreAndCurrentdata();
    }, []),
  );

  const getStoreBranch = store => {
    navigation.navigate('Update Store', {id: data.id});
    console.log({branchId: data.id});
  };
  return (
    <View style={styles.storeSetting}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.storeSetTitle}>Store Details</Text>
      </View>
      <View style={styles.setStoreContent}>
        <View style={styles.storeInfoContainer}>
          {data ? (
            <>
              <View style={styles.storeLogoCon}>
                <Image
                  style={styles.storeLogo}
                  source={data.photo ? {uri: data.photo} : imagePlaceholder}
                />
                <View style={styles.nameEmail}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.storeNameText}>{data.storeName}</Text>
                  </View>
                </View>
              </View>

              <View style={{width: '60%'}}>
                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Branch</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>{data.branchName}</Text>
                  </View>
                </View>
                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Email</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}> {data.email}</Text>
                  </View>
                </View>

                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Contact No.</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>{data.contactNumber}</Text>
                  </View>
                </View>

                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>Address</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>{data.address}</Text>
                  </View>
                </View>
                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>App ID</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>{data.appId}</Text>
                  </View>
                </View>
                <View style={styles.detailColored}>
                  <View style={styles.infoCol}>
                    <Text style={styles.infoTetx}>App Secret</Text>
                  </View>
                  <View style={styles.infoCol2}>
                    <Text style={styles.infoTetx}>{data.appSecret}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonsOpacity}
                  onPress={getStoreBranch}>
                  <Text style={styles.buttonsText}>Edit this Store</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View>
              <SkeletonItem />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
