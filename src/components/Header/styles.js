import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

// import { getStatusBarHeight } from 'react-native-status-bar-height'; Only need for IOS

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',

    // height: 54 + getStatusBarHeight(), Only need for IOS
    height: 54,

    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    // paddingTop: getStatusBarHeight(), Only need for IOS
  },

  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },

  icon: {
    color: colors.darker,
  },
});

export default styles;
