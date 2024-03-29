import {StyleSheet} from 'react-native';

export const OrderStyle = StyleSheet.create({
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
  //---
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
  // activeOrder: {
  //   backgroundColor: '#fff',
  //   flex: 1,
  //   position: 'relative',
  //   paddingHorizontal: 30,
  // },
  // aoContent: {
  //   alignItems: 'flex-start',
  // },
  // ryoriIcon: {
  //   top: 50,
  //   flexDirection: 'row',
  //   left: 0,
  //   width: '100%',
  // },
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
  // topBtns: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  //Accodions
  accordions: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  accordionList: {
    borderWidth: 0.7,
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginTop: 10,
  },
  // accordItem: {
  //   color: '#000',
  //   fontSize: 16,
  //   fontFamily: 'Quicksand-SemiBold',
  // },
  // itemlist: {
  //   color: '#000',
  //   fontSize: 15,
  //   fontFamily: 'Quicksand-SemiBold',
  // },
  // accordionsStyle: {
  //   fontSize: 30,
  //   backgroundColor: '#fff',
  //   width: '100%',
  //   borderRadius: 15,
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
    fontSize: 15,
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
    fontFamily: 'Quicksand-SemiBold',
  },
  buttons: {
    marginBottom: 5,
    width: '20%',
    alignItems: 'flex-start',
  },
  // doneBtn: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#D9D9D9',
  //   borderRadius: 4,
  //   width: 80,
  //   height: 30,
  // },
  cancelOrder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB1B1B',
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
  newOrderBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    width: 80,
    height: 30,
  },
  newBtnText: {
    color: '#464646',
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
  },
  preparingBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    borderRadius: 4,
    width: 80,
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
  preparingBtnText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
  },
  // doneBtnText: {
  //   color: '#464646',
  //   fontSize: 14,
  //   fontFamily: 'Quicksand-Bold',
  // },
});
