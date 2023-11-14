import {StyleSheet} from 'react-native';

export const OrderListStyles = StyleSheet.create({
  title: {
    flexDirection: 'row',
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
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
  },
  textItem: {fontFamily: 'Quicksand-SemiBold', fontSize: 15, color: '#000'},
  nameItem: {fontFamily: 'Quicksand-SemiBold', fontSize: 12, color: '#000'},

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
    justifyContent: 'space-between',
    marginTop: 5,
  },
  label: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-Medium',
  },
  input: {
    width: 140,
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

  notes: {
    width: 280,
    borderRadius: 5,
    borderColor: '#7777777',
    borderWidth: 1,
    marginTop: 5,
  },
  savebtn: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  save: {
    backgroundColor: '#DB1B1B',
    width: 140,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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
    fontSize: 14,
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
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 27,
    top: 6,
    left: 10,
  },

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

  cancelColor: {
    backgroundColor: '#B3ACAC',
  },

  btnText: {
    color: '#fff',
  },
  toCash: {
    marginLeft: 100,
    justifyContent: 'flex-end',
  },

  payCashBtnText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
    width: 160,
  },

  TiBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 80,
    height: 30,
  },

  TBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 140,
    height: 30,
  },
  doneColor: {
    backgroundColor: '#12BF38',
  },
  statusDraft: {
    backgroundColor: '#DB1B1B',
  },
  statusNew: {
    backgroundColor: '#4285F4',
  },
  statusCooking: {
    backgroundColor: '#FF7A00',
  },
  statusReady: {
    backgroundColor: '#efb700',
  },
  statusServed: {
    backgroundColor: '#12BF38',
  },
  statusPaying: {
    backgroundColor: 'red',
  },
  statusComplete: {
    backgroundColor: '#12BF38',
  },
});
