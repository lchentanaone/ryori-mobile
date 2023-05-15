import {StyleSheet} from 'react-native';

export const aoStyle = StyleSheet.create({
  activeOrder: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 40,
  },
  aoContent: {
    top: 50,
    alignItems: 'center'
  },
  ryoriIcon: {
    flexDirection: 'row',
    left:0,
    position: 'absolute'
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
    width: '100%',
    backgroundColor: '#fff',
    top: 80,
    justifyContent: 'center',
    position: 'absolute',
  },
  accordionList: {
    borderWidth: 0.7,
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  accordItem: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  itemlist: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold'
},
});
