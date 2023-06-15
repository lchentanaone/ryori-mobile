import {StyleSheet} from 'react-native';

export const PrepareStyle = StyleSheet.create({
  prepare: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 40,
  },
  ryoriIcon: {
    top: 50,
    flexDirection: 'row',
    left: 0,
    width: '100%',
  },
  ryori: {
    width: 40,
    height: 50,
  },
  ryoriIconText: {
    fontFamily: 'Quicksand-Bold',
    color: '#000',
    fontSize: 27,
    top: 6,
    left: 10,
  },
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
