import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {ProfileStyle as styles} from './profileStyle';
import redRyori from '../../images/redRyori.png';
import male from '../../images/male3.png';

export default function ProfileEdit({navigation}) {
  const [fistName, setFistName] = useState('');

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <View style={styles.ryoriIcon}>
          <Image source={redRyori} style={styles.ryori} />
          <Text style={styles.ryoriIconText}>My Profile</Text>
        </View>
        <View style={styles.crewImageCon}>
          <Image source={male} style={styles.crewImage} />
          <Text style={styles.crewName}>{'John Doe'}</Text>
          <Text style={styles.crewName}>{'JohnDoe99@gmail.com'}</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="First name"
            value={fistName}
            onChangeText={setFistName}
          />
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Last name"
            value={fistName}
            onChangeText={setFistName}
          />
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Position"
            value={fistName}
            onChangeText={setFistName}
          />
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Contact Number"
            value={fistName}
            onChangeText={setFistName}
          />
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Gender"
            value={fistName}
            onChangeText={setFistName}
          />
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Address"
            value={fistName}
            onChangeText={setFistName}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
