import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface StepSizeInputProps {
  value: string
  onChange: (value: string) => void
  id?: string
  className?: string
}

const STEP_PRESETS = [
  { value: 1, label: "1 d", unit: "d" },
  { value: 6, label: "6 h", unit: "h" },
  { value: 12, label: "12 h", unit: "h" },
  { value: 24, label: "1 d", unit: "h" },
  { value: 48, label: "2 d", unit: "h" },
]

export function StepSizeInput({ value, onChange, id, className }: StepSizeInputProps) {
  const getSliderValue = (stepStr: string): number => {
    const match = stepStr.match(/(\d+)\s*([dhm])/i)
    if (!match) return 1
    const num = parseInt(match[1])
    const unit = match[2].toLowerCase()
    if (unit === "d") return num
    if (unit === "h") return num
    return 1
  }

  const [sliderValue, setSliderValue] = useState(getSliderValue(value))

  const handleSliderChange = (values: number[]) => {
    const val = values[0]
    setSliderValue(val)
    onChange(`${val} d`)
  }

  return (
    <div className="space-y-3">
      <Input
        id={id}
        placeholder="e.g., 1 d, 6 h, 30 m"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
      />
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1d</span>
          <span>7d</span>
          <span>14d</span>
          <span>21d</span>
          <span>30d</span>
        </div>
        <Slider
          value={[sliderValue]}
          onValueChange={handleSliderChange}
          min={1}
          max={30}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  )
}
