import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {aoStyle as styles} from './activeOrderStyle';
import redRyori from '../../images/redRyori.png';
import {List, DataTable} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function PreparingOrder() {
  return (
    <View>
      <Text>preparing</Text>
    </View>
  );
}

export default function ActiveOrder() {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.activeOrder}>
      <View style={styles.aoContent}>
        <View style={styles.ryoriIcon}>
          <Image source={redRyori} style={styles.ryori} />
          <Text style={styles.ryoriIconText}>Orders</Text>
        </View>
        <View style={styles.accordions}>
          <List.Section>
            <View style={styles.accordionList}>
              <List.Accordion
                title="Table #2"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                expanded={expanded}
                onPress={handlePress}
                // left={props => <List.Icon {...props} icon="folder" />}
                left={props => (
                  <FontAwesome name="circle" color={'#0085ff'} size={30} />
                )}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
          <List.Section>
            <View style={styles.accordionList}>
              <List.Accordion
                title="Table #12"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                left={props => (
                  <FontAwesome name="circle" color={'#0085ff'} size={30} />
                )}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
          <List.Section>
            <View style={styles.accordionList}>
              <List.Accordion
                title="Table #3"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                left={props => (
                  <FontAwesome name="circle" color={'#ff7700'} size={30} />
                )}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
          <List.Section>
            <View style={styles.accordionList}>
              <List.Accordion
                title="Table #7"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                left={props => (
                  <FontAwesome name="circle" color={'#ff7700'} size={30} />
                )}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={styles.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={styles.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
        </View>
      </View>
    </View>
  );
}
