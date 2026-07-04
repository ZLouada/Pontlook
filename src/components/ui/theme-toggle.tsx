"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="outline" size="icon" className="w-10 h-10 shrink-0 opacity-0" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-10 h-10 shrink-0 relative flex items-center justify-center overflow-hidden"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 transition-all dark:-rotate-90 dark:opacity-0" />
      <Moon className="absolute h-5 w-5 rotate-90 opacity-0 transition-all dark:rotate-0 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
