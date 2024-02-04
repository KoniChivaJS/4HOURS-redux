import { useState } from "react";
import { Link } from "react-router-dom";
function SwitchPage() {
  const [activeSwitch, setActiveSwitch] = useState(0);
  return (
    <div className="switch-section">
      <div className="container">
        <Link to="/">
          <h3
            onClick={() => setActiveSwitch(0)}
            className={activeSwitch == 0 ? "active" : ""}
          >
            Tasks
          </h3>
        </Link>
        <Link to="/add-task">
          <h3
            onClick={() => setActiveSwitch(1)}
            className={activeSwitch == 1 ? "active" : ""}
          >
            Add Task
          </h3>
        </Link>
      </div>
    </div>
  );
}
export default SwitchPage;
