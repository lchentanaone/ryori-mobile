/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {overviewStyle} from '../overview-style';
import axios from 'axios';
import {foodStyle} from './food-style';
import {DataTable, Modal} from 'react-native-paper';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';

export default function Food() {
  const API_URL = 'http://10.0.2.2:3000';

  const [items, setItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [price, setPrice] = useState('');
  const [menu, setMenu] = useState('');
  const [editId, setEditId] = useState();

  const handlePost = async () => {
    try {
      const response = await axios.post(`${API_URL}/food/`, {
        foodName: foodName,
        price: price,
        menu: menu,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/food/`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  const handleUpdate = async item => {
    try {
      console.log(`${API_URL}/food/` + item.id);
      console.log({item});
      const response = await axios.patch(`${API_URL}/food/` + editId, {
        foodName,
        price,
        menu: '9',
      });
      setFoodName(response.foodName);
      setPrice(response.price);
      setMenu(response.menu);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsModalVisible(false);
  };

  const EditItemId = item => {
    setIsModalVisible(true);
    setFoodName(item.foodName);
    setPrice(item.price);
    // setFood(item.food);
    setEditId(item.id);
    console.log(item);
  };

  const handleDelete = async item => {
    try {
      const response = await axios.delete(`${API_URL}/food/` + item.id);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={overviewStyle.container}>
      <View style={foodStyle.addFoodCon}>
        <TextInput
          mode="outlined"
          style={foodStyle.input}
          placeholder="label"
          value={foodName}
          onChangeText={foodName => setFoodName(foodName)}
        />
        <TextInput
          mode="outlined"
          style={foodStyle.input}
          placeholder="label"
          value={price}
          onChangeText={price => setPrice(price)}
        />
        <TextInput
          mode="outlined"
          style={foodStyle.input}
          placeholder="label"
          value={menu}
          onChangeText={menu => setMenu(menu)}
        />
        <View style={foodStyle.saveBtn}>
          <TouchableOpacity
            style={foodStyle.btnCSaveOpacity}
            onPress={handlePost}>
            <Text style={foodStyle.textBtn}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={foodStyle.tableData}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={foodStyle.orderData}>ID</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={foodStyle.orderData}>Food Name</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={foodStyle.orderData}>Price</Text>
            </DataTable.Title>

            <DataTable.Title>
              <Text style={foodStyle.orderData}>Edit</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={foodStyle.orderData}>Delete</Text>
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {items.map(item => (
              <View key={item.id}>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text style={foodStyle.orderCellData}>{item.id}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={foodStyle.orderCellData}>{item.foodName}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={foodStyle.orderCellData}>{item.price}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View style={foodStyle.actionBtn}>
                      <TouchableOpacity
                        style={foodStyle.actionOpacity}
                        onPress={() => EditItemId(item)}>
                        <Text style={foodStyle.actionText}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View style={foodStyle.actionBtn}>
                      <TouchableOpacity
                        style={foodStyle.actionOpacity}
                        onPress={() => handleDelete(item)}>
                        <Text style={foodStyle.actionText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            ))}
          </ScrollView>
        </DataTable>
        <Modal
          animation="fade"
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}>
          {items.map(item => (
            <View key={item.id}>
              <View style={foodStyle.modalView}>
                <TextInput
                  mode="outlined"
                  style={foodStyle.input}
                  placeholder="label"
                  value={foodName}
                  onChangeText={foodName => setFoodName(foodName)}
                />
                <TextInput
                  mode="outlined"
                  style={foodStyle.input}
                  placeholder="image"
                  value={price}
                  onChangeText={price => setPrice(price)}
                />
                <View style={foodStyle.actionBtn}>
                  <TouchableOpacity
                    style={foodStyle.actionOpacity}
                    onPress={() => handleUpdate(item)}>
                    <Text style={foodStyle.actionText}>SaveEdit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </Modal>
      </View>
    </View>
  );
}
