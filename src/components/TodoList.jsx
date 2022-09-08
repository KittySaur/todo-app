import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoItems = useSelector((store) => store.todo);
  const filterStatus = useSelector((store) => store.todo.filterStatus);

  const todoList = todoItems.items;

  function switchFilter(filterStatus) {
    switch (filterStatus) {
      case "active": {
        return todoList.filter((item) => !item.completed);
      }
      case "completed": {
        return todoList.filter((item) => item.completed);
      }
      default:
        return todoList;
    }
  }

  const filteredTodoList = switchFilter(filterStatus);

  return (
    <div>
      <ul className="todo-list">
        {filteredTodoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
