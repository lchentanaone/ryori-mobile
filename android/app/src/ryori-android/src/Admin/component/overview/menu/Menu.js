// /* eslint-disable prettier/prettier */
// import React, {useState, useEffect} from 'react';
// import {overviewStyle} from '../overview-style';
// import Entypo from 'react-native-vector-icons/Entypo';
// import {DrawerActions} from '@react-navigation/native';
// import ryoriLogo from '../../../images/logo/RYORI-Logo.png';
// import Header from '../header';
// import {orderStyle} from './order-style';
// import {DataTable, Modal} from 'react-native-paper';
// import {menuStyle} from './menu-style';
// import {SignUpStyle} from '../../welcome/createAcc/createAccount-style';
// import {
//   View,
//   ImageBackground,
//   TouchableOpacity,
//   Text,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import axios from 'axios';

// export default function Menus({navigation, itemId}) {
//   const API_URL = 'http://10.0.2.2:3000';

//   const [items, setItems] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [label, setLabel] = useState('');
//   const [image, setImage] = useState('');
//   const [food, setFood] = useState('');
//   const [editId, setEditId] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      try {  
        const response = await axios.get(`${API_URL}/menuItem/`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

//   const handleUpdate = async item => {
//     try {
//       console.log(`${API_URL}/menu-category/` + item.id);
//       console.log({item});
//       const response = await axios.patch(`${API_URL}/menu-category/` + editId, {
//         label,
//         image,
//         food: '1',
//       });
//       setLabel(response.label);
//       setImage(response.image);
//       setFood(response.food);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//     setIsModalVisible(false);
//   };

  // const onSaveUpdate = (editId) => {
  //   const newItems =items.map(item => {
  //     if (item.id == editId) {
  //       item.label = label
  //       return item
  //     }
  //     return item
  //   })
  //   setItems(newItems)
  // }

  const EditItemId = item => {
    setIsModalVisible(true);
    setLabel(item.label);
    setImage(item.image);
    // setFood(item.food);
    setEditId(item.id);
    console.log(item);
  };
  const handleDelete = async item => {
    try {
      const response = await axios.delete(
        `${API_URL}/menu-category/` + item.id,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={overviewStyle.container}>
      <Header />
      <View style={overviewStyle.menu}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Entypo name="menu" size={30} color="#48e88e" />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={ryoriLogo}
        style={overviewStyle.ryoriLogoLogin}
      />
      <View style={overviewStyle.circleContainer}>
        <View style={overviewStyle.circle} />
      </View>
      {/* <View style={orderStyle.tableData}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>ID</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Name</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Image</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Time</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Availability</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Price</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={orderStyle.orderData}>Action</Text>
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {items.map(item => (
              <View key={item.id}>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text style={orderStyle.orderCellData}>{item.id}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={orderStyle.orderCellData}>{item.title}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={orderStyle.orderCellData}>{item.photo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={orderStyle.orderCellData}></Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={orderStyle.orderCellData}></Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View style={orderStyle.actionBtn}>
                      <TouchableOpacity
                        style={orderStyle.actionOpacity}
                        onPress={() => EditItemId(item)}>
                        <Text style={orderStyle.actionText}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View style={orderStyle.actionBtn}>
                      <TouchableOpacity
                        style={orderStyle.actionOpacity}
                        onPress={() => handleDelete(item)}>
                        <Text style={orderStyle.actionText}>Delete</Text>
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
              <View style={menuStyle.modalView}>
                <TextInput
                  mode="outlined"
                  style={SignUpStyle.input}
                  placeholder="label"
                  value={label}
                  onChangeText={label => setLabel(label)}
                />
                <TextInput
                  mode="outlined"
                  style={SignUpStyle.input}
                  placeholder="image"
                  value={image}
                  onChangeText={image => setImage(image)}
                />
                <View style={orderStyle.actionBtn}>
                  <TouchableOpacity
                    style={orderStyle.actionOpacity}
                    onPress={() => handleUpdate(item)}>
                    <Text style={orderStyle.actionText}>SaveEdit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </Modal>
      </View> */}
    </View>
  );
}
