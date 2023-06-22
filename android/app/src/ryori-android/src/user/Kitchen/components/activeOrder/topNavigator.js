import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {OrderStyle as styles} from './orderStyle';
import redRyori from '../../../images/redRyori.png';
import DoneOrder from './orderTopTab/doneOrderTab';
import NewOrderTab from './orderTopTab/newOrderTab';
import PreparingOrderTab from './orderTopTab/preparingOrderTab';
// import PreparingOrder from '../preparing/prepareOrder';

const Tab = createMaterialTopTabNavigator();

export default function OrderTopTab({navigation}) {
  function NewOrder() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
          width: '100%',
        }}>
        <NewOrderTab />
      </View>
    );
  }
  function PreparingOrder() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <PreparingOrderTab />
      </View>
    );
  }
  function Done() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <DoneOrder />
      </View>
    );
  }

  return (
    <>
      <View style={styles.activeOrder}>
        <View style={styles.ryoriIcon}>
          <Image source={redRyori} style={styles.ryori} />
          <Text style={styles.ryoriIconText}>Orders</Text>
        </View>
        <Tab.Navigator
          style={{top: 52}}
          screenOptions={{
            tabBarActiveTintColor: '#DB1B1B',
            tabBarInactiveTintColor: '#000',
          }}>
          <Tab.Screen name="New" component={NewOrder} />
          <Tab.Screen name="Preparing" component={PreparingOrder} />
          <Tab.Screen name="Done" component={Done} />
        </Tab.Navigator>
      </View>
    </>
  );
}
