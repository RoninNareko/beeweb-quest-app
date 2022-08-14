import { selectBacklogTasks } from "../../../store/selectors/backlogSelectors";
import { useDispatch, useSelector } from "react-redux";

import TaskCard from "./TaskCard";
import Header from "./Header";
import { selectInProgressTasks } from "../../../store/selectors/InProgressSelectors";
import { selectDoneTasks } from "../../../store/selectors/doneSelectors";
import React, { useEffect, useLayoutEffect } from "react";
import { fetchTasks } from "../../../store/asyncActions/fetchTasks";

import "./DashboardContent.scss";
import { selectSort } from "../../../store/selectors/sortSelectors";
import { sortByName } from "../../../helpers/sortByName";
import { sortByDate } from "../../../helpers/sortByDate";

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
              key={el.id}
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
      <Header count={"Backlog"} backgroundColor={"rgb(255, 226, 221)"} />
      <TaskBlock tasks={backlogTasks} />
    </section>
  );
};
const InProgress = ({ inProgressTasks }) => {
  return (
    <section className="inProgress">
      <Header count={"In progress"} backgroundColor={"rgb(253, 236, 200)"} />
      <TaskBlock tasks={inProgressTasks} InProgress={true} />
    </section>
  );
};
const Done = ({ doneTasks }) => {
  return (
    <section className="done">
      <Header count={"Done"} backgroundColor={"rgb(219, 237, 219)"} />
      <TaskBlock tasks={doneTasks} done={true} />
    </section>
  );
};

function DashboardContent(params) {
  const backlogTasks = useSelector(selectBacklogTasks);
  const inProgressTasks = useSelector(selectInProgressTasks);
  const doneTasks = useSelector(selectDoneTasks);
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const sortMode = sort["sortMode"];
  const myRef = React.useRef();

  useEffect(() => {
    dispatch(fetchTasks("backlog"));
    dispatch(fetchTasks("inProgress"));
    dispatch(fetchTasks("done"));
  }, [dispatch]);

  useLayoutEffect(() => {
    setTimeout(() => {
      myRef.current.scrollTo(0, 0);
    }, 0);
  });

  if (sortMode === "byName") {
    sortByName(backlogTasks);
    sortByName(inProgressTasks);
    sortByName(doneTasks);
  }
  if (sortMode === "byDate") {
    sortByDate(backlogTasks);
    sortByDate(inProgressTasks);
    sortByDate(doneTasks);
  }

  return (
    <section className="dashboard-content-section" ref={myRef}>
      <Backlog backlogTasks={backlogTasks} />
      <InProgress inProgressTasks={inProgressTasks} />
      <Done doneTasks={doneTasks} />
    </section>
  );
}
export default DashboardContent;
