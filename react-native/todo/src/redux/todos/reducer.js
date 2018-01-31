import { actions } from './actions';

const initialState = {
  todos: [],
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD: {
      const index = state.todos.length + 1;
      return {
        ...state,
        todos: [{text: action.payload.text, id: index, isChecked: false}, ...state.todos],
      };
    }
    case actions.REMOVE: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.index),
      };
    }
    case actions.TOGGLE: {
      let current_todo = state.todos.filter((todo) => todo.id === action.payload.index);
      if(current_todo && current_todo.length > 0){
        return {
          ...state,
          todos: [
            {
              ...current_todo[0],
              isChecked: !current_todo[0].isChecked
            },
            ...state.todos.filter((todo) => todo.id !== action.payload.index)
          ]
        };
      }
      return state;
    }
    case actions.REMOVE_COMPLETED: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.isChecked === false),
      };
    }
    default:
      return state;
  }
};
