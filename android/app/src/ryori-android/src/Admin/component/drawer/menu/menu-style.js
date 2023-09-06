import {StyleSheet} from 'react-native';

export const MenuStyle = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  menuContent: {
    width: '100%',
    position: 'absolute',
    top: 15,
    // backgroundColor: '#fff',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuC1: {
    flexDirection: 'column',
    width: '25%',
  },
  menuTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
    marginBottom: 10,
  },
  addIcon: {
    fontSize: 25,
    color: '#fff',
    top: 1,
  },
  addMenuBtn: {
    width: '100%',
    left: 0,
  },
  addMenuOpacity: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB1B1B',
    borderRadius: 10,
    flexDirection: 'row',
  },
  addMenuTextBtn: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  // Column2
  menuC2: {
    width: '40%',
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 35,
    borderRadius: 10,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#E6E6E6',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    color: '#000',
    left: 10,
    height: 30,
    borderRadius: 10,
    fontSize: 14,
    width: '90%',
    paddingLeft: 8,
    padding: 0,
    fontFamily: 'Quicksand-Medium',
  },
  SearchIcon: {
    fontSize: 18,
    left: 10,
    color: '#B1B1B1',
  },
  filterDropdown: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 2,
    top: 5,
  },
  // allDropdown: {
  //   width: '48%',
  // },
  // menuDropdown: {
  //   left: 2,
  //   backgroundColor: 'white',
  //   borderColor: '#E6E6E6',
  //   height: 34,
  //   shadowColor: '#000',
  //   elevation: 5,
  //   borderRadius: 8,
  //   paddingHorizontal: 8,
  // },
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
  menuItem: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 6,
    margin: 2,
    height: 130,
    width: '98%',
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  menuItemIcon: {
    alignItems: 'flex-end',
  },
  menuDetails: {
    flexDirection: 'row',
  },
  menuImage: {
    top: -5,
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  menuLabelPrice: {
    top: -10,
    left: 10,
    textAlign: 'left',
    justifyContent: 'center',
    // alignItems: 'center',
  },

  menuLabel: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
  },
  menudescription: {
    color: '#71797E',
    fontSize: 14,
    fontFamily: 'Quicksand-Medium',
    width: 180,
  },

  priceQtyBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  priceQty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  price: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 28,
    width: 70,
  },
  menuPrice: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
  },
  menuQty: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-Medium',
  },

  menuItemRow: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  // menuTable: {
  //   justifyContent: 'flex-start',
  //   backgroundColor: '#fff',
  //   shadowColor: '#000',
  //   elevation: 5,
  //   borderRadius: 5,
  //   width: '100%',
  //   height: 280,
  //   top: 10,
  // },
  // tableHeader: {
  //   backgroundColor: '#E3E7EB',
  // },
  // menuData: {
  //   fontSize: 16,
  //   fontWeight: 500,
  //   color: '#000',
  //   fontFamily: 'Quicksand-SemiBold',
  // },
  // menuCellData: {
  //   fontSize: 14,
  //   fontWeight: 500,
  //   color: '#000',
  //   fontFamily: 'Quicksand-SemiBold',
  // },

  // MODAL
  // Modal: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  // modalView: {
  //   width: '100%',
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
  //----------------------------------------------------------------
  menuItems: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 6,
    height: 180,
    width: '95%',
    borderRadius: 3,
    margin: 5,
    marginLeft: 10,
  },
  menuImages: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    height: 90,
    width: '100%',
  },
  menuLabels: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-SemiBold',
    width: 150,
  },
  modal: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '35%',
    height: 310,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
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
  modalContent: {
    width: '100%',
  },
  // modalForm: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  menuItems1: {
    paddingVertical: 10,
    height: 180,
    flex: 1,
    width: '100%',
    borderRadius: 3,
    alignItems: 'center',
  },
  modalPrice: {
    height: 25,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuImagesCon: {
    width: '80%',
    alignItems: 'center',
  },
  menuImages1: {
    borderRadius: 10,
    height: 110,
    width: 210,
  },
  modalMenuLabel: {
    width: '100%',
    alignItems: 'center',
    marginTop: 3,
    paddingHorizontal: 10,
  },
  moddalMenuPrice: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Quicksand-SemiBold',
  },
  modalMenuText: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Quicksand-Bold',
  },
  menudescription1: {
    top: 8,
    color: '#71797E',
    fontSize: 14,
    fontFamily: 'Quicksand-Medium',
    paddingHorizontal: 10,
  },
  modalBtn: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  menuModalBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  updateModalBtn: {
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 35,
    width: 110,
  },
  closeModal: {
    backgroundColor: '#909090',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 35,
    width: 110,
  },
  modalBtnText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
  },
  //----------------------------------------------------------------
});
export const DropdownStyle = StyleSheet.create({
  DropdownContainer: {
    width: '48%',
  },
  dropdown: {
    left: 2,
    backgroundColor: 'white',
    borderColor: '#E6E6E6',
    height: 34,
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Quicksand-Medium',
  },
  selectedTextStyle: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});

export const AddMenuStyle = StyleSheet.create({
  addMenuCon: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  addMenuContent: {
    width: '100%',
    position: 'absolute',
    top: 15,
  },
  InputAndImageCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addMenuForm: {
    width: '50%',
  },
  addMenuTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
    marginBottom: 10,
  },

  addMenuInput: {
    width: '100%',
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
  inputRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  foodPrice: {
    width: '50%',
    fontSize: 15,
    height: 35,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  descriptInput: {
    textAlignVertical: 'top',
    width: '100%',
    fontSize: 15,
    height: 80,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  buttons: {
    flexDirection: 'row',
    width: '50%',
    marginTop: 5,
  },
  addMenuBtn: {
    width: '30%',
  },
  updateMenuBtn: {
    width: '30%',
    left: 0,
  },
  menuFormBtn: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignItems: 'center',
    width: '31%',
  },
  cancelOpacity: {
    backgroundColor: '#B1B1B1',
  },
  addMenuOpacity: {
    backgroundColor: '#12BF38',
    marginLeft: 15,
  },
  deleteMenuOpacity: {
    backgroundColor: '#DB1B1B',
    left: 10,
  },
  addMenuTextBtn: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  // uploadIm2: {
  //   backgroundColor: 'orange',
  //   width: '100%',
  //   // height:200,
  // },
  uploadMenuImg: {
    width: '50%',
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  //--------------------
  // actionOpacity: {
  //   width: 40,
  //   height: 35,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // actionText: {
  //   fontWeight: 500,
  //   fontSize: 10,
  //   color: '#f6be00',
  //   justifyContent: 'center',
  // },
});
