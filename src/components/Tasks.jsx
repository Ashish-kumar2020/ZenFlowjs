import React, { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle, InboxIcon, Plus, Zap } from "lucide-react";
import WorkFlowBoard from "./WorkFlowBoard";
import TodoInput from "./TodoInput";


const Tasks = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });
  const [backlogTask, setBacklogTask] = useState(() => {
    const saved = localStorage.getItem("backlogTodos");
    return saved ? JSON.parse(saved) : [];
  });

  const [doneTask, setDoneTask] = useState(() => {
    const saved = localStorage.getItem("doneTask");
    return saved ? JSON.parse(saved) : [];
  });

  const [inprogressTask, setInProgressTask] = useState(() => {
    const currentTask = localStorage.getItem("inprogressTask");
    return currentTask ? JSON.parse(currentTask) : [];
  });

  const submitTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      ...todoData,
      id: Date.now(),
      status: "backlog",
      priority: "low",
      startDate: "",
      endDate: "",
    };

    setBacklogTask((prev) => {
      const updated = [...prev, newTodo];
      localStorage.setItem("backlogTodos", JSON.stringify(updated));
      return updated;
    });

    setTodoData({
      title: "",
      description: "",
    });
  };

  const updateStartDate = (id, startDate) => {
    const update = (tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, startDate } : task));
    const updatedBacklog = update(backlogTask);
    const updatedInProgress = update(inprogressTask);
    const updatedDone = update(doneTask);

    setBacklogTask(updatedBacklog);
    setInProgressTask(updatedInProgress);
    setDoneTask(updatedDone);

    localStorage.setItem("backlogTodos", JSON.stringify(updatedBacklog));
    localStorage.setItem("inprogressTask", JSON.stringify(updatedInProgress));
    localStorage.setItem("doneTask", JSON.stringify(updatedDone));
  };
   const updateEndDate = (id, endDate) => {
    const update = (tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, endDate } : task));
    const updatedBacklog = update(backlogTask);
    const updatedInProgress = update(inprogressTask);
    const updatedDone = update(doneTask);

    setBacklogTask(updatedBacklog);
    setInProgressTask(updatedInProgress);
    setDoneTask(updatedDone);

    localStorage.setItem("backlogTodos", JSON.stringify(updatedBacklog));
    localStorage.setItem("inprogressTask", JSON.stringify(updatedInProgress));
    localStorage.setItem("doneTask", JSON.stringify(updatedDone));
  };

  const updateTaskPriority = (id, priority) => {
    const update = (tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, priority } : task));

    const updatedBacklog = update(backlogTask);
    const updatedInProgress = update(inprogressTask);
    const updatedDone = update(doneTask);

    setBacklogTask(updatedBacklog);
    setInProgressTask(updatedInProgress);
    setDoneTask(updatedDone);

    localStorage.setItem("backlogTodos", JSON.stringify(updatedBacklog));
    localStorage.setItem("inprogressTask", JSON.stringify(updatedInProgress));
    localStorage.setItem("doneTask", JSON.stringify(updatedDone));
  };

  const removeTask = (id) => {
    const updatedBacklog = backlogTask.filter((t) => t.id !== id);
    const updatedInProgress = inprogressTask.filter((t) => t.id !== id);
    const updatedDone = doneTask.filter((t) => t.id !== id);

    setBacklogTask(updatedBacklog);
    setInProgressTask(updatedInProgress);
    setDoneTask(updatedDone);

    localStorage.setItem("backlogTodos", JSON.stringify(updatedBacklog));
    localStorage.setItem("inprogressTask", JSON.stringify(updatedInProgress));
    localStorage.setItem("doneTask", JSON.stringify(updatedDone));
  };

  const moveTask = (id) => {
    const taskToMove = backlogTask.find((task) => task.id === id);
    if (!taskToMove) return;

    const updatedBacklog = backlogTask.filter((task) => task.id !== id);
    const updatedInProgress = [
      ...inprogressTask,
      { ...taskToMove, status: "inprogress" },
    ];

    setBacklogTask(updatedBacklog);
    setInProgressTask(updatedInProgress);

    localStorage.setItem("backlogTodos", JSON.stringify(updatedBacklog));
    localStorage.setItem("inprogressTask", JSON.stringify(updatedInProgress));
  };

  const moveTaskToDone = (id) => {
    const taskToMove = inprogressTask.find((task) => task.id === id);
    if (!taskToMove) return;

    const updatedInProgress = inprogressTask.filter((task) => task.id !== id);
    const updatedDone = [...doneTask, { ...taskToMove, status: "done" }];

    setInProgressTask(updatedInProgress);
    setDoneTask(updatedDone);

    localStorage.setItem("inprogressTask", JSON.stringify(updatedInProgress));
    localStorage.setItem("doneTask", JSON.stringify(updatedDone));
  };

  const isTodoValid =
    todoData.title.trim() !== "" && todoData.description.trim() !== "";
  return (
    <div className="max-w-6xl mx-auto px-6 py-5">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-8">Tasks</h1>
        <div className="max-w-4xl mx-auto w-full mb-12">
          <form className="bg-zinc-900/50 border border-zinc-800 p-1.5 rounded-2xl flex flex-col md:flex-row gap-2 shadow-2xl focus-within:border-indigo-500/50 transition-colors">
            <div className="flex-1 flex flex-col md:flex-row gap-2 px-2">
              <TodoInput
                type="text"
                value={todoData.title}
                onChange={(e) =>
                  setTodoData({ ...todoData, title: e.target.value })
                }
                placeholder="Task Title..."
                className="flex-[0.4] bg-transparent text-zinc-100 placeholder-zinc-600 px-4 py-3 outline-none border-b md:border-b-0 md:border-r border-zinc-800 focus:border-indigo-500/50 transition-colors"
              />

              <TodoInput
                type="text"
                value={todoData.description}
                onChange={(e) =>
                  setTodoData({ ...todoData, description: e.target.value })
                }
                placeholder="Describe the objective..."
                className="flex-[0.4] bg-transparent text-zinc-100 placeholder-zinc-600 px-4 py-3 outline-none border-b md:border-b-0  border-zinc-800 focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <Button
              type="submit"
              disabled={!isTodoValid}
              onClick={submitTodo}
              className={`
            flex items-center justify-center gap-2 px-6 py-6 rounded-xl font-semibold transition-all duration-200
            ${
              isTodoValid
                ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 active:scale-95"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            }
          `}
            >
              <Plus height="20px" width="20px" />
              <span>Add to Backlog</span>
            </Button>
          </form>
        </div>

        {/* Backlog -> Inprogress -> Done */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Backlog */}
          <WorkFlowBoard
            title="Backlog"
            statusLabel="Queued"
            totalTask={backlogTask.length}
            Icon={InboxIcon}
            iconClassName="text-zinc-200"
            tasks={backlogTask}
            removeTask={removeTask}
            moveTask={moveTask}
            buttonLabel="Move to IN PROGRESS"
            updateTaskPriority={updateTaskPriority}
            updateStartDate={updateStartDate}
            updateEndDate={updateEndDate}
          />

          {/* InProgress */}
          <WorkFlowBoard
            title="In Progress"
            statusLabel="Active"
            totalTask={inprogressTask.length}
            Icon={Zap}
            iconClassName="text-yellow-400"
            tasks={inprogressTask}
            moveTask={moveTaskToDone}
            removeTask={removeTask}
            buttonLabel="Move to DONE"
            updateTaskPriority={updateTaskPriority}
            updateStartDate={updateStartDate}
            updateEndDate={updateEndDate}
          />

          {/* Done */}
          <WorkFlowBoard
            title="Done"
            statusLabel="Completed"
            totalTask={doneTask.length}
            tasks={doneTask}
            Icon={CheckCircle}
            iconClassName="text-green-500"
            removeTask={removeTask}
            readonly
          />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
