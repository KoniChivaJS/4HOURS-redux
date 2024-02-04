import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import TaskList from "./TasksList";
import SwitchPage from "./SwitchPage";
import AddTask from "./AddTask";
function App() {
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
