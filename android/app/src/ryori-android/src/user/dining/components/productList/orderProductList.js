import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {OrderListStyles as styles} from './orderProductListStyles';
import male from '../../../images/male3.png';
import redRyori from '../../../images/redRyori.png';
import {List} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

export default function OrderProductList({navigation}) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <View style={styles.orderProducts}>
        <View style={styles.crewHeader}>
          <View style={styles.ryoriIconTitle}>
            <Image source={redRyori} style={styles.ryori} />
            <Text style={styles.ryoriIconText}>Orders</Text>
          </View>
          <TouchableOpacity
            style={styles.viewProfile}
            onPress={() => navigation.navigate('Profile Employee')}>
            <Image source={male} style={styles.crewImage} />
            <View style={{top: -5, left: 5}}>
              <Text style={styles.crewName}>{'John Doe'}</Text>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
          }}>
          <View style={styles.accordions}>
            <ScrollView>
              <List.Section>
                <View style={styles.accordionList}>
                  <List.Accordion
                    title={'Table #2'}
                    titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                    theme={{colors: {primary: '#000'}}}
                    expanded={expanded}
                    onPress={handlePress}
                    left={props => (
                      <FontAwesome name="circle" color={'#FF7A00'} size={20} />
                    )}
                    style={{
                      fontSize: 30,
                      backgroundColor: '#fff',
                      width: '100%',
                      borderRadius: 15,
                    }}>
                    <View style={styles.table}>
                      <View style={{flexDirection: 'row', left: -35}}>
                        <Text style={styles.quantity}>1 x </Text>
                        <Text style={styles.item}>Pork Combo 1</Text>
                      </View>
                      <View style={styles.buttons}>
                        <TouchableOpacity
                          style={styles.readyServeBtn}
                          onPress={() =>
                            navigation.navigate('OrderTableNumber')
                          }>
                          <Text style={styles.btnText}>Preparing</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </List.Accordion>
                </View>
              </List.Section>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}
