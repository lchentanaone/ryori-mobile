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
    alignItems: 'center',
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
    height: '50%',
    width: '60%',
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
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Quicksand-Meduim',
  },
});

export const updateStoreStyle = StyleSheet.create({
  storeFormDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storeFormInputCont: {
    width: '65%',
  },
  FormInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  storeInput: {
    width: '48%',
    fontSize: 15,
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  storeInputAddress: {
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
  updateLogo: {
    width: '35%',
    alignItems: 'center',
  },
  storeLogo: {
    height: '10%',
    width: '10%',
    backgroundColor: 'red',
  },
  updatebtnOpacity: {
    width: 150,
    height: 30,
    top: 10,
    backgroundColor: '#12BF38',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveUpdateOpacity: {
    width: 200,
    height: 30,
    top: 10,
    backgroundColor: '#4285F4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
