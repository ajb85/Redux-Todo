export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const CLEAR_COMPLETE = "CLEAR_COMPLETE";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

export const toggleTask = index => {
  return {
    type: TOGGLE_TASK,
    payload: index
  };
};

export const clearComplete = index => {
  return {
    type: CLEAR_COMPLETE
  };
};

export const deleteTask = index => {
  return {
    type: DELETE_TASK,
    payload: index
  };
};
