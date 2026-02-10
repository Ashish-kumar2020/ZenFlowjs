import { Moon, Sun, Terminal } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toogleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark")
  };
  return (
    <div className="flex items-center justify-around">
      <div className="flex items-center gap-3 p-5">
        <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center cursor-pointer">
          <Terminal className="w-8 h-8 text-white" />
        </div>
        <span className="text-md font-semibold cursor-pointer">ZenflowJS</span>
      </div>

      <div className="flex items-center gap-8 ">
        <ul className="flex gap-6">
          <Link
            to=""
            className="hover:underline hover:text-indigo-400 cursor-pointer"
          >
            Tasks
          </Link>
          <Link
            to="notes"
            className="hover:underline hover:text-indigo-400 cursor-pointer"
          >
            Notes
          </Link>
          <Link
            to="flow"
            className="hover:underline hover:text-indigo-400 cursor-pointer"
          >
            Flow
          </Link>
          <Link
            to="/home/profile"
            className="hover:underline hover:text-indigo-400 cursor-pointer"
          >
            Profile
          </Link>
        </ul>

        <div className="flex items-center gap-4 pr-5">
          <Button variant="link" onClick={toogleTheme}>
            {isDark ? <Moon className="cursor-pointer" /> : <Sun className="cursor-pointer"/>}
          </Button>

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
