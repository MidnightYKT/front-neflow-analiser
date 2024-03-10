const initialState = {
  todoList: [],
};

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TASKS":
      return { ...state, todoList: action.payload };
    default:
      return state;
  }
}

export default todoListReducer;
