import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {List, DataTable} from 'react-native-paper';
import {OrderStyle as styles} from '../orderStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../../../../utils/constants';

export default function NewOrderTab() {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [transactionData, setTransactionData] = useState([]);
  const [getTransactionId, setGetTransactionId] = useState();

  const fetchTransactionsData = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const branch_Id = await AsyncStorage.getItem('branch_Id');
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
      console.log({transactionData});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchTransactionsData();
  }, []);

  const getTransaction = item => {
    setGetTransactionId(item.id);
    navigation.navigate('Prepare Table Tab', {item});
    console.log(item);
  };

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
                  titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 16}}
                  theme={{colors: {primary: '#000'}}}
                  expanded={expanded}
                  onPress={handlePress}
                  // left={props => (
                  //   <FontAwesome name="circle" color={'#0085ff'} size={20} />
                  // )}
                  style={styles.accordionsStyle}>
                  <TouchableOpacity
                    style={styles.toPreparing}
                    onPress={() => getTransaction(item.id)}>
                    <Text style={styles.preparingText}>{item.status}</Text>
                  </TouchableOpacity>
                  <DataTable style={{width: '100%'}}>
                    {item.transactionItem.map((transItem, transIndex) => (
                      <DataTable.Row
                        key={transIndex}
                        style={{borderBottomWidth: 0, width: '100%'}}>
                        <DataTable.Cell style={{flex: 0.15}}>
                          <Text style={styles.itemlist}>
                            {transItem.quantity}
                          </Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{flex: 0.8}}>
                          <Text style={styles.accordItem}>
                            {transItem.menuItem.title || ''}
                          </Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                  </DataTable>
                </List.Accordion>
              </View>
            </List.Section>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
