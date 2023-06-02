/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import ryoriRed from './../../../images/ryori-red.png';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {color} from 'react-native-reanimated';
import Menu from '../menu/menu';
import TopTabNavs from '../../../navigation/topTabNavigation';

function Dashboard() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>DASHBOARD HERE ....</Text>
    </View>
  );
}
const RyoriDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Image
          source={ryoriRed}
          style={{width: 100, height: 30, marginTop: 2, marginLeft: 20}}
        />
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
        drawerType: 'front', // permanent/slide/front
        drawerActiveTintColor: '#DB1B1B',
        drawerInactiveTintColor: '#000',
        drawerActiveBackgroundColor: '#fff',
        drawerInactiveBackgroundColor: '#fff',
        headerTitleContainerStyle: {right: 72},
        swipeEdgeWidth: 500,
        headerTitle: '',
        headerTintColor: '#48E891',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -20,
        },
        headerStyle: {shadowColor: 0, backgroundColor: '#fff', height: 25},

        drawerStyle: {
          backgroundColor: '#fff',
          width: '25%',
          // paddingHorizontal: 15,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          height: 20,
          drawerIcon: ({focused, size}) => (
            <Entypo
              name="home"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Menu"
        component={Menu}
        options={{
          drawerIcon: ({focused, size}) => (
            <Feather
              name="menu"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="TopTabNavs"
        component={TopTabNavs}
        options={{
          drawerIcon: ({focused, size}) => (
            <Feather
              name="menu"
              color={focused ? '#DB1B1B' : '#000'}
              size={18}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Menus"
        // component={Menus}
        options={{
          drawerIcon: () => (
            <Image
              source={MenuIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      <Drawer.Screen
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
      <Drawer.Screen
        name="Logout"
        // component={Logout}
        options={{
          drawerIcon: () => (
            <Image
              source={LogoutIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}
