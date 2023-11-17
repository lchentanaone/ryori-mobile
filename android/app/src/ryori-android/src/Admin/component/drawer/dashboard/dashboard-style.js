import {StyleSheet} from 'react-native';

export const DashboardStyle = StyleSheet.create({
  dashboard: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dashboardContent: {
    width: '100%',
    marginTop: 5,
  },
  storename: {
    letterSpacing: 1,
    fontSize: 20,
    color: '#000',
    fontFamily: 'Quicksand-SemiBold',
  },
  storebranch: {
    letterSpacing: 0.5,
    marginBottom: 5,
    color: '#404040',
    fontFamily: 'Quicksand-SemiBold',
  },
  dashBTitleSearchB: {
    alignItems: 'center',
  },

  overAll: {
    backgroundColor: '#DB1B1B',
    borderRadius: 8,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  overAllContent: {
    top: 5,
    alignItems: 'center',
  },
  overAllText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Quicksand-SemiBold',
  },
  overAllValue: {
    color: '#fff',
    fontWeight: 900,
    fontSize: 18,
    top: 2,
  },
  summaryRevenue: {
    flexDirection: 'row',
    top: 10,
    justifyContent: 'space-between',
  },
  orderSummaryReven: {
    width: '49%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  titleFil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: '#000',
  },
  filterDate: {
    flexDirection: 'row',
    top: -10,
  },

  textBtnOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: '#464646',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Medium',
  },
  border: {
    color: '#464646',
    fontSize: 24,
    margin: 2,
  },

  newOrder: {
    width: '30%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ff8f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitingPayment: {
    width: '30%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#848f9a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitingText: {
    fontFamily: 'Quicksand-SemiBold',
    color: '#fff',
    fontSize: 14,
  },

  orderDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  preparing: {
    backgroundColor: '#4285F4',
    width: '30%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  served: {
    backgroundColor: '#12BF38',
    width: '30%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  cancelled: {
    backgroundColor: '#777777',
    width: '30%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  orderTotal: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Quicksand-SemiBold',
  },
  orderText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
  },

  Revenue: {
    alignItems: 'center',
    fontSize: 12,
    color: '#FFF',
    justifyContent: 'center',
    fontFamily: 'Quicksand-SemiBold',
  },
  chartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartText: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: '#000',
    top: 70,
  },
});
