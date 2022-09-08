import { FILTER_STATUS } from "../store/filterConstants";
import { filterTodo } from "../store/actions/creators/creators";
import { useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <div>
        <select className="select">
          <option value={FILTER_STATUS.ALL}>all</option>
          <option value={FILTER_STATUS.ACTIVE}>active</option>
          <option value={FILTER_STATUS.COMPLETED}>completed</option>
        </select>
      </div> */}
      {Object.keys(FILTER_STATUS).map((filterButton) => {
        const currentFilter = FILTER_STATUS[filterButton];
        return (
          <button
            className="button"
            key={`filter-${currentFilter}`}
            onClick={
              ((event) => event.preventDefault(),
              dispatch(filterTodo(currentFilter)))
            }
          >
            {currentFilter}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
