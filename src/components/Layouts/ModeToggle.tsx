import { Moon, Sun, Monitor, Check } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/hooks/useTheme"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="size-9 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3DE8A0]/60 relative"
          aria-label="Toggle theme"
          title="Toggle color theme"
        >
          <Sun className="h-[1.15rem] w-[1.15rem] text-[#FDBA74] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.15rem] w-[1.15rem] text-[#3DE8A0] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-36 p-1.5 bg-[#0B2318] border border-white/15 text-white shadow-2xl rounded-xl backdrop-blur-md z-50"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-xs font-semibold transition-colors ${
            theme === "light"
              ? "bg-white/15 text-[#3DE8A0]"
              : "hover:bg-white/10 text-white/90"
          }`}
        >
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-[#FDBA74]" />
            <span>Light</span>
          </div>
          {theme === "light" && <Check className="w-3.5 h-3.5 text-[#3DE8A0]" />}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-xs font-semibold transition-colors ${
            theme === "dark"
              ? "bg-white/15 text-[#3DE8A0]"
              : "hover:bg-white/10 text-white/90"
          }`}
        >
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-[#3DE8A0]" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <Check className="w-3.5 h-3.5 text-[#3DE8A0]" />}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-xs font-semibold transition-colors ${
            theme === "system"
              ? "bg-white/15 text-[#3DE8A0]"
              : "hover:bg-white/10 text-white/90"
          }`}
        >
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-[#B7CCC0]" />
            <span>System</span>
          </div>
          {theme === "system" && <Check className="w-3.5 h-3.5 text-[#3DE8A0]" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}