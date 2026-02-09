import { Moon, Terminal } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 p-5">
        <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center cursor-pointer">
          <Terminal className="w-8 h-8 text-white" />
        </div>
        <span className="text-md font-semibold cursor-pointer">ZenflowJS</span>
      </div>

      <div className="flex items-center gap-8 ml-auto">
        <ul className="flex gap-6">
          <li className="hover:underline hover:text-indigo-400 cursor-pointer">Tasks</li>
          <li className="hover:underline hover:text-indigo-400 cursor-pointer">Notes</li>
          <li className="hover:underline hover:text-indigo-400 cursor-pointer">Flow</li>
          <li className="hover:underline hover:text-indigo-400 cursor-pointer">Profile</li>
        </ul>

        <div className="flex items-center gap-4 pr-5">
          <Moon className="cursor-pointer"/>

          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <h2 className="text-sm font-semibold">Ashish Singh</h2>
              <p className="text-xs text-gray-400">Admin Level</p>
            </div>

            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
