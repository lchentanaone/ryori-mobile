import {StyleSheet} from 'react-native';

export const EmployeeStyle = StyleSheet.create({
  employee: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  employeeContent: {
    width: '100%',
    top: 15,
  },
  employeeTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  employeeTable: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 5,
    width: '100%',
    height: 280,
    top: 10,
  },
  tableHeader: {
    backgroundColor: '#E3E7EB',
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  employeeCellData: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
});
