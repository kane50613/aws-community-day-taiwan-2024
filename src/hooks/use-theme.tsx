import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark" | undefined>(
    "theme-v2",
    undefined,
  );

  useEffect(() => {
    if (!theme)
      return setTheme(
        "matchMedia" in window
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : "light",
      );

    if (theme === "light")
      document.querySelector("html")?.classList.remove("dark");
    else document.querySelector("html")?.classList.add("dark");
  }, [theme]);

  return [theme, setTheme] as const;
}
