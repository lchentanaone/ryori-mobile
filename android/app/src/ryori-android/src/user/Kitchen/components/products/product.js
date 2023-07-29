import React, {useState} from 'react';
import {prodStyle as styles} from './product-style';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import redRyori from '../../../images/redRyori.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DataTable} from 'react-native-paper';
import male from '../../../images/male3.png';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

export default function Products({navigation}) {
  const [quantity, setQuantity] = useState('0');

  const handleIncrease = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity.toString());
  };
  const handleDecrease = () => {
    const newQuantity = parseInt(quantity) - 1;
    if (newQuantity >= 0) {
      setQuantity(newQuantity.toString());
    }
  };

  return (
    <>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <View style={styles.products}>
        <View style={styles.productContent}>
          <View style={styles.crewHeader}>
            <View style={styles.ryoriIconTitle}>
              <Image source={redRyori} style={styles.ryori} />
              <Text style={styles.ryoriIconText}>Products</Text>
            </View>
            <TouchableOpacity
              style={styles.viewProfile}
              onPress={() => navigation.navigate('Profile Employee')}>
              <Image source={male} style={styles.crewImage} />
              <View style={{top: -5, left: 5}}>
                <Text style={styles.crewName}>{'John Doe'}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>
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
                  <DataTable.Title style={{flex: 2.2}}>
                    <Text style={styles.tableProductHeader}>Pork</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{flex: 0.8}}>
                    <Text style={styles.productQty}>Quantity</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell style={{flex: 2.2}}>
                    <Text style={styles.porklist}>Pork Combo 1</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 0.8}}>
                    <View style={styles.qtyContainer}>
                      <TouchableOpacity onPress={handleDecrease}>
                        <Entypo name="minus" size={18} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.input}
                        value={quantity}
                        onChangeText={text => setQuantity(text)}
                        keyboardType="numeric"
                      />
                      <TouchableOpacity onPress={handleIncrease}>
                        <Entypo name="plus" size={18} />
                      </TouchableOpacity>
                    </View>
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
          <View style={styles.invenBtn}>
            <TouchableOpacity
              style={styles.inventoryBtn}
              onPress={() => navigation.navigate('Inventory')}>
              <Text style={styles.btnText}>Open Inventory</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
