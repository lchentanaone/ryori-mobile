import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import redRyori from '../../images/redRyori.png';
import {PrepareStyle as styles} from './prepareStyle';
import {List, DataTable} from 'react-native-paper';

export default function PreparingOrderTable({navigation}) {
  return (
    <View style={styles.prepare}>
      <View style={styles.ryoriIcon}>
        <Image source={redRyori} style={styles.ryori} />
        <Text style={styles.ryoriIconText}>Table {'7'}</Text>
      </View>
      <View style={styles.table}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.quantity}>1 x </Text>
          <Text style={styles.item}>Pork Combo 1</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.preparingBtn}
              onPress={() => navigation.navigate('top navigate')}>
              <Text style={styles.btnText}>Preparing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ServeBtn}>
              <Text style={styles.btnText}>Ready to Serve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
