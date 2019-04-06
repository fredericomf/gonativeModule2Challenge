import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },

  form: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.basePadding,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 1,
    height: 40,
    marginRight: metrics.baseMargin,
  },

  button: {},

  buttonIcon: {
    color: colors.dark,
    fontSize: 24,
  },
});

export default styles;
