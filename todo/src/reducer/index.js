import { ADD_TASK, TOGGLE_TASK, CLEAR_COMPLETE, DELETE_TASK } from "../actions";

const initialState = {
  todo: [
    {
      value: "Load To-Do App",
      complete: true
    },
    {
      value: "Check-off task",
      complete: false
    },
    {
      value: "Create new task",
      complete: false
    },
    {
      value: "Delete task",
      complete: false
    }
  ]
};

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ADD_TASK:
      return {
        todo: [...state.todo, { value: payload, complete: false }]
      };
    case TOGGLE_TASK:
      const toggle = state.todo[payload];
      toggle.complete = !toggle.complete;

      return {
        todo: [
          ...state.todo.slice(0, payload),
          toggle,
          ...state.todo.slice(payload + 1)
        ]
      };
    case CLEAR_COMPLETE:
      return {
        todo: state.todo.filter(obj => !obj.complete)
      };
    case DELETE_TASK:
      return {
        todo: [
          ...state.todo.slice(0, payload),
          ...state.todo.slice(payload + 1)
        ]
      };
    default:
      return state;
  }
};
