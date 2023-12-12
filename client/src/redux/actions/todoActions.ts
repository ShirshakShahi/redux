import ActionTypes from "../../constants/action_types";
import { API } from "../../config/baseUrlProvider";
import APIEndpoints from "../../constants/api_endpoints";
import { singleTodoReducerInterface } from "../reducer/singleTodoReducer";

export const addTodos: any = (datas: any) => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.ADD_TODO_REQUEST,
  });
  try {
    const { data } = await API.post(APIEndpoints.ADD_TODO, datas);
    dispatch({
      type: ActionTypes.ADD_TODO_SUCCESS,
      payload: data.todo,
    });
  } catch (error: any) {
    dispatch({
      type: ActionTypes.ADD_TODO_FAILURE,
      payload: error?.message ?? "Something went wrong",
    });
  }
};

export const getSingleTodo: any = (id: string) => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.GET_SINGLE_TODO_REQUEST,
  });

  try {
    const { data } = await API(`${APIEndpoints.GET_SINGLE_TODO}/${id}`);
    dispatch({
      type: ActionTypes.GET_SINGLE_TODO_SUCCESS,
      payload: data.todo,
    });
  } catch (error: any) {
    dispatch({
      type: ActionTypes.GET_SINGLE_TODO_FAILURE,
      payload: error,
    });
  }
};

export const getAllTodos: any = () => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.GET_ALL_TODOS_REQUEST,
  });
  try {
    const { data } = await API.get(APIEndpoints.GET_ALL_TODOS);
    dispatch({
      type: ActionTypes.GET_ALL_TODOS_SUCCESS,
      payload: data.data,
    });
  } catch (error: any) {
    dispatch({
      type: ActionTypes.GET_ALL_TODOS_FAILURE,
      payload: error?.message ?? "Something went wrong",
    });
  }
};

export const deleteTodo: any = (id: string) => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.DELETE_TODO_REQUEST,
  });

  try {
    const { data } = await API.delete(`${APIEndpoints.DELETE_TODO}/${id}`);
    dispatch({
      type: ActionTypes.DELETE_TODO_SUCCESS,
      payload: data.todo._id,
    });
  } catch (error: any) {
    dispatch({
      type: ActionTypes.DELETE_TODO_FAILURE,
      payload: error?.message ?? "Something went wrong",
    });
  }
};

export const updateTodo: any =
  (editId: string, datas: singleTodoReducerInterface) => async (dispatch: any) => {
    dispatch({
      type: ActionTypes.UPDATE_TODO_REQUEST,
    });

    try {
      const { data } = await API.patch(
        `${APIEndpoints.UPDATE_TODO}/${editId}`,
        datas
      );
      console.log("todoaction ko 91 ma", data.updatedTodo);
      dispatch({
        type: ActionTypes.UPDATE_TODO_SUCCESS,
        payload: data.updatedTodo,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_TODO_FAILURE,
        payload: error,
      });
    }
  };

export const clearSingleTodo = () => ({
  type: ActionTypes.CLEAR_SINGLE_TODO,
});
