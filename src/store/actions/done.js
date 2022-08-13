export const ADD_DONE_TASK = "ADD_DONE_TASK";
export const FETCH_DONE_TASK = "FETCH_DONE_TASK";

export const addDoneTaskActionCreator = (payload) => ({
  type: ADD_DONE_TASK,
  payload,
});

export const fetchinDoneTasksActionCreator = (payload) => ({
  type: FETCH_DONE_TASK,
  payload,
});
