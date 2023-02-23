/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const welcomeStyles = StyleSheet.create({
  welcomes: {
    backgroundColor: '#000000',
    flex: 1,
    position: 'relative',
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: -140,
    position: 'relative',
  },
  circle: {
    backgroundColor: '#EEA734',
    height: 260,
    width: 260,
    borderRadius: 200,
    opacity: 0.2,
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'flex-start',
    marginTop: -320,
    flex: 1,
    height: 10,
  },
  ryoriLogo: {
    width: 75,
    height: 75,
  },
  ryoriText: {
    color: 'white',
    alignItems: 'center',
    marginTop: -47,
    marginLeft: 8,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    borderColor: 'red',
  },
  wcTextContainer: {
    marginTop: -30,
    flex: 1,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    alignItems: 'center',
    marginTop: -47,
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppin',
  },
  welcomeIntro: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 7,
    fontFamily: 'Poppins',
  },

  getStartedOpacity: {
    width: 160,
    height: 25,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EEA734',
    marginTop: -150,
  },
  getStarted: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  getStartedTextBtn: {
    fontSize: 8,
    color: 'white',
    justifyContent: 'center',
  },
  // -----welcome 2-----
  ryoriLogoLeft: {
    justifyContent: 'flex-start',
  },
  ryoriLogoLogin: {
    width: 75,
    height: 75,
    marginTop: -220,
  },
  loginFormContainer: {
    alignItems: 'center',
  },
  welcomeLoginTextCon: {
    marginTop: -400,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFF',
  },
  welcomeLoginText: {
    color: '#FFFFFF',
    alignItems: 'center',
    marginTop: -47,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppin',
  },
  loginIntro: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 9,
    marginTop: 4,
    fontFamily: 'Poppins',
  },
  //-------------
  loginfield: {
    marginTop: -30,
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  textFieldContainer: {
    width: 200,
    maxWidth: 300,
    marginTop: -140,
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

  //------
  forgotBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textBtbOpacity: {
    width: 130,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  forgotText: {
    fontSize: 10,
    color: '#696969',
    justifyContent: 'center',
  },
  loginBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  signInBtn: {
    width: 200,
    height: 25,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EEA734',
    marginTop: -150,
  },
  optionBtnCont: {
    marginTop: -60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  createAccText: {
    fontSize: 10,
    color: '#4285f4',
    justifyContent: 'center',
  },
});
