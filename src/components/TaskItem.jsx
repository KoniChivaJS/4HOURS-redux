import { useDispatch } from "react-redux";
import { deleteTaskAction } from "../store/reducers/tasksReducer";
import axios from "axios";
function TaskItem({ data }) {
  const dispatch = useDispatch();
  const deleteTask = (task) => {
    dispatch(deleteTaskAction(task));
    axios.delete(
      `https://656fa4806529ec1c62381c41.mockapi.io/tasks/${task.mockID}`
    );
  };
  return (
    <div className="task-block">
      <div className="text-block">
        <p>{data.task}</p>
      </div>
      <div className="info-block">
        <div className="block">
          <p>
            {data.date[0]}.{data.date[1] + 1}
          </p>
        </div>
        <p>{data.minutes} min</p>
      </div>
      <img
        src="./trash.png"
        alt="delete"
        width={40}
        height={40}
        style={{ cursor: "pointer" }}
        onClick={() => deleteTask(data)}
      />
    </div>
  );
}
export default TaskItem;
