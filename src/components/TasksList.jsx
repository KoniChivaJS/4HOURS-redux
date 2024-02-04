import { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
function TaskList() {
  const list = useSelector((state) => state);
  const [activeFilter, setActiveFilter] = useState(0);

  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth()];

  return (
    <div className="taskList-section">
      <div className="container">
        <div className="tasks-render">
          {activeFilter
            ? list.map((obj) => <TaskItem data={obj} key={obj.id} />)
            : list.map((obj) => {
                if (obj.date[0] == day && obj.date[1] == month) {
                  return <TaskItem data={obj} key={obj.id} />;
                }
              })}
        </div>
        <div className="tasks-filter">
          <h2>Filters:</h2>
          <button onClick={() => setActiveFilter(0)}>Today`s</button>
          <button onClick={() => setActiveFilter(1)}>All Tasks</button>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
