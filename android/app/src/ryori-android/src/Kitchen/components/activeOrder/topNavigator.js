import * as React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {aoStyle as styles} from './activeOrderStyle';
import redRyori from '../../images/redRyori.png';
import {List, DataTable} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import PreparingOrder from '../preparing/prepareOrder';

function Done() {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
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
                  <FontAwesome name="circle" color={'#0085ff'} size={20} />
                )}
                style={{
                  fontSize: 30,
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: 15,
                }}>
                <View style={styles.table}>
                  <View style={{flexDirection: 'row', width: '60%'}}>
                    <Text style={styles.quantity}>1 x </Text>
                    <Text style={styles.item}>Pork Combo 1</Text>
                  </View>
                  <View style={styles.buttons}>
                    <TouchableOpacity style={styles.doneBtn}>
                      <Text style={styles.btnText}>Done</Text>
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

const Tab = createMaterialTopTabNavigator();

export default function TopNavigation({navigation}) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  function NewOrder() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
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
                    onPress={() => navigation.navigate('Prepare Table')}>
                    <Text style={styles.preparingText}>Preparing</Text>
                  </TouchableOpacity>
                  <DataTable style={{width: '100%'}}>
                    <DataTable.Row
                      style={{borderBottomWidth: 0, width: '100%'}}>
                      <DataTable.Cell style={{left: 5}}>
                        <Text style={styles.itemlist}>1 x </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{left: -100}}>
                        <Text style={styles.accordItem}>Pork Combo 1</Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row
                      style={{borderBottomWidth: 0, width: '100%'}}>
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
  function PreparingOrder() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
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
                    <FontAwesome name="circle" color={'#0085ff'} size={20} />
                  )}
                  style={{
                    fontSize: 30,
                    backgroundColor: '#fff',
                    width: '100%',
                    borderRadius: 15,
                  }}>
                  <View style={styles.table}>
                    <View style={{flexDirection: 'row', width: '60%'}}>
                      <Text style={styles.quantity}>1 x </Text>
                      <Text style={styles.item}>Pork Combo 1</Text>
                    </View>
                    <View style={styles.buttons}>
                      <TouchableOpacity style={styles.doneBtn}>
                        <Text style={styles.btnText}>Done</Text>
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
  return (
    <>
      <View style={styles.activeOrder}>
        <View style={styles.ryoriIcon}>
          <Image source={redRyori} style={styles.ryori} />
          <Text style={styles.ryoriIconText}>Orders</Text>
        </View>
        <Tab.Navigator
          style={{top: 50}}
          screenOptions={{
            tabBarActiveTintColor: '#DB1B1B',
            tabBarInactiveTintColor: '#000',
          }}>
          <Tab.Screen name="New" component={NewOrder} />
          <Tab.Screen name="Preparing" component={PreparingOrder} />
          <Tab.Screen name="Done" component={Done} />
        </Tab.Navigator>
      </View>
    </>
  );
}
