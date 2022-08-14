import { AUTHENTICATION } from "../actions/authentication";

const defaultState = {
  auth: false,
  userData: null,
};

export function authenticationReducer(state = defaultState, action) {
  switch (action.type) {
    case AUTHENTICATION: {
      return {
        auth: true,
        userData: action.payload,
      };
    }
    default:
      return state;
  }
}
