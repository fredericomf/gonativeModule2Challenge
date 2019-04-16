import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';
import { normalize } from 'uri-js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },

  filter: {
    alignItems: 'stretch',
    flexDirection: 'row',
    margin: metrics.baseMargin,
  },

  button: {
    backgroundColor: colors.regular,
    padding: metrics.basePadding,
    width: '33%',
  },

  left: {
    borderBottomLeftRadius: metrics.baseRadius,
    borderTopLeftRadius: metrics.baseRadius,
  },

  right: {
    borderBottomRightRadius: metrics.baseRadius,
    borderTopRightRadius: metrics.baseRadius,
  },

  selectedButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonText: {
    fontWeight: 'normal',
    textAlign: 'center',
  },

  loading: {
    marginTop: metrics.screenHeight / 2 - 100,
  },
});

export default styles;
