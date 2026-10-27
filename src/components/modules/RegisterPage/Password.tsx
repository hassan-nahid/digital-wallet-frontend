import { useId, useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
export default function Password({...field}) {
  const id = useId()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => setIsVisible((prevState) => !prevState)

  return (
    <div className="relative w-full">
      <Input
        id={id}
        className="pe-9 h-10 rounded-xl border-[#D9E2DC] dark:border-white/15 bg-white dark:bg-[#0C1A14] text-sm"
        placeholder="••••••••"
        type={isVisible ? "text" : "password"}
        {...field}
      />
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-xl transition-[color,box-shadow] outline-none cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
      >
        {isVisible ? (
          <EyeOffIcon size={16} aria-hidden="true" />
        ) : (
          <EyeIcon size={16} aria-hidden="true" />
        )}
      </button>
    </div>
  )
}