import { ADD_BACKLOG_TASK, FETCH_BACKLOG_TASKS } from "../actions/backlog";

const defaultState = {
  tasks: [],
};

export function backlogReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BACKLOG_TASK: {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        editorValue: action.payload,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case FETCH_BACKLOG_TASKS: {
      const tasks = action.payload;
      return { tasks };
    }
    default:
      return state;
  }
}
