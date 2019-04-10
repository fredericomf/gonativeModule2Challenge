import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    padding: metrics.basePadding,
    margin: metrics.baseMargin,
  },

  info: {
    flex: 1,
    paddingLeft: metrics.basePadding,
  },

  image: {
    height: 50,
    width: 50,
  },

  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  subTitle: {
    color: colors.dark,
    fontSize: 16,
  },

  icon: {
    color: colors.light,
    fontSize: 20,
  },
});

export default styles;
