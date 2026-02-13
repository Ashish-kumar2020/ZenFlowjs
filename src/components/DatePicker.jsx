import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";

import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { format } from "date-fns";

const DatePicker = ({ value, onChange, disabled }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          disabled={disabled}
          className={`flex items-center gap-2 px-3 py-1.5 text-[11px] rounded-md
            ${disabled
              ? "bg-zinc-800/40 text-zinc-500 cursor-not-allowed"
              : "bg-zinc-800/70 hover:border-zinc-700"}
          `}
        >
          <CalendarIcon size={14} />
          {value ? format(value, "dd/MM/yyyy") : "DD/MM/YYYY"}
        </button>
      </PopoverTrigger>

      {!disabled && (
        <PopoverContent>
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
          />
        </PopoverContent>
      )}
    </Popover>
  );
};


export default DatePicker