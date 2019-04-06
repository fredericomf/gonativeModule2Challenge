import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 14,
  },

  icon: {
    fontSize: 20,
  },
});

export default styles;
