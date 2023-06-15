import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {ProfileStyle as styles} from './profileStyle';
import adminImg from '../../../images/male3.png';

export default function UpdateProfileAdmin() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.profileAdmin}>
      <Text style={styles.profiletTitle}>Edit Profile</Text>
      <View style={styles.profileContent}>
        <View style={styles.columnView}>
          <View style={styles.profileUpdate}>
            <Image source={adminImg} style={styles.profilepic} />
            <TouchableOpacity style={styles.updateBtn}>
              <Text style={styles.buttonsText}>Upload</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.updateAdminInfo}>
            <View style={styles.updateInput}>
              <TextInput
                mode="outlined"
                style={styles.adminInputInfo}
                placeholder="Firt name"
                placeholderTextColor="#777777"
                value={firstname}
                onChangeText={setFirstname}
              />
              <TextInput
                mode="outlined"
                style={styles.adminInputInfo}
                placeholder="Last name"
                placeholderTextColor="#777777"
                value={lastname}
                onChangeText={setLastname}
              />
            </View>
            <View style={styles.updateInput}>
              <TextInput
                mode="outlined"
                style={styles.adminInputInfo}
                placeholder="Birth"
                placeholderTextColor="#777777"
                value={birth}
                secureTextEntry={false}
                onChangeText={setBirth}
              />
              <TextInput
                mode="outlined"
                style={styles.adminInputInfo}
                placeholder="Gender"
                placeholderTextColor="#777777"
                value={gender}
                secureTextEntry={false}
                onChangeText={setGender}
              />
            </View>
            <View style={styles.updateInput}>
              <TextInput
                mode="outlined"
                style={styles.adminInputInfo}
                placeholder="Contact Number"
                placeholderTextColor="#777777"
                value={number}
                secureTextEntry={false}
                onChangeText={setNumber}
              />
              <TextInput
                mode="outlined"
                style={styles.adminInputInfo}
                placeholder="Password"
                placeholderTextColor="#777777"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
              />
            </View>
            <TextInput
              mode="outlined"
              style={styles.addressInput}
              placeholder="Address"
              placeholderTextColor="#777777"
              value={address}
              secureTextEntry={false}
              onChangeText={setAddress}
            />
            <View style={styles.saveAdminInfo}>
              <TouchableOpacity style={styles.updateBtn}>
                <Text style={styles.buttonsText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
