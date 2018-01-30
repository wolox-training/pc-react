import { actions } from './actions';

const initialState = {
  todos: [],
}

export default reducer = (state = initialState, action) => {
  const {todos} = state
  const {type, payload} = action

  switch (type) {
  case actions.ADD: {
    const index = todos.length + 1;
    return {
      ...state,
      todos: [{text: payload.text, id: index, isChecked: false}, ...todos],
    }
  }
  case actions.REMOVE: {
    return {
      ...state,
      todos: todos.filter((todo) => todo.id !== payload.index),
    }
  }
  case actions.TOGGLE: {
    let current_todo = todos.filter((todo) => todo.id === payload.index);
    if(current_todo && current_todo.length > 0){
      return {
        ...state,
        todos: [
          {
            ...current_todo[0],
            isChecked: !current_todo[0].isChecked
          },
          ...todos.filter((todo) => todo.id !== payload.index)
        ]
      }
    }
    return state;
  }
  case actions.REMOVE_COMPLETED: {
    return {
      ...state,
      todos: todos.filter((todo) => todo.isChecked === false),
    }
  }
  default:
    return state;
  }
}
