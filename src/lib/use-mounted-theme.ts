import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// this hook is used to prevent different themes from being rendered on the client and server
export function useMountedTheme() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return {
    mounted,
    ...useTheme(),
  };
}
