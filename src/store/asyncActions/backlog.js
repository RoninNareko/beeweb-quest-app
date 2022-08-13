import { addBacklogTaskActionCreator } from "../actions/backlog";

export function setBacklogTasks(payload) {
  // The `extraArgument` is the third arg for thunk functions
  return (dispatch, getState, api) => {
    dispatch(addBacklogTaskActionCreator(payload));
  };
}
