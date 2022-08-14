import { fetchBacklogTasksActionCreator } from "../actions/backlog";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { fetchinProgressTasksActionCreator } from "../actions/inProgress";
import { fetchinDoneTasksActionCreator } from "../actions/done";

export function fetchTasks(payload) {
  // The `extraArgument` is the third arg for thunk functions
  return async (dispatch, getState, api) => {
    const state = getState();
    const uid = state.authentication.userData.uid;
    const docRef = doc(db, payload, uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const tasks = docSnap.data().allTasks;
      if (payload === "backlog") {
        dispatch(fetchBacklogTasksActionCreator(tasks));
      } else if (payload === "inProgress") {
        dispatch(fetchinProgressTasksActionCreator(tasks));
      } else {
        dispatch(fetchinDoneTasksActionCreator(tasks));
      }
    }
  };
}
