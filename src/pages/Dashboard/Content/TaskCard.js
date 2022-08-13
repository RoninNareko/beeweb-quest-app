import { Card, Button } from "antd";
import RichTextExample from "../SlateEditor/RichTextExample";
import { useEffect, useState } from "react";
import TextContainer from "../SlateEditor/TextContainer";
import { useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { addBacklogTaskActionCreator } from "../../../store/actions/backlog";
import { addInProgressTaskActionCreator } from "../../../store/actions/inProgress";
import { addDoneTaskActionCreator } from "../../../store/actions/done";
import { db } from "../../../config/firebase";

const TaskCard = ({ taskData, allTasks, isLastTask, InProgress, done }) => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [editorValue, setEditorValue] = useState(null);
  console.log("editorValue", editorValue);
  useEffect(() => {
    if (taskData && taskData.editorValue) {
      setEditorValue(taskData.editorValue);
    }
  }, [taskData]);

  const onChangeEditor = (value) => {
    setEditorValue(value);
  };
  const addNewTask = async (e) => {
    e.preventDefault();
    setOpen(false);
    const editorValueData = { editorValue: editorValue };
    if (InProgress) {
      await setDoc(doc(db, "inProgress", "narek"), {
        allTasks: !allTasks
          ? [editorValueData]
          : [...allTasks, editorValueData],
      });
      dispatch(addInProgressTaskActionCreator(editorValue));
    } else if (done) {
      await setDoc(doc(db, "done", "narek"), {
        allTasks: !allTasks
          ? [editorValueData]
          : [...allTasks, editorValueData],
      });
      dispatch(addDoneTaskActionCreator(editorValue));
    } else {
      await setDoc(doc(db, "backlog", "narek"), {
        allTasks: !allTasks
          ? [editorValueData]
          : [...allTasks, editorValueData],
      });

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
