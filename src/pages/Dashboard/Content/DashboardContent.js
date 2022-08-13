import { selectBacklogTasks } from "../../../store/selectors/backlogSelectors";
import { useDispatch, useSelector } from "react-redux";

import TaskCard from "./TaskCard";
import Header from "./Header";
import { selectInProgressTasks } from "../../../store/selectors/InProgressSelectors";
import { selectDoneTasks } from "../../../store/selectors/doneSelectors";
import "./DashboardContent.scss";
import { useEffect } from "react";
import { fetchTasks } from "../../../store/asyncActions/fetchTasks";

const TaskBlock = ({ tasks = [], InProgress = false, done = false }) => {
  return (
    <>
      {tasks.length ? (
        tasks.map((el, idx, arr) => {
          const isLastTask = idx === arr.length - 1;
          return (
            <TaskCard
              InProgress={InProgress}
              done={done}
              key={el.id + 1}
              taskData={el}
              allTasks={tasks}
              isLastTask={isLastTask}
            />
          );
        })
      ) : (
        <TaskCard taskData={false} InProgress={InProgress} done={done} />
      )}
    </>
  );
};

const Backlog = ({ backlogTasks }) => {
  return (
    <section className="backlog">
      <Header count={"Backlog"} />
      <TaskBlock tasks={backlogTasks} />
    </section>
  );
};
const InProgress = ({ inProgressTasks }) => {
  return (
    <section className="inProgress">
      <Header count={"In progress"} />
      <TaskBlock tasks={inProgressTasks} InProgress={true} />
    </section>
  );
};
const Done = ({ doneTasks }) => {
  return (
    <section className="done">
      <Header count={"Done"} />
      <TaskBlock tasks={doneTasks} done={true} />
    </section>
  );
};

function DashboardContent(params) {
  const backlogTasks = useSelector(selectBacklogTasks);
  const inProgressTasks = useSelector(selectInProgressTasks);
  const doneTasks = useSelector(selectDoneTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks("backlog"));
    dispatch(fetchTasks("inProgress"));
    dispatch(fetchTasks("done"));
  }, [dispatch]);
  return (
    <section className="dashboard-content-section">
      <Backlog backlogTasks={backlogTasks} />
      <InProgress inProgressTasks={inProgressTasks} />
      <Done doneTasks={doneTasks} />
    </section>
  );
}
export default DashboardContent;
