"use client";

import { format, parseISO } from "date-fns";
import { useAtom } from "jotai";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { averageTicketsCreated } from "@/data/average-tickets-created";
import { dateRangeAtom } from "@/lib/atoms";
import { cn } from "@/lib/utils";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);

  const firstAvailableDate = averageTicketsCreated.reduce(
    (minDate, current) => {
      const currentDate = parseISO(current.date);
      return currentDate < minDate ? currentDate : minDate;
    },
    parseISO(averageTicketsCreated[0].date),
  );

  const lastAvailableDate = averageTicketsCreated.reduce(
    (maxDate, current) => {
      const currentDate = parseISO(current.date);
      return currentDate > maxDate ? currentDate : maxDate;
    },
    parseISO(averageTicketsCreated[averageTicketsCreated.length - 1].date),
  );

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[276px] justify-start text-left font-normal",
              !dateRange && "text-muted-foreground",
            )}
          >
            <CalendarIcon />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            fromDate={firstAvailableDate}
            toDate={lastAvailableDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
