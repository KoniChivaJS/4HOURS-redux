import { fetchTasks } from "../store/reducers/tasksReducer";
import axios from "axios";
export const fetchTasksAction = () => {
  return function (dispatch) {
    fetch("https://656fa4806529ec1c62381c41.mockapi.io/tasks")
      .then((response) => response.json())
      .then((json) => dispatch(fetchTasks(json)));
  };
};
