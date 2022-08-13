import { ADD_BACKLOG_TASK } from "../actions/backlog";

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
    default:
      return state;
  }
}
