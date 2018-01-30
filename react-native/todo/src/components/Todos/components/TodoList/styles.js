import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  todoList: {
    width: '100%'
  },
  todo: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoCompleted: {
    backgroundColor: '#CCCCCC',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',

  }
});
