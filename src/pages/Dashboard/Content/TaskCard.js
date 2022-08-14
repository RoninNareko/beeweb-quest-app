import { Card, Button } from "antd";
import RichTextExample from "../SlateEditor/RichTextExample";
import { useEffect, useState } from "react";
import TextContainer from "../SlateEditor/TextContainer";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { addBacklogTaskActionCreator } from "../../../store/actions/backlog";
import { addInProgressTaskActionCreator } from "../../../store/actions/inProgress";
import { addDoneTaskActionCreator } from "../../../store/actions/done";
import { db } from "../../../config/firebase";
import { selectAuthenticationData } from "../../../store/selectors/authenticationSelectors";

const TaskCard = ({ taskData, allTasks, isLastTask, InProgress, done }) => {
  const authentication = useSelector(selectAuthenticationData);
  const userData = authentication["userData"];
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [editorValue, setEditorValue] = useState(null);

  useEffect(() => {
    if (taskData && taskData.editorValue) {
      setEditorValue(taskData.editorValue);
    }
  }, [taskData]);

  const onChangeEditor = (value) => {
    setEditorValue(value);
  };

  const sendData = async (table) => {
    const editorValueData = { editorValue: editorValue, date: new Date() };

    await setDoc(doc(db, table, userData.email), {
      allTasks: !allTasks ? [editorValueData] : [...allTasks, editorValueData],
    });
  };

  const addNewTask = async (e) => {
    e.preventDefault();
    setOpen(false);
    if (InProgress) {
      sendData("inProgress");
      dispatch(addInProgressTaskActionCreator(editorValue));
    } else if (done) {
      sendData("done");
      dispatch(addDoneTaskActionCreator(editorValue));
    } else {
      sendData("backlog");

      dispatch(addBacklogTaskActionCreator(editorValue));
    }
  };

  return (
    <section className="card-section">
      {taskData && (
        <Card style={{ maxWidth: "500px" }} className="my-card">
          {editorValue && <TextContainer editorValue={editorValue} />}
        </Card>
      )}
      {(!isOpen && isLastTask) || !taskData ? (
        <Button onClick={() => setOpen(true)} type="text" danger>
          + New
        </Button>
      ) : null}
      {isOpen && (
        <>
          <Card style={{ maxWidth: "500px" }} className="editor-card">
            <RichTextExample onChangeEditor={onChangeEditor} />
          </Card>
          <Button type="primary" onClick={addNewTask}>
            Add Task
          </Button>
        </>
      )}
    </section>
  );
};

export default TaskCard;
