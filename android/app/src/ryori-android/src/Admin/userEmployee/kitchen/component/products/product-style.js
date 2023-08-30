import {StyleSheet} from 'react-native';

export const prodStyle = StyleSheet.create({
  products: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 20,
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

  // SearchBar
  searchInventory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'red',
    // // height: 100,
  },
  invetoryIcon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '20%',
    top: 10,
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f8',
    height: 45,
    borderRadius: 5,
    width: '80%',
    marginTop: 20,
    // left: 30
  },
  searchInput: {
    backgroundColor: '#f6f6f8',
    color: '#000',
    left: 10,
    height: 43,
    borderRadius: 10,
    fontSize: 16,
    width: 280,
    paddingLeft: 8,
    padding: 0,
    fontFamily: 'Quicksand-Medium',
  },
  SearchIcon: {
    left: 10,
    color: '#000',
  },
  //Tables
  table: {
    marginTop: 20,
    width: '100%',
  },
  productTable: {
    width: '100%',
    // height: 150,
  },
  tableProductHeader: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
  productQty: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-Bold',
  },
  porklist: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-SemiBold',
  },
  //----------------------------------------------------------------
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F8',
    height: 35,
    borderRadius: 5,
  },
  input: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Quicksand-Bold',
  },
  // qtyIcon: {
  //   width: 30,
  //   height: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // porklistQty: {
  //   color: '#000',
  //   fontSize: 15,
  //   fontFamily: 'Quicksand-Bold',
  // },
});
