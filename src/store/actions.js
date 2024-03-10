export function getTodoListSuccess(date) {
  return {
    type: "GET_TASKS",
    payload: date,
  };
}
