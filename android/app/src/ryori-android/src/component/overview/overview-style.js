/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const overviewStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  circleContainer: {
    justifyContent: 'flex-end',
    left: 600,
    top: 220,
    position: 'absolute',
  },
  circle: {
    backgroundColor: '#EEA734',
    height: 260,
    width: 260,
    borderRadius: 200,
    opacity: 0.2,
  },
  ryoriLogoLogin: {
    width: 95,
    height: 95,
    top: 0,
    position: 'absolute',
    left: 630,
  },
  menu: {
    top: 5,
    left: 3,
    position: 'absolute',
  },

  header: {
    position: 'absolute',
    flexDirection: 'row',
    top: 10,
    left: 40,
  },

  SearchIcon: {
    left: 160,
    position: 'absolute',
  },
  searchInput: {
    backgroundColor: '#d9d9d9',
    color: '#000',
    left: 8,
    height: 28,
    borderRadius: 10,
    fontSize: 12,
    width: 150,
    paddingLeft: 8,
    padding: 0,
  },
  searchbar: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 30,
    borderRadius: 20,
    width: 190,
  },
  headerContainerImg: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: 260,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#18181C',
    borderColor: '#37343d',
    borderWidth: 1,
    left: 20,
  },
  headerImg: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  headerImgArrow: {
    // flex: 1,
    // position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
