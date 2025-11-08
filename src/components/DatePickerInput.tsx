import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface DatePickerInputProps {
  value: string
  onChange: (value: string) => void
  id?: string
  className?: string
}

export function DatePickerInput({ value, onChange, id, className }: DatePickerInputProps) {
  const [open, setOpen] = useState(false)
  const date = value ? new Date(value) : undefined

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      onChange(format(selectedDate, "yyyy-MM-dd"))
      setOpen(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Input
        id={id}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn("bg-background/50", className)}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "px-3",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
