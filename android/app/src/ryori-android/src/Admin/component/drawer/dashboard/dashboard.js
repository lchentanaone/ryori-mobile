import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DashboardStyle } from './dashboard-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../../../../utils/constants';
import PieChart from 'react-native-pie-chart';
import SkeletonItem from '../../../../utils/skeletonItem'

export default function Dashboard() {
  const [store, setStore] = useState([]);
  const [branch, setBranch] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const [consumption, setConsumption] = useState(0);
  const [newOrders, setNewOrders] = useState(0);
  const [preparing, setPreparing] = useState(0);
  const [served, setServed] = useState(0);
  const [doneOrder, setDoneOrder] = useState(0);
  const [cancelled, setCancelled] = useState(0);
  const [waitingPayment, setWaitingPayment] = useState(0);

  const fetchStore = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const response = await axios.get(`${API_URL}/store/${store_Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStore(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchBranch = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const response = await axios.get(`${API_URL}/branch/${branch_Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBranch(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDashboard = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const response = await axios.get(
        `${API_URL}/dashboard/?bid=${branch_Id}&sid=${store_Id}`,
        {
          branch_Id,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setTimeout(() => {
        setDashboard(response.data);

      }, 2000)
      setConsumption(response.data.totalCustomers);
      console.log(response.data.orderSummary);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    dashboard.orderSummary && changeFilter('today');
  }, [dashboard]);

  useEffect(() => {
    fetchStore();
    fetchBranch();
    fetchDashboard();
  }, []);

  // Pie Chart
  const widthAndHeight = 150;
  const limit = 300 - consumption;
  const series = [limit, consumption];
  const sliceColor = ['#DB1B1B', '#12BF38'];

  const changeFilter = type => {
    setNewOrders(dashboard.orderSummary[type].new);
    setPreparing(dashboard.orderSummary[type].preparing);
    setServed(dashboard.orderSummary[type].served);
    setDoneOrder(dashboard.orderSummary[type].done);
    setCancelled(dashboard.orderSummary[type].cancelled);
    setWaitingPayment(dashboard.orderSummary[type].awaiting_payment);
  };

  return (
    <View style={DashboardStyle.dashboard}>
      {
        dashboard.length === 0 ?
          (<View><SkeletonItem /></View>) :
          <View style={DashboardStyle.dashboardContent}>
            <View style={DashboardStyle.dashBTitleSearchB}>
              <Text style={DashboardStyle.storename}>{store.storeName}</Text>
              <Text style={DashboardStyle.storebranch}>{branch.branchName}</Text>
            </View>
            <View style={DashboardStyle.overAll}>
              <View style={DashboardStyle.overAllContent}>
                <Text style={DashboardStyle.overAllText}>Total Menus</Text>
                <Text style={DashboardStyle.overAllValue}>
                  {dashboard.totalMenus}
                </Text>
              </View>
              <View style={DashboardStyle.overAllContent}>
                <Text style={DashboardStyle.overAllText}>Total Orders</Text>
                <Text style={DashboardStyle.overAllValue}>
                  {dashboard.totalOrders}
                </Text>
              </View>
              <View style={DashboardStyle.overAllContent}>
                <Text style={DashboardStyle.overAllText}>Total Customers</Text>
                <Text style={DashboardStyle.overAllValue}>
                  {dashboard.totalCustomers}
                </Text>
              </View>
              <View style={DashboardStyle.overAllContent}>
                <Text style={DashboardStyle.overAllText}>Total Revenues</Text>
                <Text style={DashboardStyle.overAllValue}>
                  {dashboard.totalRevenues}
                </Text>
              </View>
            </View>
            <View style={DashboardStyle.summaryRevenue}>
              <View style={DashboardStyle.orderSummaryReven}>
                <View style={DashboardStyle.titleFil}>
                  <Text style={DashboardStyle.title}>Order Summary</Text>
                  <View style={DashboardStyle.filterDate}>
                    <TouchableOpacity
                      style={DashboardStyle.textBtnOpacity}
                      onPress={() => changeFilter('monthly')}>
                      <Text style={DashboardStyle.filterText}>Monthly</Text>
                    </TouchableOpacity>
                    <Text style={DashboardStyle.border}>|</Text>
                    <TouchableOpacity
                      style={DashboardStyle.textBtnOpacity}
                      onPress={() => changeFilter('weekly')}>
                      <Text style={DashboardStyle.filterText}>Weekly </Text>
                    </TouchableOpacity>
                    <Text style={DashboardStyle.border}>|</Text>
                    <TouchableOpacity
                      style={DashboardStyle.textBtnOpacity}
                      onPress={() => changeFilter('today')}>
                      <Text style={DashboardStyle.filterText}>Today</Text>
                    </TouchableOpacity>
                  </View>
                  {/* </View> */}
                </View>
                <View style={DashboardStyle.orderDetails}>
                  <View style={DashboardStyle.newOrder}>
                    <Text style={DashboardStyle.orderTotal}>{newOrders}</Text>
                    <Text style={DashboardStyle.orderText}>new</Text>
                  </View>
                  <View style={DashboardStyle.preparing}>
                    <Text style={DashboardStyle.orderTotal}>{preparing}</Text>
                    <Text style={DashboardStyle.orderText}>Preparing</Text>
                  </View>
                  <View style={DashboardStyle.served}>
                    <Text style={DashboardStyle.orderTotal}>{served}</Text>
                    <Text style={DashboardStyle.orderText}>Served</Text>
                  </View>
                </View>
                <View style={DashboardStyle.orderDetails}>
                  <View style={DashboardStyle.waitingPayment}>
                    <Text style={DashboardStyle.orderTotal}>
                      {waitingPayment}
                    </Text>
                    <Text style={DashboardStyle.waitingText}>
                      Waiting for Payment
                    </Text>
                  </View>
                  <View style={DashboardStyle.served}>
                    <Text style={DashboardStyle.orderTotal}>{doneOrder}</Text>
                    <Text style={DashboardStyle.orderText}>Done</Text>
                  </View>
                  <View style={DashboardStyle.cancelled}>
                    <Text style={DashboardStyle.orderTotal}>{cancelled}</Text>
                    <Text style={DashboardStyle.orderText}>Cancelled</Text>
                  </View>
                </View>
              </View>
              <View style={DashboardStyle.orderSummaryReven}>
                <View style={DashboardStyle.titleFil}>
                  <Text style={DashboardStyle.title}>Consumption</Text>
                  <View style={DashboardStyle.filterDate}>
                    <TouchableOpacity
                      style={DashboardStyle.textBtnOpacity}
                      onPress={() => changeFilter('monthly')}>
                      <Text style={DashboardStyle.filterText}>Monthly</Text>
                    </TouchableOpacity>
                    <Text style={DashboardStyle.border}>|</Text>
                    <TouchableOpacity
                      style={DashboardStyle.textBtnOpacity}
                      onPress={() => changeFilter('weekly')}>
                      <Text style={DashboardStyle.filterText}>Weekly </Text>
                    </TouchableOpacity>
                    <Text style={DashboardStyle.border}>|</Text>
                    <TouchableOpacity
                      style={DashboardStyle.textBtnOpacity}
                      onPress={() => changeFilter('daily')}>
                      <Text style={DashboardStyle.filterText}>Today</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={DashboardStyle.chartContainer}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.7}
                  />
                  <Text style={DashboardStyle.chartText}>
                    {dashboard.totalCustomers} of 300{'\n'} Transactions
                  </Text>
                </View>
              </View>
            </View>
          </View>
      }
    </View>
  );
}
