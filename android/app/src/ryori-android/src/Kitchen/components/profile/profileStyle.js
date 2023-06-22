import {StyleSheet} from 'react-native';

export const ProfileStyle = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  profile: {
    width: '100%',
  },
  ryoriIcon: {
    flexDirection: 'row',
  },
  ryori: {
    width: 40,
    height: 50,
  },
  ryoriIconText: {
    fontFamily: 'Quicksand-Bold',
    color: '#000',
    fontSize: 27,
    top: 6,
    left: 10,
  },
  crewImageCon: {
    marginTop: 50,
    alignItems: 'center',
    width: '100%',
  },
  crewImage: {
    height: 100,
    width: 100,
  },
  crewName: {
    marginTop: 5,
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 16,
  },
  crewInfo: {
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnText: {
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    fontSize: 15,
    marginBottom: 10,
  },
  btn: {
    width: '100%',
    height: 35,
    borderRadius: 20,
    backgroundColor: '#DB1B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Quicksand-SemiBold',
  },
  input: {
    height: 42,
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
  form: {
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    width: '100%',
  },
});
