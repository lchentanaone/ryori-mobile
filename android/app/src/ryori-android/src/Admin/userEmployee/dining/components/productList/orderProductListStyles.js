import {StyleSheet} from 'react-native';

export const OrderListStyles = StyleSheet.create({
  title: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#999999',
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  content: {
    padding: 5,
  },
  tableContainer: {
    // backgroundColor: 'red',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
  },
  textItem: {fontFamily: 'Quicksand-SemiBold', fontSize: 15, color: '#000'},

  columnItems: {width: 210, textAlign: 'left'},

  headerText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 17,
    color: '#000',
  },
  columnMngBtn: {
    width: 70,
    textAlign: 'center',
  },
  columnItem: {
    width: 210,
    // backgroundColor: 'red',
    textAlign: 'center',
  },
  columnQty: {
    width: 50,
    textAlign: 'center',
  },
  mngBtn: {
    width: 70,
    textAlign: 'center',
  },
  tableText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    color: '#000',
    left: 10,
  },
  //-----
  textFields: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 40,

    marginLeft: 5,
    borderColor: '#757575',
  },
  inputs: {
    textAlign: 'center',
    padding: 5,
    height: 30,
    borderWidth: 1,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 5,
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    borderColor: '#757575',
  },
  chargeDiscountInput: {
    width: 80,
    marginLeft: 10,
  },

  //-----
  orderProducts: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  crewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ryoriIconTitle: {
    flexDirection: 'row',
  },
  crewImage: {
    height: 40,
    width: 40,
  },
  viewProfile: {
    flexDirection: 'row',
  },
  crewName: {
    marginTop: 5,
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 16,
  },
  viewProfileText: {
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 10,
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

  //-----------
  accordions: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '98%',
    marginTop: 20,
  },
  accordionList: {
    borderWidth: 0.7,
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  // accordItem: {
  //   color: '#000',
  //   fontSize: 16,
  //   fontFamily: 'Quicksand-Bold',
  // },
  // itemlist: {
  //   color: '#000',
  //   fontSize: 16,
  //   fontFamily: 'Quicksand-Bold',
  // },
  // toPreparing: {
  //   alignItems: 'center',
  //   backgroundColor: '#0085FF',
  //   borderRadius: 4,
  //   left: 20,
  //   width: 100,
  //   height: 25,
  // },
  // preparingText: {
  //   color: '#fff',
  //   fontSize: 14,
  //   fontFamily: 'Quicksand-Bold',
  // },
  item: {
    left: 10,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
  },
  table: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  qtyItem: {
    flexDirection: 'row',
    width: '80%',
    marginLeft: -40,
  },
  quantity: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  buttons: {
    marginBottom: 5,
    width: '20%',
    alignItems: 'flex-start',
  },
  newOrder: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 40,
    height: 30,
  },
  servedBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12BF38',
    borderRadius: 4,
    width: 80,
    height: 30,
  },
  preparingBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    borderRadius: 4,
    width: 80,
    height: 30,
  },
  servingBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 4,
    width: 80,
    height: 30,
  },
  // cancelOrder: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#B3ACAC',
  //   borderRadius: 4,
  //   width: 80,
  //   height: 30,
  // },
  // readyServeBtn: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#FF7A00',
  //   borderRadius: 4,
  //   width: 80,
  //   height: 30,
  // },
  btnText: {
    color: '#fff',
  },
  toCash: {
    marginLeft: 100,
    justifyContent: 'flex-end',
  },
  toCashDone: {
    width: 200,
    height: 30,
    marginLeft: 60,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  payCashBtnText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
    width: 160,
  },
  toPrepareBtn: {
    backgroundColor: '#4285F4',
    width: 140,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  doneStatus: {
    backgroundColor: '#4285F4',
    height: 30,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
