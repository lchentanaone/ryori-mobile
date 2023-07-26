import {StyleSheet} from 'react-native';

export const PrepareStyle = StyleSheet.create({
  table: {
    marginTop: 60,
  },
  item: {
    left: 20,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
    width: '85%',
  },
  quantity: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  buttonsContainer: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: 8,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  preparingBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7A00',
    borderRadius: 4,
    width: '33%',
    height: 25,
  },
  ServeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777777',
    borderRadius: 4,
    width: '33%',
    height: 25,
  },
  btnText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
  },
});
