import { useState } from "react";
import { addTaskAction } from "../store/reducers/tasksReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
function AddTask() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [minutes, setMinutes] = useState("");

  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth()];

  const addTask = () => {
    const obj = {
      id: Date.now(),
      date: [day, month],
      minutes: +minutes,
      task: task,
    };
    axios.post("https://656fa4806529ec1c62381c41.mockapi.io/tasks", obj);
    dispatch(addTaskAction(obj));
    setTask("");
    setMinutes("");
  };
  return (
    <div className="addTask-section">
      <div className="container">
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          placeholder="Enter Task You`ve Done"
          required
        />
        <input
          onChange={(e) => setMinutes(e.target.value)}
          value={minutes}
          type="number"
          placeholder="Enter Minutes"
          required
        />
        <button type="button" onClick={addTask}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
export default AddTask;
