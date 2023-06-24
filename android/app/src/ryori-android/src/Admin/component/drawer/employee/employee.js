import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {EmployeeStyle as styles} from './employeeStyle';
import {DataTable} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Employees() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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
            <DataTable.Title>
              <Text style={styles.tableTitle}>ID</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tableTitle}>Full Name</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tableTitle}>Email</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tableTitle}>Role</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tableTitle}>Contact No.</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tableTitle}>Action</Text>
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            <DataTable.Row style={{borderBottomWidth: 1}}>
              <DataTable.Cell>
                <Text style={styles.employeeCellData}>01</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.employeeCellData}>{'John'} </Text>
                <Text style={styles.employeeCellData}>{'Doe'}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.employeeCellData}>
                  {'johnDoe@gmail.com'}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.employeeCellData}>{'Kitchen'}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.employeeCellData}>09158956325789</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="pencil-box-outline" size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="pencil-box-outline" size={25} />
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
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
                  secureTextEntry={false}
                  onChangeText={setFirstname}
                />
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Last Name"
                  placeholderTextColor="#777777"
                  value={lastName}
                  secureTextEntry={false}
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
                  secureTextEntry={false}
                  onChangeText={setEmail}
                />
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Password"
                  placeholderTextColor="#777777"
                  value={password}
                  secureTextEntry={false}
                  onChangeText={setPassword}
                />
              </View>
              <View style={styles.modalForm}>
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Position"
                  placeholderTextColor="#777777"
                  value={role}
                  secureTextEntry={false}
                  onChangeText={setRole}
                />
                <TextInput
                  mode="outlined"
                  style={styles.modalInput}
                  placeholder="Contact Number"
                  placeholderTextColor="#777777"
                  value={contactNumber}
                  secureTextEntry={false}
                  onChangeText={setContactNumber}
                />
              </View>
              <View style={styles.modalButton}>
                <TouchableOpacity
                  style={styles.addEmployeeBtn}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.filterTextBtn}>Add</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={styles.delInvetoryOpacity}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.filterTextBtn}>Delete</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </View>
  );
}
