import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {DashboardStyle} from './dashboard-style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Dashboard() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={DashboardStyle.dashboard}>
      <View style={DashboardStyle.dashboardContent}>
        <View style={DashboardStyle.dashBTitleSearchB}>
          <Text style={DashboardStyle.dashboardTitle}>Dashboard</Text>
          <View style={DashboardStyle.searchbar}>
            <FontAwesome name="search" style={DashboardStyle.SearchIcon} />
            <TextInput
              style={DashboardStyle.searchInput}
              placeholder="Search here"
              placeholderTextColor="#777777"
              numberOfLines={1}
            />
          </View>
        </View>
        <View style={DashboardStyle.overAll}>
          <View style={DashboardStyle.overAllContent}>
            <Text style={DashboardStyle.overAllText}>Total Menus</Text>
            <Text style={DashboardStyle.overAllValue}>16</Text>
          </View>
          <View style={DashboardStyle.overAllContent}>
            <Text style={DashboardStyle.overAllText}>Total Orders</Text>
            <Text style={DashboardStyle.overAllValue}>1,875</Text>
          </View>
          <View style={DashboardStyle.overAllContent}>
            <Text style={DashboardStyle.overAllText}>Total Customers</Text>
            <Text style={DashboardStyle.overAllValue}>987,997</Text>
          </View>
          <View style={DashboardStyle.overAllContent}>
            <Text style={DashboardStyle.overAllText}>Total Revenues</Text>
            <Text style={DashboardStyle.overAllValue}>115,687.82</Text>
          </View>
        </View>
        <View style={DashboardStyle.summaryRevenue}>
          <View style={DashboardStyle.orderSummaryReven}>
            <View style={DashboardStyle.titleDate}>
              <Text style={DashboardStyle.title}>Order Summary</Text>
              {/* <View style={DashboardStyle.filterDate}> */}
              <View style={DashboardStyle.filterDate}>
                <TouchableOpacity
                  style={DashboardStyle.textBtnOpacity}
                  onPress={handleFocus}>
                  <Text style={DashboardStyle.filterText}>Monthly</Text>
                </TouchableOpacity>
                <Text style={DashboardStyle.border}>|</Text>
                <TouchableOpacity style={DashboardStyle.textBtnOpacity}>
                  <Text style={DashboardStyle.filterText}>Weekly </Text>
                </TouchableOpacity>
                <Text style={DashboardStyle.border}>|</Text>
                <TouchableOpacity style={DashboardStyle.textBtnOpacity}>
                  <Text style={DashboardStyle.filterText}>Today</Text>
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </View>
            <View style={DashboardStyle.newOrder}>
              <Text style={DashboardStyle.newOrderText}>5 New Order</Text>
              <TouchableOpacity style={DashboardStyle.textBtnOpacity}>
                <Text style={DashboardStyle.manageText}>Manage</Text>
              </TouchableOpacity>
            </View>
            <View style={DashboardStyle.OrderDetails}>
              <View style={DashboardStyle.preparing}>
                <Text style={DashboardStyle.orderTotal}>6</Text>
                <Text style={DashboardStyle.orderText}>Preparing</Text>
              </View>
              <View style={DashboardStyle.served}>
                <Text style={DashboardStyle.orderTotal}>40</Text>
                <Text style={DashboardStyle.orderText}>Served</Text>
              </View>
              <View style={DashboardStyle.cancelled}>
                <Text style={DashboardStyle.orderTotal}>6</Text>
                <Text style={DashboardStyle.orderText}>Cancelled</Text>
              </View>
            </View>
          </View>
          {/* Revenue */}
          <View style={DashboardStyle.orderSummaryReven}>
            <View style={DashboardStyle.titleDate}>
              <Text style={DashboardStyle.title}>Order Summary</Text>
              <View style={DashboardStyle.filterDate}>
                <TouchableOpacity
                  style={DashboardStyle.textBtnOpacity}
                  onPress={handleFocus}>
                  <Text style={DashboardStyle.filterText}>Monthly</Text>
                </TouchableOpacity>
                <Text style={DashboardStyle.border}>|</Text>
                <TouchableOpacity style={DashboardStyle.textBtnOpacity}>
                  <Text style={DashboardStyle.filterText}>Weekly </Text>
                </TouchableOpacity>
                <Text style={DashboardStyle.border}>|</Text>
                <TouchableOpacity style={DashboardStyle.textBtnOpacity}>
                  <Text style={DashboardStyle.filterText}>Today</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={DashboardStyle.categoryRevenue}>
              <View style={DashboardStyle.catRevenBtns}>
                <Text style={DashboardStyle.Revenue}>INCOME</Text>
              </View>
              <View style={DashboardStyle.catRevenBtns}>
                <Text style={DashboardStyle.Revenue}>EXPENSE</Text>
              </View>
              <View style={DashboardStyle.catRevenBtns}>
                <Text style={DashboardStyle.Revenue}>TOTAL INCOME</Text>
              </View>
              <View style={DashboardStyle.catRevenBtns}>
                <Text style={DashboardStyle.Revenue}>TOTAL EXPENSE</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
