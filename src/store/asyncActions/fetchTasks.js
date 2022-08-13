import { fetchBacklogTasksActionCreator } from "../actions/backlog";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { fetchinProgressTasksActionCreator } from "../actions/inProgress";
import { fetchinDoneTasksActionCreator } from "../actions/done";

export function fetchTasks(payload) {
  // The `extraArgument` is the third arg for thunk functions
  return async (dispatch, getState, api) => {
    const docRef = doc(db, payload, "narek");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().allTasks);
      const tasks = docSnap.data().allTasks;
      if (payload === "backlog") {
        dispatch(fetchBacklogTasksActionCreator(tasks));
      } else if (payload === "inProgress") {
        dispatch(fetchinProgressTasksActionCreator(tasks));
      } else {
        dispatch(fetchinDoneTasksActionCreator(tasks));
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
}
