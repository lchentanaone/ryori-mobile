import {StyleSheet} from 'react-native';

export const InventoryStyle = StyleSheet.create({
  inventContainer: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  inventContent: {
    width: '100%',
    top: 15,
  },
  inventTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-Bold',
  },
  inventTable: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 5,
    width: '100%',
    height: 250,
    top: 10,
  },
  tableHeader: {
    backgroundColor: '#E3E7EB',
  },
  inventData: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  inventCellData: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  inventformCon: {
    width: '100%',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //------------
  DropdownContainer: {
    width: '18%',
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: '#E6E6E6',
    height: 34,
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    color: '#000',
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },

  inventoryInput: {
    width: '35%',
    fontSize: 15,
    height: 35,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  netWtQtyInput: {
    width: '14%',
    fontSize: 15,
    height: 35,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  addInvetoryOpacity: {
    width: '15%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 10,
    flexDirection: 'row',
  },
  addInventTextBtn: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  invetoryFilter: {
    flexDirection: 'row',
  },
  invetoryBtn: {
    marginLeft: 5,
    width: '15%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB1B1B',
    borderRadius: 3,
    flexDirection: 'row',
  },
  filterTextBtn: {
    fontSize: 13,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  manageBtnOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  itemBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
  // manageTextBtn: {
  //   fontSize: 12,
  //   color: '#fff',
  //   justifyContent: 'center',
  //   fontFamily: 'Quicksand-Bold',
  // },
  //------------------
  // invetoryModal: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  // modalView: {
  //   width: '50%',
  //   margin: 20,
  //   backgroundColor: '#fff',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // modalContent: {
  //   width: '100%',
  // },

  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {},
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // ----------

  // modalDropdown: {
  //   width: '100%',
  //   left: 2,
  //   backgroundColor: 'white',
  //   borderColor: '#E6E6E6',
  //   height: 34,
  //   shadowColor: '#000',
  //   elevation: 5,
  //   borderRadius: 8,
  //   paddingHorizontal: 8,
  //   marginBottom: 10,
  // },
  // modalInput: {
  //   width: '100%',
  //   fontSize: 15,
  //   height: 35,
  //   padding: 10,
  //   backgroundColor: '#fff',
  //   borderRadius: 8,
  //   marginBottom: 10,
  //   shadowColor: '#000',
  //   elevation: 5,
  //   color: '#000',
  //   fontFamily: 'Quicksand-SemiBold',
  // },
  // modalNetWQtyInput: {
  //   width: '48%',
  //   fontSize: 15,
  //   height: 35,
  //   padding: 10,
  //   backgroundColor: '#fff',
  //   borderRadius: 8,
  //   marginBottom: 10,
  //   shadowColor: '#000',
  //   elevation: 5,
  //   color: '#000',
  //   fontFamily: 'Quicksand-SemiBold',
  // },
  // modalNetWQty: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // modalButton: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  // },
  // updateInvetoryOpacity: {
  //   width: '48%',
  //   height: 35,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#4285F4',
  //   borderRadius: 10,
  //   flexDirection: 'row',
  // },
  // delInvetoryOpacity: {
  //   width: '48%',
  //   height: 35,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#DB1B1B',
  //   borderRadius: 10,
  //   flexDirection: 'row',
  // },
  //
  centeredViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: 250,
    width: 250,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  dropdownModal: {
    width: '90%',
  },

  modalButton: {
    borderRadius: 8,
    padding: 10,
    marginTop: 30,
    elevation: 2,
    width: 100,
    backgroundColor: '#2196F3',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  qtyReady: {
    width: '100%',
    fontSize: 15,
    height: 35,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
});

export const CategoryInventoryStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  content: {
    width: '100%',
    position: 'absolute',
    top: 15,
    // backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
    marginBottom: 10,
  },
  input: {
    width: '40%',
    fontSize: 15,
    height: 35,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  saveBtn: {
    backgroundColor: '#4285F4',
    width: 100,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Quicksand-Meduim',
  },
  tableWidth: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: 5,
    elevation: 5,
    width: '100%',
    height: 250,
  },
  textHeader: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-SemiBold',
  },
  horContainer: {
    flexDirection: 'row',
  },
  list: {
    width: '95%',
  },
  tableHeader: {
    backgroundColor: '#EEF2F6',
  },
});
