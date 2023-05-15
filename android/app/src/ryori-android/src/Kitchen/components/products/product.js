import React from 'react';
import {prodStyle} from './product-style';
import {View, Text, Image, TextInput} from 'react-native';
import redRyori from '../../images/redRyori.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DataTable} from 'react-native-paper';

export default function Products() {
  return (
    <View style={prodStyle.products}>
      <View style={prodStyle.productContent}>
        <View style={prodStyle.ryoriIcon}>
          <Image source={redRyori} style={prodStyle.ryori} />
          <Text style={prodStyle.ryoriIconText}>Products</Text>
        </View>
        <View style={prodStyle.searchbar}>
          <FontAwesome name="search" size={20} style={prodStyle.SearchIcon} />
          <TextInput
            style={prodStyle.searchInput}
            placeholder="Search Food here"
            placeholderTextColor="#6b6b6d"
            numberOfLines={1}
          />
        </View>
        <View style={prodStyle.Table}>
          <View style={prodStyle.productTable}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={prodStyle.porkHeader}>Pork</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <Text style={prodStyle.porklist}>Pork Combo 1</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: 100}}>
                  <Text style={prodStyle.porklistQty}>Qty: 26</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
          <View style={prodStyle.productTable}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={prodStyle.porkHeader}>Chicken</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <Text style={prodStyle.porklist}>Chicken Combo 1</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: 100}}>
                  <Text style={prodStyle.porklistQty}>Qty: 26</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
          <View style={prodStyle.productTable}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={prodStyle.porkHeader}>Beef</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <Text style={prodStyle.porklist}>Chicken Combo 1</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: 100}}>
                  <Text style={prodStyle.porklistQty}>Qty: 26</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
        </View>
      </View>
    </View>
  );
}
