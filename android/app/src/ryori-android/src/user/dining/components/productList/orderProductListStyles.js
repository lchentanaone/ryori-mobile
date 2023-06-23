import {StyleSheet} from 'react-native';

export const OrderListStyles = StyleSheet.create({
  orderProducts: {
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
  },
  accordionList: {
    borderWidth: 0.7,
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  accordItem: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  itemlist: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  toPreparing: {
    alignItems: 'center',
    backgroundColor: '#0085FF',
    borderRadius: 4,
    left: 20,
    width: 100,
    height: 25,
  },
  preparingText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
  },
  item: {
    left: 20,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  table: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  quantity: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  buttons: {
    marginBottom: 5,
    right: 20,
    width: '60%',
    alignItems: 'flex-end',
  },
  readyServeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    borderRadius: 4,
    width: 110,
    height: 30,
  },
  btnText: {
    color: '#fff',
  },
});
