import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  todoList: {
    width: '100%'
  },
  todo: {
    paddingHorizontal: 20,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.DARK_GREY,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoCompleted: {
    backgroundColor: colors.DARKER_GREY,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',

  }
});

export default styles;
