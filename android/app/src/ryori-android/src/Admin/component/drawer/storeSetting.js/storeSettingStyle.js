import {StyleSheet} from 'react-native';

export const StoreSetStyle = StyleSheet.create({
  storeSetting: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  storeSetContent: {
    top: 15,
    width: '100%',
  },
  storeSetTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-Bold',
  },
  storeDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  storeDetailsContainer: {
    backgroundColor: '#fff',

    shadowColor: '#000',
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    top: 10,
  },
  storeDetails: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E2E7EF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  infoTitle: {
    justifyContent: 'space-between',
    width: '40%',
  },
  storeInfo: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Quicksand-Meduim',
    marginBottom: 15,
    // borderBottomWidth: 0.5,
  },
  info: {
    width: '60%',
    alignItems: 'flex-start',
  },

  storePhoto: {
    width: '35%',
    alignItems: 'center',
  },
  storeLogo: {
    height: 150,
    width: 150,
    backgroundColor: '#fff',
  },
  buttons: {
    top: 10,
    alignItems: 'center',
  },
  buttonsOpacity: {
    width: 150,
    height: 30,
    backgroundColor: '#12BF38',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsText: {
    fontSize: 14,
    color: '#fff',
  },
});
