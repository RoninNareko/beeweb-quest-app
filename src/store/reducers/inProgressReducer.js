import {
  ADD_IN_PROGRESS_TASK,
  FETCH_IN_PROGRESS_TASKS,
} from "../actions/inProgress";

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
      return {
        ...state,
        tasks: state.tasks ? [...state.tasks, newTask] : [newTask],
      };
    }
    case FETCH_IN_PROGRESS_TASKS: {
      const tasks = action.payload;
      return { tasks };
    }
    default:
      return state;
  }
}
