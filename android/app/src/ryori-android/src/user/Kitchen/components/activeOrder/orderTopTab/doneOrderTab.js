import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {List, DataTable} from 'react-native-paper';
import {OrderStyle as styles} from '../orderStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';

export default function DoneOrder() {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [transactionData, setTransactionData] = useState([]);

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
      setTransactionData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    fetchTransactionsData();
  }, []);
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View style={styles.accordions}>
        <ScrollView>
          {transactionData.map((item, index) => (
            <List.Section key={index}>
              <View style={styles.accordionList}>
                <List.Accordion
                  title={`Table #2 ${item.id}`}
                  titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                  theme={{colors: {primary: '#000'}}}
                  expanded={expanded}
                  onPress={handlePress}
                  left={props => (
                    <FontAwesome name="circle" color={'#0085ff'} size={20} />
                  )}>
                  {item.transactionItem.map((transItem, transIndex) => (
                    <View key={transIndex} style={styles.table}>
                      <View style={styles.qtyItem}>
                        <Text style={styles.quantity}>
                          {transItem.quantity}
                        </Text>
                        <Text style={styles.item}>
                          {transItem.menuItem.title || ''}
                        </Text>
                      </View>
                      <View style={styles.buttons}>
                        <TouchableOpacity style={styles.doneBtn}>
                          <Text style={styles.doneBtnText}>
                            {transItem.status}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </List.Accordion>
              </View>
            </List.Section>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
