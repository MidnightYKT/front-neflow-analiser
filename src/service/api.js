import axios from "axios";
import { getTodoListSuccess } from "../store/actions";

export const fetchTasks = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        dispatch(getTodoListSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
