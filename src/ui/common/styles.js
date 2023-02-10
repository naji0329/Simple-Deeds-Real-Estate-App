import {Platform, StyleSheet} from 'react-native';
import {white} from './colors';

const g_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  box: {
    paddingHorizontal: Platform.OS === 'ios' ? 15 : 20,
  },
  flex: {flexDirection: 'row'},
  itemsCenter: {alignItems: 'center'},
  itemsStart: {alignItems: 'flex-start'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyCenter: {justifyContent: 'center'},
  p_10: {padding: 10},
  p_16: {padding: 16},
  px_10: {paddingHorizontal: 10},
  px_16: {paddingHorizontal: 16},
  py_5: {paddingVertical: 5},
  py_24: {paddingVertical: 24},
  py_10: {paddingVertical: 10},
  py_16: {paddingVertical: 16},
  pr_5: {paddingRight: 5},
  pr_10: {paddingRight: 10},
  pr_16: {paddingRight: 16},
  pl_5: {paddingLeft: 5},
  pl_10: {paddingLeft: 10},
  mt_5: {marginTop: 5},
  mt_10: {marginTop: 10},
  mt_16: {marginTop: 16},
  mt_20: {marginTop: 20},
  mt_24: {marginTop: 24},
  mt_30: {marginTop: 30},
  mt_32: {marginTop: 32},
  mt_50: {marginTop: 50},
  mt_70: {marginTop: 70},
  my_5: {marginVertical: 5},
  my_10: {marginVertical: 10},
  mx_10: {marginHorizontal: 10},
  ml_5: {marginLeft: 5},
  ml_10: {marginLeft: 10},
  ml_15: {marginLeft: 15},
  ml_20: {marginLeft: 20},
  mr_5: {marginRight: 5},
  mr_8: {marginRight: 8},
  mr_10: {marginRight: 10},
  mr_20: {marginRight: 20},
  h_half: {height: '50%'},
  h_full: {height: '100%'},
  w_p30: {width: '30%'},
  w_p50: {width: '50%'},
  w_p70: {width: '70%'},
  w_p100: {width: '100%'},
  flex_1: {flex: 1},
});

export default g_styles;
