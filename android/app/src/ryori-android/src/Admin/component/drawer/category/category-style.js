import {StyleSheet} from 'react-native';

export const CategoryStyle = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 30,
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
    width: '70%',
  },
  list: {
    width: '95%'
  },
  listC1: {
    width:'70%'
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
    // backgroundColor: 'blue',
    width: '30%',
    // left: -40
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
  allDropdown: {
    width: '48%',
  },
  menuDropdown: {
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
  menuList: {
    top: 5,
  },

  menuItem: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 6,
    marginBottom: 10,
    height: 130,
    width: 200,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 5,
    // alignItems: 'center',
  },
  menuItemIcon: {
    alignItems: 'flex-end',
  },
  ImageLabe: {
    flexDirection: 'row',
    left: 10,
  },
  menuImage: {
    top: -15,
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  menuLabelPrice: {
    top: -15,
    left: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Quicksand-SemiBold',
  },
  menuPrice: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Medium',
  },
  menuDescrip: {
    top: -10,
    fontSize: 14,
  },
  menuItemRow: {
    flexDirection: 'row',
  },
  menuTable: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 5,
    width: '100%',
    height: 280,
    top: 10,
  },
  tableHeader: {
    backgroundColor: '#E3E7EB',
  },
  menuData: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  menuCellData: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },

  // MODAL
  Modal: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
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
    justifyContent: 'space-between',
    top: 20,
    width: '50%',
  },
  addMenuBtn: {
    width: '30%',
    left: 0,
  },
  updateMenuBtn: {
    width: '30%',
    left: 0,
  },
  cancelOpacity: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B1B1B1',
    borderRadius: 10,
    flexDirection: 'row',
  },
  addMenuOpacity: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12BF38',
    borderRadius: 10,
    flexDirection: 'row',
  },
  deleteMenuOpacity: {
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
  uploadIm2: {
    backgroundColor: 'orange',
    width: '100%',
    // height:200,
  },
  uploadMenuImg: {
    width: '50%',
    padding: 35,
  },
  //--------------------
  imgContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    left: 100,
    width: 200,
    height: 60,
    marginTop:50,
    marginBottom:50
  },
  actionOpacity: {
    width: 40,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontWeight: 500,
    fontSize: 10,
    color: '#f6be00',
    justifyContent: 'center',
  },
});
