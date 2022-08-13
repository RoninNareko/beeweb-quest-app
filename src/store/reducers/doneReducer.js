import { ADD_DONE_TASK } from "../actions/done";

const defaultState = {
  tasks: [],
};

export function doneReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_DONE_TASK: {
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
