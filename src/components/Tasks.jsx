import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const Tasks = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-5">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-8">Tasks</h1>
        <div className="mx-w-4xl mx-auto w-full mb-12">
          <form className="bg-zinc-900/50 border border-zinc-800 p-1.5 rounded-2xl flex flex-col md:flex-row gap-2 shadow-2xl focus-within:border-indigo-500/50 transition-colors">
            <div className="flex-1 flex flex-col md:flex-row gap-2 px-2">
              <input
                type="text"
                className="flex-[0.4] bg-transparent text-zinc-100 placeholder-zinc-600 px-4 py-3 outline-none border-b md:border-b-0 md:border-r border-zinc-800 focus:border-indigo-500/50 transition-colors"
                placeholder="Task Title..."
              />
              <input
                type="text"
                className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 px-4 py-3 outline-none"
                placeholder="Describe the objective..."
              />
            </div>
            <Button
              type="submit"
              disabled
              className="
              h-full
    flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200
    bg-indigo-600 text-white
    disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed
  "
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
