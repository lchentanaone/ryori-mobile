import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {List, DataTable} from 'react-native-paper';
import {OrderStyle as styles} from '../orderStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function NewOrderTab() {
  const navigation = useNavigation();
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

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
                title="Table #2"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: '#000'}}}
                expanded={expanded}
                onPress={handlePress}
                // left={props => (
                //   <FontAwesome name="circle" color={'#0085ff'} size={20} />
                // )}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <TouchableOpacity
                  style={styles.toPreparing}
                  onPress={() => navigation.navigate('Prepare Table Tab')}>
                  <Text style={styles.preparingText}>Preparing</Text>
                </TouchableOpacity>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: 5}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -100}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: 5}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -100}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
        </ScrollView>
      </View>
    </View>
  );
}
