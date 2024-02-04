import "./App.scss";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import TaskList from "./TasksList";
function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar />
      <TaskList />
    </div>
  );
}

export default App;
