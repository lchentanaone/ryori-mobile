import {StyleSheet} from 'react-native';

export const OpeningSytle = StyleSheet.create({
  starter: {
    backgroundColor: '#db1a1b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ryoriStarter: {
    width: 125,
    height: 150,
  },
  // login
  kitchenLogin: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  ryoriText: {
    width: 190,
    height: 70,
  },
  input: {
    height: 50,
    width: '100%',
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#757575',
    fontFamily: 'Quicksand-SemiBold',
  },
  loginForm: {
    backgroundColor: '#fff',
    width: '100%',
    // paddingHorizontal: 10
  },
  pleaseText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 12,
    marginTop: 18,
    left: 10,
    fontFamily: 'Quicksand-SemiBold',
  },

  // Forgot btn
  forgotBtn: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  textBtbOpacity: {
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  forgotText: {
    fontSize: 18,
    color: '#000',
    justifyContent: 'center',
    right: 10,
    fontFamily: 'Quicksand-SemiBold',
  },

  // Sign in btn
  SignIn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  SignInOpacity: {
    width: '100%',
    height: 50,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#db1a1b',
  },
  SignInTextBtn: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-SemiBold',
  },
});
