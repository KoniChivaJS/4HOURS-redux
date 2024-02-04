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
      return state;
    default:
      return state;
  }
};
