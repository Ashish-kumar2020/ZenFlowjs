import React, { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle, InboxIcon, Plus, Zap } from "lucide-react";

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
      description: "",
    });
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
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <div className="flex items-center gap-3">
                <InboxIcon size={18} />
                <h2 className="text-lg font-bold text-zinc-200">Backlog</h2>
                <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                  0
                </span>
              </div>
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                Queued
              </span>
            </div>
            <div className="flex flex-col gap-4 min-h-[500px] bg-zinc-900/20 rounded-2xl p-2 border border-dashed border-zinc-800/50">
              <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 py-10 opacity-50">
                <p className="text-sm">Empty Space</p>
              </div>
            </div>
          </div>

          {/* InProgress */}

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <div className="flex items-center gap-3">
                <Zap className="text-yellow-400" size={18} />
                <h2 className="text-lg font-bold text-zinc-200">In Progress</h2>
                <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                  0
                </span>
              </div>
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                Active
              </span>
            </div>
            <div className="flex flex-col gap-4 min-h-[500px] bg-zinc-900/20 rounded-2xl p-2 border border-dashed border-zinc-800/50">
              <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 py-10 opacity-50">
                <p className="text-sm">Empty Space</p>
              </div>
            </div>
          </div>

          {/* Done */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={18} />
                <h2 className="text-lg font-bold text-zinc-200">Done</h2>
                <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                  0
                </span>
              </div>
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                Completed
              </span>
            </div>
            <div className="flex flex-col gap-4 min-h-[500px] bg-zinc-900/20 rounded-2xl p-2 border border-dashed border-zinc-800/50">
              <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 py-10 opacity-50">
                <p className="text-sm">Empty Space</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
