import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {CategoryStyle} from './category-style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {DataTable} from 'react-native-paper';
import {Styles} from './../../../../layoutStyles';
import ryoriLogo from '../../../images/redRyori.png';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import SkeletonItem from '../../../../utils/skeletonItem';
import Feather from 'react-native-vector-icons/Feather';

export default function Category() {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [itemOnEdit, setItemOnEdit] = useState('');
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState('');
  const [itemToDelete, setItemToDelete] = useState(null);

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      console.log({token});
      const response = await axios.get(
        `${API_URL}/menuCategory/?store_Id=${store_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleOpenCamera = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 0.5,
  //     includeBase64: false,
  //   };

  //   launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled camera picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       setPhoto(response.assets[0].uri);
  //     }
  //   });
  // };
  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        includeBase64: false,
      },
      response => {
        if (response.assets) {
          setPhoto(response.assets[0].uri);
        }
      },
    );
  };
  const addCategory = async () => {
    return new Promise(async (resolve, reject) => {
      if (!title) {
        setErrors('Category name is required');
      } else {
        setErrors('');

        try {
          const token = await AsyncStorage.getItem('access_token');
          console.log({token});
          const store_Id = await AsyncStorage.getItem('store_Id');
          const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          };
          console.log('Request Headers:', headers);
          const fileType = /(?:\.([^.]+))?$/.exec(photo)[1];
          const randomFileName =
            new Date().valueOf().toString() + '.' + fileType;
          const formData = new FormData();
          formData.append('title', title);
          if (photo && photo.includes('file:///')) {
            formData.append('photo', {
              uri: photo,
              name: randomFileName,
              type: 'image/jpeg',
            });
          }
          formData.append('store_Id', store_Id);

          // Edit
          if (itemOnEdit !== '') {
            console.log({itemOnEdit});
            // Need to double check Edit bugs... still haveing issues found.
            console.log(`${API_URL}/menuCategory/${itemOnEdit}`);
            console.log({formData: JSON.stringify(formData)});
            const response = await axios.patch(
              `${API_URL}/menuCategory/${itemOnEdit}`,
              formData,
              {
                headers,
              },
            );

            fetchItems();
            resolve(response.data._id);
          } else {
            // New
            const response = await axios.post(
              `${API_URL}/menuCategory/`,
              formData,
              {
                headers,
              },
            );
            fetchItems();
            resolve(response.data._id);
          }
        } catch (error) {
          console.error('error', error);
          reject(error);
        }
        setTitle('');
        setPhoto(null);
        setItemOnEdit('');
      }
    });
  };
  const cancelEdit = () => {
    setTitle('');
    setPhoto(null);
    setItemOnEdit('');
  };

  const handleEdit = async item => {
    const token = await AsyncStorage.getItem('access_token');

    const responsePhoto = await axios.get(
      `${API_URL}/menuCategory/${item._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setItemOnEdit(item._id);
    setTitle(item.title);
    setPhoto(responsePhoto.data.photo);
    console.log('item', item._id);
  };

  const handleDelete = async _id => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      await axios.delete(`${API_URL}/menuCategory/${_id}`, {
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
          onPress: () => setItemToDelete(null),
        },
        {
          text: 'Delete',
          onPress: () => {
            handleDelete(_id);
            setItemToDelete(null);
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
    <View style={CategoryStyle.menuContainer}>
      <View style={CategoryStyle.menuContent}>
        <Text style={CategoryStyle.menuTitle}>Menu Category</Text>
        <View style={CategoryStyle.menu}>
          <View style={CategoryStyle.menuC1}>
            <DataTable style={CategoryStyle.list}>
              <DataTable.Header style={CategoryStyle.tableHeader}>
                <DataTable.Title style={CategoryStyle.menuC1}>
                  <Text style={CategoryStyle.textHeader}>Name</Text>
                </DataTable.Title>
                <DataTable.Title style={CategoryStyle.menuC2}>
                  <Text style={CategoryStyle.textHeader}>Action</Text>
                </DataTable.Title>
              </DataTable.Header>
              <ScrollView style={{height: 300}}>
                {/* <View key={item.id}> */}
                {items.length > 0 ? (
                  items.map((item, index) => (
                    <DataTable.Row key={index}>
                      <DataTable.Cell>
                        <Text style={CategoryStyle.textCell}>{item.title}</Text>
                      </DataTable.Cell>
                      <DataTable.Cell>
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
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))
                ) : (
                  <View>
                    <SkeletonItem />
                  </View>
                )}
                {/* </View> */}
              </ScrollView>
            </DataTable>
          </View>
          <ScrollView style={{...CategoryStyle.menuC2}}>
            <View style={Styles.verContainer}>
              <View
                style={{
                  backgroundColor: '#ddd',
                  borderRadius: 10,
                }}>
                <Image
                  source={photo ? {uri: photo} : ryoriLogo}
                  style={CategoryStyle.img}
                />
                <TouchableOpacity
                  style={CategoryStyle.uploadLogoOpacity}
                  onPress={handleChoosePhoto}>
                  <Feather name="camera" color={'#fff'} size={16} />
                  <Text style={CategoryStyle.uploadLogoTextBtn}>Upload</Text>
                </TouchableOpacity>
              </View>

              <TextInput
                mode="outlined"
                style={{
                  ...Styles.textInput,
                  width: '100%',
                  fontFamily: 'Quicksand-SemiBold',
                  marginTop: -5,
                }}
                placeholder="Category name"
                placeholderTextColor="#777777"
                value={title.toString()}
                onChangeText={setTitle}
              />
              {errors !== '' && (
                <Text style={{color: '#ff0000', top: -10}}>{errors}</Text>
              )}
              <View style={{...Styles.horContainer}}>
                <TouchableOpacity
                  style={{...Styles.btn, ...Styles.btnPrimary}}
                  onPress={addCategory}>
                  <Text style={Styles.btnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...Styles.btn, ...Styles.btnSecondary}}
                  onPress={cancelEdit}>
                  <Text style={Styles.btnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
