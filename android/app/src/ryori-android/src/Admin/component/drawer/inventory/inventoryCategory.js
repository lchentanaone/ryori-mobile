import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {CategoryInventoryStyle as styles} from './inventory-style';
import {API_URL} from '../../../../utils/constants';
import {Styles} from './../../../../layoutStyles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InventoryCategory() {
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState('');
  const [itemOnEdit, setItemOnEdit] = useState('');
  const [errors, setErrors] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);

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
    if (!title) {
      setErrors('Category name is required');
    } else {
      setErrors('');
      try {
        const token = await AsyncStorage.getItem('access_token');
        const branch_Id = await AsyncStorage.getItem('branch_Id');
        const newData = [...category, {title}];
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        if (itemOnEdit) {
          await axios.patch(
            `${API_URL}/inventory/rawcategory/${itemOnEdit}`,
            {
              branch_Id,
              title,
            },
            {headers},
          );
          fetchItems();
          setCategory(newData);
        } else {
          await axios.post(
            `${API_URL}/inventory/rawcategory/`,
            {
              branch_Id,
              title,
            },
            {headers},
          );
          fetchItems();
          setCategory(newData);
        }
      } catch (error) {
        console.error(error);
      }
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
  const showDeleteConfirmation = _id => {
    setItemToDelete(_id);
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => setItemToDelete(null), // Clear the item to delete
        },
        {
          text: 'Delete',
          onPress: () => {
            handleDeleteItem(_id); // Call the delete function if confirmed
            setItemToDelete(null); // Clear the item to delete
          },
        },
      ],
      {cancelable: false},
    );
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
            placeholder="Category name"
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
        {errors ? (
          <Text style={{color: '#ff0000', top: -9}}>{errors}</Text>
        ) : null}
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
                    {index + 1}
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
                        onPress={() => showDeleteConfirmation(item._id)}>
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
