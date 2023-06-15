import {StyleSheet} from 'react-native';

export const drawerStyle = StyleSheet.create({
  drawerProfile: {
    width: '100%',
    height: 50,
    marginHorizontal: 10,
    top: 10,
  },
  profileAdmin: {
    top: 5,
    flexDirection: 'row',
    left: 10,
  },
  profilepic: {
    width: 40,
    height: 40,
  },
  welcomeAdmin: {
    left: 10,
  },
  welcomeAdminText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 12,
    color: '#000',
  },
  adminName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: '#000',
  },
});
