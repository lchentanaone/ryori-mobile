import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ryoriRed from './../../../images/ryori-red.png';
import Menu from '../menu/menu';
import Category from '../category/category';
import TransactionTab from '../Transactions/transactionNav';
import ReportOfFood from '../Report/reportOfFood';
import ReportOfTransaction from '../Report/reportOfTransaction';
import StoreSetting from '../storeSetting.js/storeSetting';
import Inventory from '../inventory/inventory';
import Dashboard from '../dashboard/dashboard';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {drawerStyle} from './drawerStyle';
import {useNavigation} from '@react-navigation/native';
import userAvatar from '../../../images/male3.png';
import Employees from '../employee/employee';
import axios from 'axios';

const RyoriDrawer = props => {
  const API_URL = 'http://10.0.2.2:3000';
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('access_token');
    navigation.navigate('Login-admin');
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        const response = await axios.get(`${API_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Image
          source={ryoriRed}
          style={{width: 100, height: 30, marginTop: 2, marginLeft: 20}}
        />
        <TouchableOpacity
          style={drawerStyle.drawerProfile}
          onPress={() => navigation.navigate('Profile')}>
          {userData ? (
            <>
              <View style={drawerStyle.profileAdmin}>
                <Image source={userAvatar} style={drawerStyle.profilepic} />
                <View style={drawerStyle.welcomeAdmin}>
                  <Text style={drawerStyle.welcomeAdminText}>Welcome!</Text>
                  <Text style={drawerStyle.adminName}>
                    {userData.firstName} {userData.lastName}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <Text>Loading ...</Text>
          )}
        </TouchableOpacity>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={handleLogout} />
      </DrawerContentScrollView>
    </View>
  );
};

const Drawer = createDrawerNavigator();
export default function DrawersNav({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <RyoriDrawer {...props} />}
      screenOptions={{
        drawerType: 'slide', // permanent/slide/front/back
        drawerActiveTintColor: '#DB1B1B',
        drawerInactiveTintColor: '#000',
        drawerActiveBackgroundColor: '#fff',
        drawerInactiveBackgroundColor: '#fff',
        headerTitleContainerStyle: {right: 72},
        swipeEdgeWidth: 500,
        headerTintColor: '#48E891',
        drawerLabelStyle: {
          fontFamily: 'Quicksand-Bold',
          marginLeft: -20,
        },
        headerStyle: {shadowColor: 0, backgroundColor: '#fff', height: 25},
        drawerStyle: {
          width: '25%',
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        style={{top: -50}}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <>
              <FontAwesome
                name="bar-chart-o"
                color={focused ? '#DB1B1B' : '#000'}
                size={15}
              />
            </>
          ),
        }}
      />
      <Drawer.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Feather
              name="menu"
              color={focused ? '#DB1B1B' : '#000'}
              size={15}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Menu Category"
        component={Category}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Feather
              name="menu"
              color={focused ? '#DB1B1B' : '#000'}
              size={15}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionTab}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Foundation
              name="clipboard-notes"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ReportOfTransaction"
        component={ReportOfTransaction}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="newspaper-outline"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ReportOfFood"
        component={ReportOfFood}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="newspaper-outline"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Inventory"
        component={Inventory}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <FontAwesome5
              name="box-open"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Store Setting"
        component={StoreSetting}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <AntDesign
              name="setting"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Employees"
        component={Employees}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <AntDesign
              name="setting"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      {/* <Drawer.Screen name="Logout" component={Logout} /> */}
    </Drawer.Navigator>
  );
}
