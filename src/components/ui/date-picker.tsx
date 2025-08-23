import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  min?: string;
  max?: string;
}

export function DatePicker({ value, onChange, placeholder, min, max }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const selectedDate = value ? new Date(value) : undefined;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={"w-full justify-start text-left font-normal " + (!value ? "text-muted-foreground" : "")}
        >
          {value ? format(new Date(value), "yyyy-MM-dd") : (placeholder || "Pick a date")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={date => {
            if (date) {
              onChange(format(date, "yyyy-MM-dd"));
              setOpen(false);
            }
          }}
          initialFocus
          fromDate={min ? new Date(min) : undefined}
          toDate={max ? new Date(max) : undefined}
        />
      </PopoverContent>
    </Popover>
  );
}
