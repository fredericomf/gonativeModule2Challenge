import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 10,
  baseRadius: 3,
  screenWidth: width < height ? width : height, // Used to work with 'portrait' or 'landscape' mode
  screenHeight: width < height ? height : width,
};
