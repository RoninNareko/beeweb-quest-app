import { ADD_IN_PROGRESS_TASK } from "../actions/inProgress";

const defaultState = {
  tasks: [],
};

export function inProgressReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_IN_PROGRESS_TASK: {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        editorValue: action.payload,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    default:
      return state;
  }
}
