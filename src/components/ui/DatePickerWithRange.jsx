import * as React from "react"
import { addDays, addMonths, addYears, format } from "date-fns"
import { CalendarIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange({ className, ...props }) {
  const [date, setDate] = React.useState({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  const handleDateRange = (days) => {
    setDate({
      from: addDays(new Date(), -days),
      to: new Date(),
    })
  }

  const handleMonth = () => {
    setDate({
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      to: new Date(),
    })
  }

  const handleMonths = (months) => {
    setDate({
      from: addMonths(new Date(), -months),
      to: new Date(),
    })
  }

  const handleYear = () => {
    setDate({
      from: new Date(new Date().getFullYear(), 0, 1),
      to: new Date(),
    })
  }
  
  const handleYears = (years) => {
    setDate({
      from: addYears(new Date(), -years),
      to: new Date(),
    })
  }
  

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
            {...props}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LL/dd/y")} - {" "}
                  {format(date.to, "LL/dd/y")}
                </>
              ) : (
                format(date.from, "LL/dd/y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto p-0" align="start">
          <div className="flex flex-col items-center w-full p-4 space-x-2 border-r-2">
            <Button variant="ghost" size="sm" onClick={() => handleDateRange(7)}>Last 7 days</Button>
            <Button variant="ghost" size="sm" onClick={() => handleDateRange(14)}>Last 14 days</Button>
            <Button variant="ghost" size="sm" onClick={handleMonth}>This month</Button>
            <Button variant="ghost" size="sm" onClick={() => handleMonths(3)}>Last 3 months</Button>
            <Button variant="ghost" size="sm" onClick={() => handleMonths(6)}>Last 6 months</Button>
            <Button variant="ghost" size="sm" onClick={handleYear}>This year</Button>
            <Button variant="ghost" size="sm" onClick={() => handleYears(1)}>Last year</Button>
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
