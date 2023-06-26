import {StyleSheet} from 'react-native';

export const PaymentReceivedStyles = StyleSheet.create({
  orderTable: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  ryoriIcon: {
    flexDirection: 'row',
    width: '100%',
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
    marginLeft: 10,
  },
  paymentReceivedIcon: {
    flex: 1,
    alignItems: 'center',
  },
  paymentCheck: {
    marginTop: 180,
  },
  paymentText: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Quicksand-Bold',
    color: '#000',
  },
  thankyouText: {
    fontSize: 18,
    fontFamily: 'Quicksand-Medium',
    color: '#000',
  },
});
