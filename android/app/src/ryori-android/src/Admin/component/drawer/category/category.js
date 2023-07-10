import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image, Button, StyleSheet, ScrollView} from 'react-native';
import {CategoryStyle, DropdownStyle, AddMenuStyle} from './category-style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {TransacStyle} from './../Transactions/transactionStyle';
import {DataTable} from 'react-native-paper';
import {Styles} from './../../../../layoutStyles'
import ryoriLogo from '../../../images/redRyori.png';
import axios from 'axios';

const filterAvalable = [
  {label: 'Available', value: 'Available'},
  {label: 'Not Available', value: 'Not Available'},
];
const categories = [
  {label: 'Pork', value: 'Pork'},
  {label: 'Drinks', value: 'Drinks'},
];
export default function Category({navigation}) {
  const API_URL = 'http://10.0.2.2:3000';

  const [categoryName, setCategoryName] = useState('')
  const [photo, setPhoto] = useState(ryoriLogo);
  // const [category, setCategory] = useState('All');
  // const [availability, setAvailability] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);
  const [itemOnEdit, setItemOnEdit] = useState('')
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');      
      const store_Id = await AsyncStorage.getItem('store_Id');

      const response = await axios.get(`${API_URL}/menuCategory/?store_Id=${store_Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto({uri: response.assets[0].uri});
      }
    });
  };
  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        includeBase64: false,
      },
      response => {
        if (response.assets) {
          setPhoto({uri: response.assets[0].uri});
        }
      },
    );
  };
  const addCategory = async () => {
    
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Edit
      if(itemOnEdit !== '') {
        await axios.patch(`${API_URL}/menuCategory/${itemOnEdit}`, {
          title: categoryName,
          photo: photo.uri
        }, {headers});
        fetchItems();
      }
      else { // New
        await axios.post(`${API_URL}/menuCategory/`, {          
          title: categoryName,
          photo: photo.uri
        }, {headers});
        fetchItems();
      }      
    } catch (error) {
      console.error(error);
    }
  }
  const cancelEdit = () => {
    setCategoryName('')
    setPhoto(ryoriLogo)
    setItemOnEdit('')
  }

  const handleEdit = (item) => {
    setItemOnEdit(item.id)
    setCategoryName(item.title)
    setPhoto({uri: item.photo})
  }

  const handleDelete = async (id) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      await axios.delete(`${API_URL}/menuCategory/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <View style={CategoryStyle.menuContainer}>
      <View style={CategoryStyle.menuContent}>
      <Text style={CategoryStyle.menuTitle}>Menu Category</Text>
        <View style={CategoryStyle.menu}>
          <View style={CategoryStyle.menuC1}>     
            
            <DataTable style={CategoryStyle.list}>
              <DataTable.Header style={TransacStyle.tableHeader}>
                <DataTable.Title style={CategoryStyle.menuC1}>
                  <Text style={TransacStyle.textHeader}>Name</Text>
                </DataTable.Title>
                <DataTable.Title style={CategoryStyle.menuC2}>
                  <Text style={TransacStyle.textHeader}>Action</Text>
                </DataTable.Title>
                <DataTable.Title></DataTable.Title>
              </DataTable.Header>
              <ScrollView>

              {/* <View key={item.id}> */}
              {items.map((item, index) => (
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text style={TransacStyle.textCell}>{item.title}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View style={Styles.horContainer}>
                      <TouchableOpacity
                        style={{...Styles.btn, ...Styles.btnTertiary}}
                        onPress={() => handleEdit(item)}
                      >
                        <Text style={Styles.btnText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{...Styles.btn, ...Styles.btnWarning}}
                        onPress={() => handleDelete(item.id)}
                      >
                        <Text 
                        style={Styles.btnText}
                        >Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    
                    
                  </DataTable.Cell>
                  
                </DataTable.Row>
              ))}
              {/* </View> */}

              </ScrollView>
            </DataTable>
            
          </View>
          <ScrollView style={{...CategoryStyle.menuC2}}>
            <View style={Styles.verContainer}>
              <View style={{backgroundColor: '#ddd', borderColor: '#ddd', borderWidth: 1, padding: 5, }}>
                <Image
                  source={photo}
                  style={{width: '100%', height: 150}}
                />
              </View>
              <View style={Styles.horContainer}>
                <Button style={Styles.btn} title="Open Camera" onPress={handleOpenCamera} />
                <Button title="Choose Photo" onPress={handleChoosePhoto} />
              </View>
              <TextInput
                mode="outlined"
                style={{...Styles.textInput, width: '100%'}}
                // keyboardType="numeric"
                placeholder="Category Name"
                placeholderTextColor="#777777"
                value={categoryName.toString()}
                secureTextEntry={false}
                onChangeText={setCategoryName}
              />
              <View style={Styles.horContainer}>
                <TouchableOpacity style={{...Styles.btn, ...Styles.btnPrimary}} onPress={addCategory}><Text style={Styles.btnText}>Save</Text></TouchableOpacity>
                <TouchableOpacity style={{...Styles.btn, ...Styles.btnSecondary}} onPress={cancelEdit}><Text style={Styles.btnText}>Cancel</Text></TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dataText: {
    flex: 1,
    fontSize: 14,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
