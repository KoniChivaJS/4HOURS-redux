import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProgressBar() {
  const tasks = useSelector((state) => state);

  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth()];

  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    setMinutes(0);
    tasks.forEach((obj) => {
      if (obj.date[0] == day && obj.date[1] == month) {
        setMinutes((minutes) => minutes + obj.minutes);
      }
    });
  }, [tasks]);
  const percentage = (minutes * 100) / 240;

  return (
    <div className="progressBar-section">
      <div className="container">
        <h2>Today`s progress - {percentage.toFixed(2)}%</h2>
        <div className="progress-bar">
          <div
            style={
              percentage > 100
                ? { width: 100 + "%" }
                : { width: percentage + "%" }
            }
            className="progress"
          ></div>
        </div>
      </div>
    </div>
  );
}
export default ProgressBar;
