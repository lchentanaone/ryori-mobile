import {StyleSheet} from 'react-native';

export const ReportStyle = StyleSheet.create({
  reportContainer: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  reportContent: {
    width: '100%',
    top: 15,
  },
  reportTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-Bold',
  },
  reportTable: {
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
  reportData: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  reportCellData: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  reportButtons: {
    width: '100%',
    alignItems: 'flex-end',
    top: 20,
  },
  buttons: {
    flexDirection: 'row',
  },

  reportDownloadOpacity: {
    marginRight: 10,
    width: '25%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12BF38',
    borderRadius: 10,
    flexDirection: 'row',
  },
  addMenuTextBtn: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  reportDeleteOpacity: {
    width: '25%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB1B1B',
    borderRadius: 10,
    flexDirection: 'row',
  },
});
