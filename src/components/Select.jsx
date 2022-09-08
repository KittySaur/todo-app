import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "../store/actions/creators/creators";

function Select() {
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const dispatch = useDispatch();

  const filterStatusHandler = (event) => {
    dispatch(filterTodo(event.target.value));
  };

  return (
    <div>
      <select
        className="select"
        onChange={filterStatusHandler}
        value={filterStatus}
      >
        <option value="all">all</option>
        <option value="active">active</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
}

export default Select;
