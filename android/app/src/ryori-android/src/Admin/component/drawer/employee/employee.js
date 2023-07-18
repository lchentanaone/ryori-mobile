import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {EmployeeStyle as styles} from './employeeStyle';
import {DataTable} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';

export default function Employees() {
  const [modalVisible, setModalVisible] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState([]);
  const [userOnEdit, setUserOnEdit] = useState('');

  const fetchUsers = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      console.log('StoresID', {store_Id});
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(`${API_URL}/user?store_Id=${store_Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsersData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const addStoreUser = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const newUser = [
        ...user,
        {username, email, firstName, lastName, password, role, phone},
      ];
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      if (userOnEdit !== '') {
        console.log({
          store_Id,
          username,
          email,
          firstName,
          lastName,
          password,
          role,
          phone,
        });
        await axios.patch(
          `${API_URL}/user/${userOnEdit}`,
          {
            store_Id,
            username,
            email,
            firstName,
            lastName,
            password,
            role,
            phone,
          },
          {headers},
        );
        fetchUsers();
        setUser(newUser);
      } else {
        await axios.post(`${API_URL}/auth/register`, {
          store_Id,
          username,
          email,
          firstName,
          lastName,
          password,
          role,
          phone,
        });
        fetchUsers();
        setUser(newUser);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
    setUsername('');
    setFirstname('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRole('');
    setPhone('');
  };

  const handleEdit = user => {
    setModalVisible(true);
    setUserOnEdit(user.id);
    setUsername(user.username);
    setEmail(user.email);
    setFirstname(user.firstName);
    setLastName(user.lastName);
    setPassword(user.password);
    setRole(user.role);
    setPhone(user.phone);
  };

  const handeDelete = async id => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      await axios.delete(`${API_URL}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const SaveUser = () => {
    setModalVisible(false);
    addStoreUser();
  };
  const Cancel = () => {
    setModalVisible(false);
    setUsername('');
    setFirstname('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRole('');
    setPhone('');
  };

  return (
    <View style={styles.employee}>
      <Text style={styles.employeeTitle}>Employees</Text>
      {/* <View style={styles.employeeContent}> */}
      <TouchableOpacity
        style={styles.addEmployee}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addEmployeeText}>Add Employee</Text>
      </TouchableOpacity>
      <View style={styles.employeeTable}>
        <DataTable>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title style={{flex: 0.3, marginLeft: -15}}>
              <Text style={styles.tableTitle}>No.</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 2}}>
              <Text style={styles.tableTitle}>Name</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 1.2}}>
              <Text style={styles.tableTitle}>username</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 2.2}}>
              <Text style={styles.tableTitle}>Email</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 1}}>
              <Text style={styles.tableTitle}>Role</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 1.2}}>
              <Text style={styles.tableTitle}>Contact No.</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 0.5}}>
              <Text style={styles.tableTitle}>Action</Text>
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {usersData.map((user, index) => (
              <View key={index}>
                <DataTable.Row style={{borderBottomWidth: 1}}>
                  <DataTable.Cell style={{flex: 0.3, marginLeft: -10}}>
                    <Text style={styles.employeeCellData}>{user.id}.</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 2}}>
                    <Text style={styles.employeeCellData}>
                      {user.firstName}
                      {user.lastName}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 1.2, left: 5}}>
                    <Text style={styles.employeeCellData}>{user.username}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 2.2}}>
                    <Text style={styles.employeeCellData}>{user.email}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 1.2, left: 10}}>
                    <Text style={styles.employeeCellData}>{user.role}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 1.2}}>
                    <Text style={styles.employeeCellData}>{user.phone}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 0.6}}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="pencil-box-outline"
                        size={25}
                        onPress={() => handleEdit(user)}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="pencil-box-outline"
                        size={25}
                        color={'red'}
                        onPress={() => handeDelete(user.id)}
                      />
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            ))}
          </ScrollView>
        </DataTable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <View style={styles.modalForm}>
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="First Name"
                  placeholderTextColor="#777777"
                  value={firstName}
                  onChangeText={setFirstname}
                />
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Last Name"
                  placeholderTextColor="#777777"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
              <View style={styles.modalForm}>
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="email"
                  placeholderTextColor="#777777"
                  value={email}
                  keyboardType="email-address"
                  onChangeText={setEmail}
                />
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="username"
                  placeholderTextColor="#777777"
                  value={username}
                  secureTextEntry={false}
                  onChangeText={setUsername}
                />
              </View>
              <View style={styles.modalForm}>
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="password"
                  placeholderTextColor="#777777"
                  value={password}
                  onChangeText={setPassword}
                />
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Phone Number"
                  placeholderTextColor="#777777"
                  value={phone}
                  keyboardType="numeric"
                  onChangeText={setPhone}
                />
              </View>
              <View style={styles.modalButton}>
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Roles"
                  placeholderTextColor="#777777"
                  value={role}
                  onChangeText={setRole}
                />
                <TouchableOpacity
                  style={styles.addEmployeeBtn}
                  onPress={SaveUser}>
                  <Text style={styles.filterTextBtn}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addEmployeeBtn}
                  onPress={Cancel}>
                  <Text style={styles.filterTextBtn}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </View>
  );
}
