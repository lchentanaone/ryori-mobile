import {StyleSheet} from 'react-native';

export const aoStyle = StyleSheet.create({
  activeOrder: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  ryoriIcon: {
    flexDirection: 'row',
    left: -50,
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
  //Accodions
  accordions: {
    top: 80,
    justifyContent: 'center',
    position: 'absolute',
  },
  accordionList: {
    position: 'relative',
    width: 330,
    padding: 0,
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  accordionTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accordItem: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
});
