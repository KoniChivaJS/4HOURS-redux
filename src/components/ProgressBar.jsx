import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProgressBar() {
  const tasks = useSelector((state) => state);

  const date = new Date();
  const [day, month] = [date.getDate(), date.getMonth()];

  const [minutes, setMinutes] = useState(0);
  const percentage = (minutes * 100) / 240;

  useEffect(() => {
    tasks.map((el) => {
      if (el.date[0] == day && el.date[1] == month) {
        setMinutes((minutes) => minutes + el.minutes);
      }
    });
  }, [tasks]);

  return (
    <div className="progressBar-section">
      <div className="container">
        <h2>Today`s progress - {percentage}%</h2>
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
