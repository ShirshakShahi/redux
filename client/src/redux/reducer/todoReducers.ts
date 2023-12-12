import { message } from "antd";
import ActionTypes from "../../constants/action_types";
import { AxiosError } from "axios";

export interface TodoState {
  _id: string;
  title: string;
  description: string;
  isDone?: boolean;
}

export interface AppState {
  todos: TodoState[];
  isLoading?: boolean;
  error?: AxiosError | null;
}

const initialState: AppState = {
  todos: [],
  isLoading: false,
};

export const todoReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.ADD_TODO_SUCCESS:
      return {
        error: null,
        isLoading: false,
        todos: [...state.todos, payload],
      };
    case ActionTypes.ADD_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case ActionTypes.GET_ALL_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_ALL_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: payload,
      };

    case ActionTypes.GET_ALL_TODOS_FAILURE:
      return {
        isLoading: false,
        error: payload,
        todos: [],
      };

    case ActionTypes.DELETE_TODO_REQUEST:
      message.loading("Loading...");
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.DELETE_TODO_SUCCESS:
      message.destroy();
      return {
        isLoading: false,
        error: null,
        todos: state.todos.filter((todo) => todo._id !== payload),
      };

    case ActionTypes.DELETE_TODO_FAILURE:
      return {
        isLoading: false,
        error: payload,
      };

    case ActionTypes.CLEAR_SINGLE_TODO:
      return {
        isLoading: false,
        error: null,
        todos: [],
      };

    case ActionTypes.UPDATE_TODO_REQUEST:
      message.loading("Loading...");

      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.UPDATE_TODO_SUCCESS:
      message.destroy();

      const { _id, title, description, isDone } = action.payload;
      return {
        isLoading: false,
        error: null,
        todos: state.todos.map((todo) =>
          todo._id === _id ? { ...todo, title, description, isDone } : todo
        ),
      };
    case ActionTypes.UPDATE_TODO_FAILURE:
      return {
        error: payload,
        isLoading: false,
        todos: [],
      };

    default:
      return state;
  }
};
