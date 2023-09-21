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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../utils/constants';
import {Dropdown} from 'react-native-element-dropdown';

const roleData = [
  {label: 'Kitchen', value: 'kitchen'},
  {label: 'Dining', value: 'dining'},
  {label: 'Manager', value: 'manager'},
];

export default function Employees() {
  const [modalVisible, setModalVisible] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [errors, setErrors] = useState('');

  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState([]);
  const [userOnEdit, setUserOnEdit] = useState(null);
  const [employeeExist, setEmployeeExist] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const fetchUsers = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/user?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // console.log(response.data.user);
      const employeeOnly = response.data.filter(
        transactionStatus => transactionStatus.role !== 'admin',
      );
      setUsersData(employeeOnly);
      // console.log(employeeOnly);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const isValidEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const addStoreUser = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      console.log('--', {branch_Id});
      const newUser = [
        ...user,
        {username, email, firstName, lastName, password, role, phone},
      ];
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      if (userOnEdit) {
        await axios.patch(
          `${API_URL}/user/${userOnEdit}`,
          {
            store_Id,
            branch_Id,
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
          branch_Id,
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
        console.log('--', {branch_Id});
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

  const SaveUser = () => {
    if (
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !role ||
      !password ||
      !phone
    ) {
      setErrors('All fields are required.');
    } else if (!isValidEmail(email)) {
      setErrors('Invalid email format.');
    } else if (password.length < 6) {
      setErrors('Password must be at least 6 characters.');
    } else {
      setErrors('');
      addStoreUser();
      setModalVisible(false);
    }
  };

  const handleEdit = user => {
    setModalVisible(true);
    if (user) {
      setEmployeeExist(true);
    } else setEmployeeExist(false);
    setUserOnEdit(user._id);
    setUsername(user.username);
    setEmail(user.email);
    setFirstname(user.firstName);
    setLastName(user.lastName);
    setPassword(user.password);
    setRole(user.role);
    setPhone(user.phone);
  };

  const handleDelete = async id => {
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
            handleDelete(_id); // Call the delete function if confirmed
            setItemToDelete(null); // Clear the item to delete
          },
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const Cancel = () => {
    setModalVisible(false);
    setUserOnEdit(null);
    setUsername('');
    setFirstname('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRole('');
    setPhone('');
  };
  const add = user => {
    setModalVisible(true);
    if (!user) {
      setEmployeeExist(false);
    }
    setUserOnEdit(null);
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
      <TouchableOpacity style={styles.addEmployee} onPress={() => add()}>
        <Text style={styles.addEmployeeText}>Add Employee</Text>
      </TouchableOpacity>
      <View style={styles.employeeTable}>
        <ScrollView horizontal>
          <View>
            <View style={styles.tableRow}>
              <Text style={[styles.cellHeader, styles.idCell]}>No.</Text>
              <Text style={[styles.cellHeader, styles.nameCell]}>
                First Name
              </Text>
              <Text style={[styles.cellHeader, styles.nameCell]}>
                Last name
              </Text>
              <Text style={[styles.cellHeader, styles.usernameEmail]}>
                Username
              </Text>
              <Text style={[styles.cellHeader, styles.usernameEmail]}>
                Email
              </Text>
              <Text style={[styles.cellHeader, styles.contactMng]}>
                Contact No.
              </Text>
              <Text style={[styles.cellHeader, styles.contactMng]}>Role</Text>
              <Text style={[styles.cellHeader, styles.contactMng]}>Manage</Text>
            </View>
            <ScrollView style={{height: 200}}>
              {usersData.map((user, index) => (
                <View key={index}>
                  <View style={styles.tableRow}>
                    <Text style={[styles.cell, styles.idCell]}>
                      {index + 1}
                    </Text>
                    <Text style={[styles.cell, styles.nameCell]}>
                      {user.firstName}
                    </Text>

                    <Text style={[styles.cell, styles.nameCell]}>
                      {user.lastName}
                    </Text>
                    <Text style={[styles.cell, styles.usernameEmail]}>
                      {user.username}
                    </Text>
                    <Text style={[styles.cell, styles.usernameEmail]}>
                      {user.email}
                    </Text>
                    <Text style={[styles.cell, styles.contactMng]}>
                      {user.phone}
                    </Text>
                    <Text style={[styles.cell, styles.contactMng]}>
                      {user.role}
                    </Text>
                    <Text style={[styles.cell, styles.contactMng]}>
                      <TouchableOpacity>
                        <FontAwesome5
                          name="user-edit"
                          size={20}
                          color={'#12BF38'}
                          onPress={() => handleEdit(user)}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginLeft: 20}}>
                        <AntDesign
                          name="delete"
                          size={20}
                          color={'red'}
                          style={{marginLeft: 20}}
                          onPress={() => showDeleteConfirmation(user._id)}
                        />
                      </TouchableOpacity>
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={{top: -20}}>
              {employeeExist ? null : (
                <Text style={styles.modalTitle}>Add Employee here </Text>
              )}
              {!employeeExist ? null : (
                <Text style={styles.modalTitle}>Update Employee Details </Text>
              )}
            </View>
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
                  placeholder="username"
                  placeholderTextColor="#777777"
                  value={username}
                  secureTextEntry={false}
                  onChangeText={setUsername}
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
              <View style={styles.modalForm}>
                <View style={styles.DropdownContainer}>
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus && {borderColor: '#007FFF'},
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    itemTextStyle={{
                      color: '#585858',
                      fontFamily: 'Quicksand-SemiBold',
                    }}
                    data={roleData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Position'}
                    value={role}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setRole(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
                {employeeExist ? null : (
                  <TextInput
                    mode="outlined"
                    style={styles.modalInput}
                    placeholder="email"
                    placeholderTextColor="#777777"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    disabled={employeeExist}
                  />
                )}
              </View>
              <View style={styles.modalButton}>
                {/* <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Roles"
                  placeholderTextColor="#777777"
                  value={role}
                  onChangeText={setRole}
                /> */}
                {employeeExist ? null : (
                  <TextInput
                    mode="outlined"
                    style={styles.modalInput}
                    placeholder="password"
                    placeholderTextColor="#777777"
                    value={password}
                    onChangeText={setPassword}
                  />
                )}
                {!employeeExist ? null : (
                  <Text style={styles.employeeCellData}>
                    Please Contact us for Email and {'\n'} Password Recovery
                  </Text>
                )}
                <TouchableOpacity
                  style={styles.addEmployeeBtn}
                  onPress={SaveUser}>
                  <Text style={styles.filterTextBtn}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelModalBtn}
                  onPress={Cancel}>
                  <Text style={styles.filterTextBtn}>Cancel</Text>
                </TouchableOpacity>
              </View>
              {errors !== '' && (
                <Text style={{color: '#ff0000', top: -7}}>{errors}</Text>
              )}
            </View>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </View>
  );
}
