import {StyleSheet} from 'react-native';

export const OrderTableStyles = StyleSheet.create({
  orderTable: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingVertical: 40,
    paddingHorizontal: 30,
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
  orderItemTable: {
    marginTop: 20,
    height: '78%',
  },
  orderItem: {
    marginBottom: 5,
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
    fontSize: 12,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F8',
    height: 35,
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
  priceContainer: {
    width: '40%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  priceText: {
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 15,
  },
  buttonCon: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  checkoutBtn: {
    backgroundColor: '#DB1B1B',
    height: 40,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontFamily: 'Quicksand-SemiBold',
    color: '#fff',
    fontSize: 15,
  },
  totalAmount: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    padding: 20,
  },
  totalAmountText: {
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 18,
  },
});
