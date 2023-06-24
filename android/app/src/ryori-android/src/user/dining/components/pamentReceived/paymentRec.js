import {View, Text, Image} from 'react-native';
import React from 'react';
import RyoriLogo from '../../../images/redRyori.png';
import {PaymentReceivedStyles as styles} from './paymentStyles';
import PaymentReceivedIcon from '../../../images/paymentRec.png';

export default function PaymentReceived() {
  return (
    <View style={styles.orderTable}>
      <View style={styles.ryoriIcon}>
        <Image source={RyoriLogo} style={styles.ryori} />
        <Text style={styles.ryoriIconText}>Payment Received</Text>
      </View>
      <View style={styles.paymentReceivedIcon}>
        <Image source={PaymentReceivedIcon} style={styles.paymentCheck} />
        <Text style={styles.paymentText}>Payment Received</Text>
        <Text style={styles.thankyouText}>Thank you and come again!</Text>
      </View>
    </View>
  );
}
