import {StyleSheet} from 'react-native';

export const BranchStyle = StyleSheet.create({
  branchesContainer: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  branches: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    paddingVertical: 10,
    marginTop: 60,
    borderRadius: 10,
    alignItems: 'center',
    width: 400,
  },
  container: {
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 5,
  },
  storeName: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  selectText: {
    top: -2,
    fontSize: 12,
    color: '#000',
    fontFamily: 'Quicksand-Medium',
  },
  branchBtn: {
    backgroundColor: '#DB1B1B',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 2,
  },
  branchText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Quicksand-Medium',
  },
  addBranchBtn: {
    backgroundColor: '#E3E7EB',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 2,
    flexDirection: 'row',
    marginTop: 5,
  },
  addBranchText: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  addIcon: {
    fontSize: 25,
    color: '#000',
    top: 1,
  },
});
