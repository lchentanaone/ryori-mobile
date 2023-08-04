import {StyleSheet} from 'react-native';

export const EmployeeStyle = StyleSheet.create({
  employee: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 30,
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
  addEmployee: {
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '20%',
    height: 30,
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
  addEmployeeText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Quicksand-SemiBold',
  },
  tableHeader: {
    backgroundColor: '#E3E7EB',
  },
  tableTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  employeeCellData: {
    fontSize: 13,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  //---------------------------------------
  modal: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    width: '100%',
  },

  // ----------
  modalInput: {
    width: '100%',
    fontSize: 12,
    height: 35,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  modalInput: {
    width: '48%',
    fontSize: 15,
    height: 35,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    elevation: 5,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  modalForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  addEmployeeBtn: {
    width: '22%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 10,
    flexDirection: 'row',
  },
  deleteEmploye: {
    width: '48%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB1B1B',
    borderRadius: 10,
    flexDirection: 'row',
  },
  filterTextBtn: {
    fontSize: 13,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  //----------------------------------------------------------------
  DropdownContainer: {
    width: '48%',
  },
  dropdown: {
    left: 2,
    backgroundColor: 'white',
    borderColor: '#E6E6E6',
    height: 34,
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    color: '#000',
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
