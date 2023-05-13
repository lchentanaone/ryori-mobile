/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const transacStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    
  },
  row: {
    top:0,
    flexDirection: 'row',
    position: 'absolute',
  },
  trasactionList: {
    backgroundColor: '#A0A0A0',
    alignItems: 'center',
    width: 390,
    height: 400,
  },
  trasactionArchive: {
    backgroundColor: '#696969',
    alignItems: 'center',
    width: 390,
    height: 400,
  },

  reportTrasaction: {
    backgroundColor: '#A0A0A0',
    alignItems: 'center',
    width: "100%",
    height: 400,
  },
  btn: {
    position: 'absolute',
    flexDirection: 'row',
    top: 250
  }
});
