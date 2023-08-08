import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {drawerStyle} from './drawerStyle';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {API_URL} from '../../../../utils/constants';

// Pages
import ryoriRed from './../../../images/ryori-red.png';
import Menu from '../menu/menu';
import Category from '../category/category';
import TransactionTab from '../Transactions/transactionNav';
import ReportOfFood from '../Report/reportOfFood';
import ReportOfTransaction from '../Report/reportOfTransaction';
import StoreSetting from '../storeSetting.js/storeSetting';
import Inventory from '../inventory/inventory';
import Dashboard from '../dashboard/dashboard';
import InventoryCategory from '../inventory/inventoryCategory';
import Employees from '../employee/employee';
import userAvatar from '../../../images/male3.png';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RyoriDrawer = props => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  const handleLogout = async () => {
    <MaterialCommunityIcons name="home-switch-outline" size={25} />;
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login-admin');
    } catch (error) {
      console.log(error);
    }
  };
  const Branches = async () => {
    try {
      await AsyncStorage.removeItem('branch_Id');
      navigation.navigate('Select Branch');
    } catch (error) {
      console.log(error);
    }
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
        <TouchableOpacity
          underlayColor="red"
          style={drawerStyle.brachesBtn}
          onPress={Branches}>
          <MaterialCommunityIcons
            name="home-switch-outline"
            size={25}
            color={'#000'}
          />
          <Text style={drawerStyle.brachesText}>Braches</Text>
        </TouchableOpacity>
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
        swipeEdgeWidth: 200,
        headerTintColor: '#48E891',
        drawerLabelStyle: {
          fontFamily: 'Quicksand-Bold',
          marginLeft: -20,
        },
        headerStyle: {shadowColor: 0, backgroundColor: '#fff', height: 25},
        drawerStyle: {
          width: '30%',
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
            <MaterialIcons
              name="restaurant-menu"
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
        name="Report of Transaction"
        component={ReportOfTransaction}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Report of Food"
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
        name="Inventory Category"
        component={InventoryCategory}
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
            <FontAwesome5
              name="users"
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
