import { TiInputChecked } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/actions/creators/creators";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggleTodoItem = () => dispatch(toggleTodo(todo.id));

  const deleteTodoItem = () => dispatch(deleteTodo(todo.id));

  return (
    <div className={`todo-item ${todo.completed === true ? "completed" : ""}`}>
      <li>{todo.content}</li>
      <div>
        <button className="button" onClick={toggleTodoItem}>
          <TiInputChecked />
        </button>
        <button className="button" onClick={deleteTodoItem}>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
