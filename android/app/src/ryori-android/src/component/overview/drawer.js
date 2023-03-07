/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DashBIcon from '../../images/logo/Dashboard.png';
import orderIcon from '../../images/logo/orders.png';
import MenuIcon from '../../images/logo/Menu.png';
import SettingIcon from '../../images/logo/setting.png';
import CustomersIcon from '../../images/logo/customers.png';
import KitchenBridgeIcon from '../../images/logo/Analytics.png';
import DiningSetupIcon from '../../images/logo/DiningSet.png';
import MethodIcon from '../../images/logo/Method.png';
import LogoutIcon from '../../images/logo/LogOut.png';
import Dashboard from './dashboard/Dashboard';
import Orders from './orders/orders';
import Menus from '../overview/menu/Menu';
import Setting from './setting/setting';
import Customers from './customer/customer';
import KitchenBridge from './kitchen-bridge/kitchenBridge';
import AddMenu from './add-menu/addMenu';
import DinigSetup from './dining-setup/diningSetup';
import Methods from './methods/Methods';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

function Logout() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Logout</Text>
    </View>
  );
}
const RyoriDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Text
          style={{
            backgroundColor: '#0000',
            height: 20,
            color: '#FFFF',
            marginLeft: 15,
            fontSize: 18,
            fontWeight: 800,
          }}>
          RYORI
        </Text>
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
export default function Drawers({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <RyoriDrawer {...props} />}
      screenOptions={{
        drawerType: 'front', // permanent/slide/front
        drawerActiveTintColor: '#FFFF',
        drawerInactiveTintColor: '#FFFF',
        drawerActiveBackgroundColor: '#876504',
        drawerInactiveBackgroundColor: '#1a1819',
        headerTitleContainerStyle: {right: 72},
        swipeEdgeWidth: 500,
        headerTitle: '',
        headerTintColor: '#48E891',
        drawerLabelStyle: {
          fontSize: 8.5,
          marginTop: -9,
          marginLeft: -25,
        },
        headerStyle: {shadowColor: 0, backgroundColor: '#000', height: 25},
        drawerItemStyle: {
          borderRadius: 10,
          width: 134,
          marginLeft: 10,
          height: 22,
          borderColor: '#FFFF',
          borderWidth: 0.3,
          marginTop: 4.5,
        },
        drawerStyle: {
          backgroundColor: '#282828',
          width: 150,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image
              source={DashBIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image
              source={orderIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Menus"
        component={Menus}
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
        component={Setting}
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
        component={Customers}
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
        name="Kitchen Bridge"
        component={KitchenBridge}
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
        component={AddMenu}
        options={{
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
        component={DinigSetup}
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
        component={Methods}
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
        component={Logout}
        options={{
          drawerIcon: () => (
            <Image
              source={LogoutIcon}
              style={{width: 20, height: 20, marginTop: -8}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
