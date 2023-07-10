import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import redRyori from '../../../../images/redRyori.png';
import {PrepareStyle as pstyles} from './prepareStyle';
import {OrderStyle as styles} from '../orderStyle';

export default function PreparingOrderTable({navigation}) {
  return (
    <View style={styles.activeOrder}>
      <View style={styles.ryoriIcon}>
        <Image source={redRyori} style={styles.ryori} />
        <Text style={styles.ryoriIconText}>Table {'7'}</Text>
      </View>
      <View style={pstyles.table}>
        <View style={{flexDirection: 'row'}}>
          <Text style={pstyles.quantity}>1 x </Text>
          <Text style={pstyles.item}>Pork Combo 1</Text>
        </View>
        <View style={pstyles.buttonsContainer}>
          <View style={pstyles.buttons}>
            <TouchableOpacity
              style={pstyles.preparingBtn}
              onPress={() => navigation.navigate('Order Top Navigation')}>
              <Text style={pstyles.btnText}>Preparing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={pstyles.ServeBtn}
              onPress={() => navigation.navigate('Order Top Navigation')}>
              <Text style={pstyles.btnText}>Ready to Serve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}