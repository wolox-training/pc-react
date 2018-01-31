import { StyleSheet } from 'react-native';

import colors from '../../../../../../constants/colors';

const BOX_SIZE = 20;

const styles = StyleSheet.create({
  box: {
    height: BOX_SIZE,
    width: BOX_SIZE,
    borderWidth: 2,
    borderColor: colors.BLACK,
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: colors.BLACK,
  },
});

export default styles;
