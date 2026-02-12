
import React from "react";
import TaskCard from "./TaskCard";

const WorkFlowBoard = ({
  title,
  statusLabel,
  totalTask,
  Icon,
  iconClassName,
  tasks =[],
  removeTask
}) => {
  const isBackLogTaskAvaiabe = tasks.length > 0;


  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2 mb-2">
        <div className="flex items-center gap-3">
          {Icon && <Icon className={iconClassName} size={18} />}
          <h2 className="text-lg font-bold text-zinc-200">{title}</h2>
          <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
            {totalTask}
          </span>
        </div>
        <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
          {statusLabel}
        </span>
      </div>
      <div className="flex flex-col gap-4 min-h-[500px] bg-zinc-900/20 rounded-2xl p-2 border border-dashed border-zinc-800/50">
        <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 py-10 opacity-50">
          {isBackLogTaskAvaiabe ? <TaskCard 
            tasks={tasks}
            removeTask={removeTask}
          /> : <p className="text-sm">Empty Space</p>}
        </div>
      </div>
    </div>
  );
};

export default WorkFlowBoard;
