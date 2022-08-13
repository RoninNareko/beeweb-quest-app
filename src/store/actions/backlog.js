export const ADD_BACKLOG_TASK = "ADD_BACKLOG_TASK";
export const FETCH_BACKLOG_TASKS = "FETCH_BACKLOG_TASKS";

export const addBacklogTaskActionCreator = (payload) => ({
  type: ADD_BACKLOG_TASK,
  payload,
});

export const fetchBacklogTasksActionCreator = (payload) => ({
  type: FETCH_BACKLOG_TASKS,
  payload,
});
