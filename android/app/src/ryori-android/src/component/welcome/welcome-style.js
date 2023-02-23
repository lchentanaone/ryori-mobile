/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const welcomeStyles = StyleSheet.create({
  welcomes: {
    backgroundColor: '#000000',
    flex: 1,
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: -140,
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
});
