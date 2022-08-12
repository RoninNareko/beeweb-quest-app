import { Card, Button, Badge } from "antd";
import { selectBacklogTasks } from "../../../store/selectors/backlogSelectors";
import { useSelector, useDispatch } from "react-redux";
import { addBacklogTaskActionCreator } from "../../../store/actions/backlog";

import "./DashboardContent.scss";
import RichTextExample from "../SlateEditor/RichTextExample";
import { useEffect, useState } from "react";
import TextContainer from "../SlateEditor/TextContainer";

const Header = () => (
  <header
    style={{
      marginBottom: "10px",
    }}
  >
    <Badge count={"backlog"} />
  </header>
);

const TaskCard = ({ taskData }) => {
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
  const addNewTask = (e) => {
    e.preventDefault();
    setOpen(true);
    dispatch(addBacklogTaskActionCreator(editorValue));
  };

  return (
    <section className="card-section">
      <Card>{editorValue && <TextContainer editorValue={editorValue} />}</Card>
      {!isOpen && (
        <Button onClick={() => setOpen(true)} type="text" danger>
          + New
        </Button>
      )}
      {isOpen && (
        <>
          <Card className="editor-card">
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

const Backlog = ({ backlogTasks }) => {
  console.log("backlogTasks", backlogTasks);
  return (
    <section className="backlog">
      <Header />
      {backlogTasks.length &&
        backlogTasks.map((el) => {
          return <TaskCard key={el.id} taskData={el} />;
        })}
    </section>
  );
};
const ToDo = () => {
  return (
    <section className="toDo">
      <Header />
      <TaskCard />
      <TaskCard />
    </section>
  );
};
const Done = () => {
  return (
    <section className="done">
      <Header />
      <TaskCard />
      <TaskCard />
    </section>
  );
};

function DashboardContent(params) {
  const backlogTasks = useSelector(selectBacklogTasks);
  console.log("backlogTasks list", backlogTasks);
  return (
    <section className="dashboard-content-section">
      <Backlog backlogTasks={backlogTasks} />
      <ToDo />
      <Done />
    </section>
  );
}
export default DashboardContent;
