const initialValue = [];

export const tasksReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "FETCH_TASKS":
      return [...state, ...action.payload];
    case "DELETE_TASK":
      return state.filter((obj) => obj.id != action.payload.id);
    default:
      return state;
  }
};

export const addTaskAction = (payload) => ({ type: "ADD_TASK", payload });
export const deleteTaskAction = (payload) => ({ type: "DELETE_TASK", payload });
export const fetchTasks = (payload) => ({ type: "FETCH_TASKS", payload });
