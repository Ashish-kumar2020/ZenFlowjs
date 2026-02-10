import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Moon,
  LayoutDashboard,
  FileText,
  Activity,
  Terminal,
  Sun,
} from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Left - Logo */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <Terminal />
          </div>
          <span className="text-lg font-semibold text-zinc-900 dark:text-white tracking-tight">
            ZenflowJS
          </span>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium ${
                isActive
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`
            }
          >
            <LayoutDashboard size={18} />
            Tasks
          </NavLink>

          <NavLink
            to="notes"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium ${
                isActive
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`
            }
          >
            <FileText size={18} />
            Notes
          </NavLink>

          <NavLink
            to="flow"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium ${
                isActive
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`
            }
          >
            <Activity size={18} />
            Flow
          </NavLink>
        </nav>

        {/* Right - User */}
        <div className="flex items-center gap-6">
          <button
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
            onClick={toggleTheme}
          >
            {isDark ? <Moon /> : <Sun />}
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-none">
                Ashish Singh
              </p>
              <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                Admin Level
              </p>
            </div>

            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
              A
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
