import { useDispatch } from "react-redux";
import { deleteTaskAction } from "../store/reducers/tasksReducer";
function TaskItem({ data }) {
  const dispatch = useDispatch();
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
        onClick={() => dispatch(deleteTaskAction(data))}
      />
    </div>
  );
}
export default TaskItem;
