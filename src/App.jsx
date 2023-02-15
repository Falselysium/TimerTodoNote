import "./App.css";
import Todo from "./Todo/Todo.jsx";
import Panel from "./Panel/Panel.jsx";
import NavBar from "./Navbar/NavBar.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Todo />
      <Panel />

    </div>
  );
}

export default App;
