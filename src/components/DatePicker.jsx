import { Calendar as CalendarIcon } from "lucide-react";
import React, { useState } from "react";

import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { format } from "date-fns";

const DatePicker = () => {
     const [date, setDate] = useState(null);
  return (
     <Popover>
            <PopoverTrigger asChild>
              <button
                className="flex items-center gap-2 bg-zinc-800/70 text-zinc-400 text-[11px] px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-700 transition-colors"
              >
                <CalendarIcon size={14} />
                {date ? format(date, "dd/MM/yyyy") : "DD/MM/YYYY"}
              </button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="w-auto p-3 bg-zinc-800 border border-zinc-700 rounded-xl shadow-xl"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="text-zinc-200"
              />
            </PopoverContent>
          </Popover>
  )
}

export default DatePicker