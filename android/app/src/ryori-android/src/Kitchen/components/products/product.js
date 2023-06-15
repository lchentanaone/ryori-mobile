import React from 'react';
import {prodStyle as styles} from './product-style';
import {View, Text, Image, TextInput} from 'react-native';
import redRyori from '../../images/redRyori.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DataTable} from 'react-native-paper';

export default function Products() {
  return (
    <View style={styles.products}>
      <View style={styles.productContent}>
        <View style={styles.ryoriIcon}>
          <Image source={redRyori} style={styles.ryori} />
          <Text style={styles.ryoriIconText}>Products</Text>
        </View>
        <View style={styles.searchbar}>
          <FontAwesome name="search" size={20} style={styles.SearchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Food here"
            placeholderTextColor="#6b6b6d"
            numberOfLines={1}
          />
        </View>
        <View style={styles.Table}>
          <View style={styles.productTable}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.tableProductHeader}>Pork</Text>
                </DataTable.Title>
                <DataTable.Title style={{left: '30%'}}>
                  <Text style={styles.productQty}>Quantity</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <Text style={styles.porklist}>Pork Combo 1</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: '37%'}}>
                  <Text style={styles.porklistQty}>26</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
          <View style={styles.productTable}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.tableProductHeader}>Chicken</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <Text style={styles.porklist}>Chicken Combo 1</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: '37%'}}>
                  <Text style={styles.porklistQty}>26</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
          <View style={styles.productTable}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.tableProductHeader}>Beef</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>
                  <Text style={styles.porklist}>Chicken Combo 1</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{left: '37%'}}>
                  <Text style={styles.porklistQty}>26</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
        </View>
      </View>
    </View>
  );
}
