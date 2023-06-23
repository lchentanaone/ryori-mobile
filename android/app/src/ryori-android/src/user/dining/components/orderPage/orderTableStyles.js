import {StyleSheet} from 'react-native';

export const OrderTableStyles = StyleSheet.create({
  orderTable: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  ryoriIcon: {
    flexDirection: 'row',
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
    marginLeft: 10,
  },
  orderItem: {
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuPhoto: {
    width: 110,
    height: 90,
    borderRadius: 12,
  },
  orderItemDetails: {
    width: '65%',
    // backgroundColor: 'red',
  },
  menuTitle: {
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 18,
  },
  addOns: {
    fontFamily: 'Quicksand-Medium',
    color: '#000',
    fontSize: 15,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F8',
    height: 40,
    borderRadius: 20,
  },
  input: {
    marginHorizontal: 5,
    textAlign: 'center',
    color: '#000',
  },
  qtyIcon: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
