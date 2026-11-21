import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const label = dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={label} title={label} className="shrink-0 text-foreground">
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
};

export default ThemeToggle;