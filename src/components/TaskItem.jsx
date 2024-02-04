function TaskItem({ data }) {
  return (
    <div className="task-block">
      <div className="text-block">
        <p>{data.task}</p>
      </div>
      <div className="info-block">
        <p>
          {data.date[0]}.{data.date[1] + 1}
        </p>
        <p>{data.minutes} min</p>
      </div>
    </div>
  );
}
export default TaskItem;
