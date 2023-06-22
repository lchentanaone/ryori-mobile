import {StyleSheet} from 'react-native';

export const prodStyle = StyleSheet.create({
  products: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  productContent: {
    width: '100%',
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
    fontSize: 12,
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
  searchbar: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f8',
    height: 45,
    borderRadius: 5,
    width: '100%',
    top: 70,
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
  Table: {
    position: 'absolute',
    top: 120,
    width: '100%',
  },
  productTable: {
    width: '100%',
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
  porklistQty: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-Bold',
  },
});
