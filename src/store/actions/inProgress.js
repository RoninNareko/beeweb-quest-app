export const ADD_IN_PROGRESS_TASK = "ADD_IN_PROGRESS_TASK";
export const FETCH_IN_PROGRESS_TASKS = "FETCH_IN_PROGRESS_TASKS";

export const addInProgressTaskActionCreator = (payload) => ({
  type: ADD_IN_PROGRESS_TASK,
  payload,
});

export const fetchinProgressTasksActionCreator = (payload) => ({
  type: FETCH_IN_PROGRESS_TASKS,
  payload,
});
