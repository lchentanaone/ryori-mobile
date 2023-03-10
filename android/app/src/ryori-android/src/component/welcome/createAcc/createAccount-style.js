/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const SignUpStyle = StyleSheet.create({
  loginFormContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
  },
  welcomeLoginTextCon: {
    position: 'absolute',
    justifyContent: 'center',
    color: '#FFFF',
  },
  welcomeLoginText: {
    color: '#FFFFFF',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppin',
  },
  loginIntro: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 9,
    top: 4,
    fontFamily: 'Poppins',
  },
  signUpfield: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldContainer: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    top: 90,
    left: -100,
  },
  textFieldrow1: {
    flexDirection: 'row',
  },
  input: {
    height: 30,
    width: 200,
    fontSize: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputMargin: {
    marginTop: 5,
  },
  signUpBtnContainer: {
    position: 'absolute',
    justifyContent: 'center',
    top: 330,
    left: -100,
  },
  signUpBtn: {
    width: 200,
    height: 25,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EEA734',
    marginTop: -150,
  },
  signUpBtnText: {
    fontSize: 8,
    color: 'white',
    justifyContent: 'center',
  },
});
