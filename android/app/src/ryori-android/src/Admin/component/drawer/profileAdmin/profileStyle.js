import {StyleSheet} from 'react-native';

export const ProfileStyle = StyleSheet.create({
  profileAdmin: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  profileContent: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
    top: 10,
    width: '100%',
  },
  profiletTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },

  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImageCol: {
    width: '40%',
    alignItems: 'center',
  },
  profilepic: {
    width: 130,
    height: 130,
  },
  nameEmail: {
    alignItems: 'center',
    top: 10,
  },
  profileInfoText: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Quicksand-Medium',
  },
  profileDetailsCol: {
    width: '60%',
    paddingHorizontal: 10,
  },
  detailColored: {
    backgroundColor: '#E2E7EF',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
  },
  detail: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
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
  //------------------------------------------------------
  columnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileUpdate: {
    width: '30%',
    alignItems: 'center',
  },
  uploadAdminProf: {
    backgroundColor: '#DB1B1B',
  },
  updateBtn: {
    width: 170,
    height: 30,
    backgroundColor: '#DB1B1B',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  updateAdminInfo: {
    width: '70%',
  },
  updateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  adminInputInfo: {
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
  addressInput: {
    width: '100%',
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
  saveAdminInfo: {
    alignItems: 'flex-end',
  },
  // ----------------------------------------------------------------
  userCred: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  userCredForm: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    alignItems: 'center',
    elevation: 5,
    width: '50%',
    height: 250,
    borderRadius: 10,
    paddingVertical: 30,
  },
  changeText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  userCredInput: {
    width: 300,
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
  saveNewCred: {
    alignItems: 'center',
    backgroundColor: '#DB1B1B',
    padding: 10,
    width: 300,
    borderRadius: 10,
  },
});
