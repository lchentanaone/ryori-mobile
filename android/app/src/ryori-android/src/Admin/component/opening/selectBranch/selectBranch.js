import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {BranchStyle as styles} from './selectBranch.Style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';

export default function Branches({navigation}) {
  const [storeData, setStoreData] = useState(null);
  const [branchData, setBranchData] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState(null);

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
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/branch/?store_Id=${store_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          store_Id,
        },
        {headers},
      );
      setBranchData(response.data);
      // if (response.data.length === 1) {
      //   navigation.navigate('Drawer');
      // }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login-admin');
    } catch (error) {
      console.log(error);
    }
  };
  const init = async () => {
    await fetchStoreData();
    fetchBranchData();
  };
  useEffect(() => {
    init();
  }, []);

  const handleBranchSelection = async branchId => {
    try {
      await AsyncStorage.setItem('branch_Id', branchId.toString());

      navigation.navigate('Drawer');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.branchesContainer}>
      <View style={styles.branches}>
        {storeData ? (
          <>
            <Text style={styles.storeName}>{storeData.storeName}</Text>
          </>
        ) : (
          <Text>Loading Store data...</Text>
        )}
        <Text style={styles.selectText}>Select which Branch</Text>
        <View style={styles.container}>
          <ScrollView style={{height: 120}}>
            {branchData.map((branch, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={styles.branchBtn}
                  onPress={() => handleBranchSelection(branch._id)}>
                  <Text style={styles.branchText}>{branch.branchName}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.addBranchBtn}
            onPress={() =>
              navigation.navigate('New-Store-Branch', {
                type: 'branch',
                store: storeData,
              })
            }>
            <Entypo name="plus" style={styles.addIcon} />
            <Text style={styles.addBranchText}>Add new Branch</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{alignItems: 'center', marginTop: 30}}
        onPress={handleLogout}>
        <Text
          style={{
            color: '#606060',
            fontSize: 15,
            fontFamily: 'Quicksand-SemiBold',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
