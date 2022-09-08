import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="header">to-do list</header>
      <div className="container">
        <Form />
        <TodoList />
      </div>
    </div>
  );
}
export default App;
