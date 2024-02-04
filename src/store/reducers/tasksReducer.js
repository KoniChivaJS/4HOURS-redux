const initialValue = [
  {
    id: 0,
    date: [4, 1],
    minutes: 30,
    task: "react",
  },
  {
    id: 1,
    date: [3, 1],
    minutes: 100,
    task: "react",
  },
  {
    id: 2,
    date: [4, 1],
    minutes: 120,
    task: "react",
  },
];

export const tasksReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((obj) => obj.id != action.payload.id);
    default:
      return state;
  }
};

export const addTaskAction = (payload) => ({ type: "ADD_TASK", payload });
export const deleteTaskAction = (payload) => ({ type: "DELETE_TASK", payload });
