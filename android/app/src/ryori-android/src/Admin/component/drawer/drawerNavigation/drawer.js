/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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
function Logout() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>DASHBOARD HERE ....</Text>
    </View>
  );
}
const RyoriDrawer = props => {
  const navigation = useNavigation();
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
          <View style={drawerStyle.profileAdmin}>
            <Image source={userAvatar} style={drawerStyle.profilepic} />
            <View style={drawerStyle.welcomeAdmin}>
              <Text style={drawerStyle.welcomeAdminText}>Welcome!</Text>
              <Text style={drawerStyle.adminName}>{'John Doe'}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Logout"
          onPress={() => props.navigation.navigate('Login')}
        /> */}
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
        drawerType: 'permanent', // permanent/slide/front/back
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
      {/*<Drawer.Screen
        name="Setting"
        // component={Setting}
        options={{
          drawerIcon: () => (
            <Image
              source={SettingIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Customers"
        // component={Customers}
        options={{
          drawerIcon: () => (
            <Image
              source={CustomersIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Food"
        // component={Food}
        options={{
          drawerIcon: () => (
            <Image
              source={KitchenBridgeIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Create New Menu"
        // component={AddMenu}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <>
              <AntDesign
                name="pluscircle"
                size={27}
                color={'#f8bd07'}
                marginTop={15.5}
                marginLeft={6}
              />
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 10,
                  marginLeft: 7,
                  color: '#ffff',
                  fontWeight: 600,
                }}>
                ADD{'\n'}MENU
              </Text>
            </>
          ),
          drawerItemStyle: {
            borderRadius: 10,
            width: 134,
            marginLeft: 10,
            height: 58,
            borderWidth: 0.3,
            backgroundColor: '#34a853',
          },
          drawerLabelStyle: {
            fontSize: 7,
            marginTop: -20,
            marginLeft: -90,
            opacity: 0.6,
          },
        }}
      />
      <Drawer.Screen
        name="Dining Setup"
        // component={DinigSetup}
        options={{
          drawerIcon: () => (
            <Image
              source={DiningSetupIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Methods"
        // component={Methods}
        options={{
          drawerIcon: () => (
            <Image
              source={MethodIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      */}
      {/* <Drawer.Screen name="Logout" component={Logout} /> */}
    </Drawer.Navigator>
  );
}
