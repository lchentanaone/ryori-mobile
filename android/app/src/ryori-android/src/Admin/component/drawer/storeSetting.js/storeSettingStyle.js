import {StyleSheet} from 'react-native';

export const StoreSetStyle = StyleSheet.create({
  storeSetting: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  storeSetTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  setStoreContent: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: 10,
    width: '100%',
  },
  storeInfo: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Quicksand-Meduim',
  },
  storeDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  storeDetailsContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
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
  storeName: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Quicksand-Meduim',
    marginTop: 5,
    textDecorationLine: 'underline',
    letterSpacing: 1,
  },
  info: {
    width: '60%',
    alignItems: 'flex-start',
  },

  storePhoto: {
    width: '100%',
    alignItems: 'center',
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
  storeLogoCon: {
    width: '40%',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  storeLogo: {
    borderRadius: 10,
    width: 140,
    height: 130,
  },
  nameEmail: {
    alignItems: 'center',
    top: 10,
  },

  storeNameText: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Quicksand-Medium',
  },
  detailColored: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#E2E7EF',
  },
  infoCol: {
    width: '35%',
  },
  infoCol2: {
    width: '60%',
  },
  infoTetx: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Quicksand-Medium',
  },

  buttonsOpacity: {
    width: '100%',
    height: 30,
    backgroundColor: '#DB1B1B',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  buttonsText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Quicksand-Meduim',
  },
  storeInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const updateStoreStyle = StyleSheet.create({
  storeFormDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  storeFormInputCont: {
    width: '60%',
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
    width: '40%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  storeLogo: {
    borderRadius: 10,
    width: 140,
    height: 140,
  },

  uploadLogoOpacity: {
    top: -35,
    height: 35,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
  },
  uploadLogoTextBtn: {
    left: 2,
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-SemiBold',
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
