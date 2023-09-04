import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {CategoryInventoryStyle as styles} from './inventory-style';
import {DataTable} from 'react-native-paper';
import {Styles} from './../../../../layoutStyles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InventoryCategory() {
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState('');
  const [itemOnEdit, setItemOnEdit] = useState('');

  const API_URL = 'http://10.0.2.2:3000';

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const response = await axios.get(
        `${API_URL}/inventory/rawcategory/?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setCategory(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostInventory = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      const newData = [...category, {title}];
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      if (itemOnEdit !== '') {
        await axios.patch(
          `${API_URL}/inventory/rawcategory/${itemOnEdit}`,
          {
            branch_Id,
            title,
          },
          {headers},
        );
        setTitle('');
        fetchItems();
        setCategory(newData);
      } else {
        // New
        const test = await axios.post(
          `${API_URL}/inventory/rawcategory/`,
          {
            branch_Id,
            title,
          },
          {headers},
        );
        setTitle('');
        fetchItems();
        setCategory(newData);
      }
    } catch (error) {
      console.error(error);
    }
    setTitle('');
  };

  const handleEdit = item => {
    setItemOnEdit(item._id);
    setTitle(item.title);
  };

  const handleDeleteItem = async id => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      await axios.delete(`${API_URL}/inventory/rawcategory/${id}`, {
        branch_Id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Inventory Category</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="#777777"
            value={title}
            onChangeText={setTitle}
          />
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={handlePostInventory}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableWidth}>
          <View>
            <View style={styles.row}>
              <Text style={[styles.textHeader, styles.noWidth]}>No.</Text>
              <Text style={[styles.textHeader, styles.catName]}>
                Category Name
              </Text>
              <Text style={[styles.textHeader, styles.catName]}>Action</Text>
            </View>
            <ScrollView style={{height: 230}}>
              {category.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text style={[styles.textCell, styles.noWidth]}>
                    {item.id}
                  </Text>
                  <Text style={[styles.textCell, styles.catName]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.catName]}>
                    <View style={Styles.horContainer}>
                      <TouchableOpacity
                        style={{...Styles.btn, ...Styles.btnTertiary}}
                        onPress={() => handleEdit(item)}>
                        <Text style={Styles.btnText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{...Styles.btn, ...Styles.btnWarning}}
                        onPress={() => handleDeleteItem(item._id)}>
                        <Text style={Styles.btnText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
