import { useCallback, useEffect, useSyncExternalStore } from "react";

const useLocalStorageSubscribe = (callback: () => void) => {
  window.addEventListener("theme-update", callback);
  return () => window.removeEventListener("theme-update", callback);
};

export function useTheme() {
  const theme = useSyncExternalStore(
    useLocalStorageSubscribe,
    () => localStorage.getItem("theme-v3") ?? undefined,
    () => undefined,
  );

  const setTheme = useCallback((theme: "light" | "dark") => {
    localStorage.setItem("theme-v3", theme);
    window.dispatchEvent(new Event("theme-update"));
  }, []);

  useEffect(() => {
    if (!theme) return;

    if (theme === "light")
      document.querySelector("html")?.classList.remove("dark");
    else document.querySelector("html")?.classList.add("dark");
  }, [theme]);

  return [theme, setTheme] as const;
}
