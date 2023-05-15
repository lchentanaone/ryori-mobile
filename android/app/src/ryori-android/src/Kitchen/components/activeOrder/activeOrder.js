import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {aoStyle} from './activeOrderStyle';
import redRyori from '../../images/redRyori.png';
import {List, DataTable} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ActiveOrder() {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={aoStyle.activeOrder}>
      <View style={aoStyle.aoContent}>
        <View style={aoStyle.ryoriIcon}>
          <Image source={redRyori} style={aoStyle.ryori} />
          <Text style={aoStyle.ryoriIconText}>Active Orders</Text>
        </View>
        <View style={aoStyle.accordions}>
          <List.Section>
            <View style={aoStyle.accordionList}>
              <List.Accordion
                title="Table #2"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                expanded={expanded}
                onPress={handlePress}
                // left={props => <List.Icon {...props} icon="folder" />}
                left={props => <FontAwesome name="circle" color={'#0085ff'} size={30} />}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                  <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
          <List.Section>
            <View style={aoStyle.accordionList}>
              <List.Accordion
                title="Table #12"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                left={props => <FontAwesome name="circle" color={'#0085ff'} size={30} />}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                  <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
          <List.Section>
            <View style={aoStyle.accordionList}>
              <List.Accordion
                title="Table #3"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                left={props => <FontAwesome name="circle" color={'#ff7700'} size={30} />}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                  <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </List.Accordion>
            </View>
          </List.Section>
          <List.Section>
            <View style={aoStyle.accordionList}>
              <List.Accordion
                title="Table #7"
                titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18}}
                theme={{colors: {primary: 'black'}}}
                left={props => <FontAwesome name="circle" color={'#ff7700'} size={30} />}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <DataTable style={{width: '100%'}}>
                  <DataTable.Row style={{borderBottomWidth: 0, width: '100%'}}>
                    <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{borderBottomWidth: 0}}>
                  <DataTable.Cell style={{left: -60}}>
                      <Text style={aoStyle.itemlist}>1 x </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{left: -130}}>
                      <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
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
