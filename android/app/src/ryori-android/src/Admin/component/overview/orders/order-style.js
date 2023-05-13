/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const orderStyle = StyleSheet.create({
  overAll: {
    position: 'absolute',
    backgroundColor: 'rgba(20, 20, 22, 0.5)',
    borderRadius: 40,
    top: 60,
    width: 700,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#37343d',
    borderWidth: 1,
  },
  overAllContent: {
    color: 'red',
    fontSize: 100,
    top: 0,
    alignItems: 'center',
  },
  overAllText: {
    color: 'white',
    fontWeight: 900,
    fontSize: 12,
    textAlign: 'center',
    zIndex: 10,
    position: 'relative',
  },
  overAllValue: {
    color: '#fff',
    fontWeight: 900,
    fontSize: 18,
    top: 2,
  },
  tableData: {
    justifyContent: 'flex-start',
    top: 116,
    backgroundColor: 'rgba(68,68,68, 0.5)',
    borderRadius: 20,
    width: 700,
    height: 240,
    position: 'absolute',
  },

  orderData: {
    fontSize: 11,
    fontWeight: 500,
    color: '#fff',
  },

  actionBtn: {
    fontSize: 10,
    fontWeight: 500,
    // position: 'absolute',
  },
  actionOpacity: {
    width: 40,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontWeight: 500,
    fontSize: 10,
    color: '#f6be00',
    justifyContent: 'center',
  },
  orderCellData: {
    fontSize: 10,
    fontWeight: 500,
    color: '#fff',
  },
});
