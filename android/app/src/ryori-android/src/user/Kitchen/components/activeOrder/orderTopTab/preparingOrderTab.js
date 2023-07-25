import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {List, DataTable} from 'react-native-paper';
import {OrderStyle as styles} from '../orderStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';

export default function PreparingOrderTab() {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const [transaction, setTransaction] = useState(null);
  const [branchData, setBranchData] = useState([]);

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const store_Id = await AsyncStorage.getItem('store_Id');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
      console.log('StoresID', {store_Id});
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${API_URL}/pos/transaction?branch_Id=${branch_Id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },

        {headers},
      );
      setTransaction(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  // useEffect(() => {
  //   fetchTransactionsData();
  // }, []);

  return (
    <View
      style={{
        width: '100%',
      }}>
      <View style={styles.accordions}>
        <ScrollView>
          <List.Section>
            <View style={styles.accordionList}>
              <List.Accordion
                title={'Table #2s'}
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: '#000'}}}
                expanded={expanded}
                onPress={handlePress}
                left={props => (
                  <FontAwesome name="circle" color={'#0085ff'} size={20} />
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
                    <TouchableOpacity style={styles.readyServeBtn}>
                      <Text style={styles.btnText}>Ready to serve</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </List.Accordion>
            </View>
          </List.Section>
        </ScrollView>
      </View>
    </View>
  );
}
