import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FILTER_STATUS,
} from "../actions/types/types";

const initialState = {
  items: [],
  filterStatus: "all",
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;

      return {
        items: [...state.items, { content, completed: false, id }],
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const todos = state.items.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });

      return { items: todos };
    }

    case DELETE_TODO: {
      const { id } = action.payload;

      const todos = state.items.filter((item) => {
        return item.id !== id;
      });

      return { items: todos };
    }

    case FILTER_STATUS: {
      return { ...state, filterStatus: action.payload };
    }

    default: {
      return state;
    }
  }
}
