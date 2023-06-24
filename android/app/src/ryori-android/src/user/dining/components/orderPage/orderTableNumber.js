import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import redRyori from '../../../images/redRyori.png';
import menuPhotos from '../../../images/Chicken.jpg';
import {OrderTableStyles as styles} from './orderTableStyles';
import Entypo from 'react-native-vector-icons/Entypo';

export default function OrderTableNumber({navigation}) {
  const [quantity, setQuantity] = useState('0');

  const handleIncrease = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity.toString());
  };

  const handleDecrease = () => {
    const newQuantity = parseInt(quantity) - 1;
    if (newQuantity >= 0) {
      setQuantity(newQuantity.toString());
    }
  };
  return (
    <View style={styles.orderTable}>
      <View style={styles.ryoriIcon}>
        <Image source={redRyori} style={styles.ryori} />
        <Text style={styles.ryoriIconText}>Table {'7'}</Text>
      </View>
      <View style={styles.orderItem}>
        <View>
          <Image source={menuPhotos} style={styles.menuPhoto} />
        </View>
        <View style={styles.orderItemDetails}>
          <View>
            <Text style={styles.menuTitle}>{'Chicken Combo 1'}</Text>
            <Text style={styles.addOns}>{'With rice and drink (12 oz)'}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.qtyContainer}>
              <TouchableOpacity onPress={handleDecrease} style={styles.qtyIcon}>
                <Entypo name="minus" size={18} />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={text => setQuantity(text)}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={handleIncrease} style={styles.qtyIcon}>
                <Entypo name="plus" size={18} />
              </TouchableOpacity>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>₱ {'1799'}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonCon}>
        <View style={styles.totalAmount}>
          <Text style={styles.totalAmountText}>Total</Text>
          <Text style={styles.totalAmountText}>₱ {'1799'}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate('PaymentReceived')}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
