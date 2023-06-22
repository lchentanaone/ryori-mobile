import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {List, DataTable} from 'react-native-paper';
import {OrderStyle as styles} from '../orderStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function DoneOrder() {
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
                  <View style={{flexDirection: 'row', left: -35}}>
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
