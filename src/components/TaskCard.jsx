import React from "react";
import { Button } from "./ui/button";

import DatePicker from "./DatePicker";
import { MoveRight, Trash } from "lucide-react";

const TaskCard = ({ tasks = [],removeTask }) => {

  const moveTask = (taskId) => {
    console.log("task Moved",taskId)
  }


  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="w-full group mb-4 relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-indigo-500/50 transition-all duration-200 shadow-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-zinc-100 line-clamp-1">{task.title}</h3>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button onClick={() => removeTask(task.id)} className="p-1.5 text-zinc-500 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors">
                <Trash size={16} />
              </Button>
            </div>
          </div>

          <p className="text-sm text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
            {task.description}
          </p>

          <div className="space-y-3 pt-3 border-t border-zinc-800/50">
            <div className="flex flex-wrap gap-2">
              <select className="appearance-none bg-zinc-800/80 text-[11px] font-bold px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-700 transition-colors focus:outline-none text-zinc-400">
                <option>PRIORITY</option>
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
              </select>

              <DatePicker />
            </div>
            <DatePicker />
            <Button onClick={() => moveTask(task.id)} className="group w-full flex items-center justify-center gap-2 py-2 text-[12px] font-medium text-indigo-400 bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/20 rounded-lg transition-all">
              Move to IN PROGRESS{" "}
              <MoveRight
                size={14}
                className="opacity-80 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskCard;
