import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {aoStyle} from './activeOrderStyle';
import redRyori from '../../images/redRyori.png';
import {List, DataTable} from 'react-native-paper';
import {prodStyle} from '../products/product-style';

export default function ActiveOrder() {
  
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={aoStyle.activeOrder}>
      <View style={aoStyle.ryoriIcon}>
        <Image source={redRyori} style={aoStyle.ryori} />
        <Text style={aoStyle.ryoriIconText}>Active Orders</Text>
      </View>
      <View style={aoStyle.accordions}>
        <List.Section>
          <View style={aoStyle.accordionList}>
            <List.Accordion
              title="Table #2"
              icon={null}
              titleStyle={{fontFamily: 'Quicksand-Bold'}}
              theme={{colors: {primary: 'black'}}}
              expanded={expanded}
              onPress={handlePress}
              // left={props => <List.Icon {...props} icon="folder" />}
              style={{
                fontSize: 30,
                backgroundColor: '#fff',
                width: 305,
                borderRadius: 15,
              }}>
              <DataTable style={{fontSize: 30, width: 300}}>
                <DataTable.Row>
                  <DataTable.Cell style={{left: 0}}>
                    <Text style={prodStyle.porklist}>1 x </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{left: -100}}>
                    <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{left: 0}}>
                    <Text style={prodStyle.porklist}>1 x </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{left: -100}}>
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
              icon={null}
              titleStyle={{fontFamily: 'Quicksand-Bold'}}
              theme={{colors: {primary: 'black'}}}
              // left={props => <List.Icon {...props} icon="folder" />}
              style={{
                fontSize: 30,
                backgroundColor: '#fff',
                width: 310,
                borderRadius: 15,
              }}>
              <DataTable style={{fontSize: 30, width: 300}}>
                <DataTable.Row>
                  <DataTable.Cell style={{left: 0}}>
                    <Text style={prodStyle.porklist}>1 x </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{left: -100}}>
                    <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{left: 0}}>
                    <Text style={prodStyle.porklist}>1 x </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{left: -100}}>
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
              icon={null}
              titleStyle={{fontFamily: 'Quicksand-Bold'}}
              theme={{colors: {primary: 'black'}}}
              // left={props => <List.Icon {...props} icon="folder" />}
              style={{
                fontSize: 30,
                backgroundColor: '#fff',
                width: 310,
                borderRadius: 15,
              }}>
              <DataTable style={{fontSize: 30, width: 300}}>
                <DataTable.Row>
                  <DataTable.Cell style={{left: 0}}>
                    <Text style={prodStyle.porklist}>1 x </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{left: -100}}>
                    <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{left: 0}}>
                    <Text style={prodStyle.porklist}>1 x </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{left: -100}}>
                    <Text style={aoStyle.accordItem}>Pork Combo 1</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </List.Accordion>
          </View>
        </List.Section>
      </View>
    </View>
  );
}
