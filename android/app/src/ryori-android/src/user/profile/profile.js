import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {ProfileStyle as styles} from './profileStyle';
import redRyori from '../images/redRyori.png';
import male from '../images/male3.png';

export default function ProfileEmployee({navigation}) {
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
        <View style={styles.crewInfo}>
          <View style={{width: '40%'}}>
            <Text style={styles.columnText}>Position</Text>
            <Text style={styles.columnText}>Gender</Text>
            <Text style={styles.columnText}>Contact no.</Text>
            <Text style={styles.columnText}>Address</Text>
          </View>
          <View style={{width: '60%', marginLeft: 10, paddingRight: 10}}>
            <Text style={styles.columnText}>{'Kitchen'}</Text>
            <Text style={styles.columnText}>{'Male'}</Text>
            <Text style={styles.columnText}>{'09123456789'}</Text>
            <Text style={styles.columnText}>{'Mintal'}</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Profile Edit')}>
            <Text style={styles.btnText}>Edit My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
