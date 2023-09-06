import {StyleSheet} from 'react-native';

export const openingStyles = StyleSheet.create({
  // starting Logo
  welcomes: {
    backgroundColor: '#DB1B1B',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ryoriStarter: {
    width: 105,
    height: 128,
  },

  // login admin
  login: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: -20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 270,
  },
  loginContent: {
    width: '100%',
  },
  forLogo: {
    with: '100%',
    alignItems: 'center',
  },
  ryoriText: {
    width: 220,
    height: 70,
  },
  pleaseText: {
    fontSize: 15,
    color: '#000',
    marginBottom: 8,
    marginTop: 8,
    fontFamily: 'Quicksand-SemiBold',
  },
  input: {
    width: '100%',
    fontSize: 15,
    borderWidth: 1,
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#757575',
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  // Forgot btn
  forgotBtn: {
    alignItems: 'flex-end',
    marginTop: -15,
  },
  textBtbOpacity: {
    width: 130,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 15,
    color: '#000',
    justifyContent: 'center',
  },
  // Sign in btn
  SignIn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10,
  },
  SignInOpacity: {
    width: '100%',
    height: 40,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#BD0A0A',
  },
  SignInTextBtn: {
    fontSize: 17,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-SemiBold',
  },

  // Register admin
  register: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 150,
  },
  registerContent: {
    width: '100%',
    marginTop: -20,
  },
  inputR: {
    width: '47%',
    fontSize: 15,
    borderWidth: 0.5,
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#757575',
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  registerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  form: {
    width: '100%',
  },
  SignUp: {
    width: '47%',
  },
  SignUpOpacity: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BD0A0A',
    borderRadius: 30,
  },
  SignUpTextBtn: {
    fontSize: 17,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-SemiBold',
  },
});

export const setUpStoreStyles = StyleSheet.create({
  setUpStore: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 120,
    paddingVertical: 50,
  },
  setUpTextCon: {
    width: '100%',
    top: -5,
  },
  setUpText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  setUpContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    elevation: 5,
    flexDirection: 'row',
  },
  uploadLogoCol: {
    width: '30%',
  },
  uploadLogoC: {
    top: 25,
    width: '70%',
    // alignItems: 'center'
  },
  storeLogoText: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  logo: {
    top: 5,
    backgroundColor: '#000',
    width: 140,
    height: 140,
  },
  uploadLogoBtn: {
    top: 15,
    width: 140,
  },
  uploadLogoOpacity: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BD0A0A',
    borderRadius: 10,
  },
  uploadLogoTextBtn: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-SemiBold',
  },
  setupRow: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  setupInput: {
    width: '47%',
    fontSize: 15,
    borderWidth: 0.5,
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#757575',
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  saveStore: {
    top: 90,
    width: '47%',
  },
  saveStoreOpacity: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BD0A0A',
    borderRadius: 10,
  },
  saveStoreTextBtn: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-SemiBold',
  },
});
