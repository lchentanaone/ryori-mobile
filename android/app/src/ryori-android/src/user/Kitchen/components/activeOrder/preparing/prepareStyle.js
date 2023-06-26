import {StyleSheet} from 'react-native';

export const PrepareStyle = StyleSheet.create({
  table: {
    top: 60,
  },
  item: {
    left: 20,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  quantity: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  buttonsContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  preparingBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7A00',
    borderRadius: 4,
    width: '40%',
    height: 30,
  },
  ServeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777777',
    borderRadius: 4,
    width: '40%',
    height: 30,
  },
  btnText: {
    color: '#fff',
  },
});
