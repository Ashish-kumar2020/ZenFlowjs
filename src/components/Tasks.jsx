import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const Tasks = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });

  const submitTodo = (e) => {
    e.preventDefault();
    console.log("Todo Submitted", todoData);
    setTodoData({
      title: "",
      description: ""
    })
  };

  const isTodoValid =
    todoData.title.trim() !== "" && todoData.description.trim() !== "";
  return (
    <div className="max-w-6xl mx-auto px-6 py-5">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-8">Tasks</h1>
        <div className="mx-w-4xl mx-auto w-full mb-12">
          <form className="bg-zinc-900/50 border border-zinc-800 p-1.5 rounded-2xl flex flex-col md:flex-row gap-2 shadow-2xl focus-within:border-indigo-500/50 transition-colors">
            <div className="flex-1 flex flex-col md:flex-row gap-2 px-2">
              <input
                type="text"
                value={todoData.title}
                onChange={(e) =>
                  setTodoData({ ...todoData, title: e.target.value })
                }
                className="flex-[0.4] bg-transparent text-zinc-100 placeholder-zinc-600 px-4 py-3 outline-none border-b md:border-b-0 md:border-r border-zinc-800 focus:border-indigo-500/50 transition-colors"
                placeholder="Task Title..."
              />
              <input
                type="text"
                value={todoData.description}
                onChange={(e) =>
                  setTodoData({ ...todoData, description: e.target.value })
                }
                className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 px-4 py-3 outline-none"
                placeholder="Describe the objective..."
              />
            </div>
            <Button
              type="submit"
              disabled={!isTodoValid}
              onClick={submitTodo}
              className={`
            flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200
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
      </div>
    </div>
  );
};

export default Tasks;
