import { AxiosError } from "axios";
import { TodoState } from "./todoReducers";
import ActionTypes from "../../constants/action_types";

export interface singleTodoReducerInterface {
  singleTodo: TodoState;
  isLoading?: boolean;
  error?: AxiosError | null;
}

// const initialState: TodoState = {
//   _id: "",
//   title: "",
//   description: "",
//   isDone: false,
// };

const initialState: singleTodoReducerInterface = {
  singleTodo: {
    _id: "",
    title: "",
    description: "",
    isDone: false,
  },
  isLoading: false,
};
export const singleTodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_SINGLE_TODO_REQUEST:
      return {
        isLoading: true,
        error: null,
      };

    case ActionTypes.GET_SINGLE_TODO_SUCCESS:
      return {
        isLoading: false,
        singleTodo: action.payload,
        error: null,
      };

    case ActionTypes.GET_SINGLE_TODO_FAILURE:
      return {
        todos: {},
        error: action.payload,
        isLoading: false,
      };
    case ActionTypes.CLEAR_SINGLE_TODO:
      return {
        singleTodo: {},
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
