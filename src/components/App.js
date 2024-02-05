import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import TaskList from "./TasksList";
import SwitchPage from "./SwitchPage";
import AddTask from "./AddTask";
import { useEffect } from "react";
import { fetchTasksAction } from "../asyncAction/tasks";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);
  return (
    <div className="App">
      <Header />
      <ProgressBar />
      <SwitchPage />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
