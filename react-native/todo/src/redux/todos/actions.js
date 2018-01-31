export const actions = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TOGGLE: 'TOGGLE',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED'
};

// Helper functions to dispatch actions, optionally with payloads
const actionCreators = {
  addTodo: (text) => {
    return {type: actions.ADD, payload: {text}};
  },
  removeTodo: (index) => {
    return {type: actions.REMOVE, payload: {index}};
  },
  toggleTodo: (index) => {
    return {type: actions.TOGGLE, payload: {index}};
  },
  removeCompleted: () => {
    return {type: actions.REMOVE_COMPLETED};
  }
};

export default actionCreators;
