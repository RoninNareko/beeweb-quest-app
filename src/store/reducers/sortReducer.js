import { SORT_BY_DATE, SORT_BY_NAME } from "../actions/sort";

const defaultState = {
  sortMode: "byDate",
};

export function sortReducer(state = defaultState, action) {
  switch (action.type) {
    case SORT_BY_NAME: {
      return { ...state, sortMode: action.payload };
    }

    case SORT_BY_DATE: {
      return { ...state, sortMode: action.payload };
    }

    default:
      return state;
  }
}
