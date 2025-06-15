"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  actualTheme: "light" | "dark"; // The actual theme being displayed
  toggleTheme: () => void;
  setSystemTheme: () => void;
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return a default value instead of throwing during SSR
    if (typeof window === "undefined") {
      return {
        theme: "system" as Theme,
        actualTheme: "light" as "light" | "dark",
        toggleTheme: () => {},
        setSystemTheme: () => {},
        setLightTheme: () => {},
        setDarkTheme: () => {},
      };
    }
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Apply theme to document
  const applyTheme = useCallback((themeToApply: "light" | "dark") => {
    if (typeof window !== "undefined") {
      if (themeToApply === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setActualTheme(themeToApply);
    }
  }, []);

  // Get system theme
  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }, []);

  // Resolve actual theme based on preference
  const resolveTheme = useCallback(
    (themePreference: Theme): "light" | "dark" => {
      if (themePreference === "system") {
        return getSystemTheme();
      }
      return themePreference;
    },
    [getSystemTheme]
  );

  // Save theme to localStorage
  const saveTheme = useCallback((themeToSave: Theme) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("theme-preference", themeToSave);
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }
    }
  }, []);

  // Set specific themes
  const setSystemTheme = useCallback(() => {
    setTheme("system");
    const systemTheme = getSystemTheme();
    applyTheme(systemTheme);
    saveTheme("system");
  }, [applyTheme, getSystemTheme, saveTheme]);

  const setLightTheme = useCallback(() => {
    setTheme("light");
    applyTheme("light");
    saveTheme("light");
  }, [applyTheme, saveTheme]);

  const setDarkTheme = useCallback(() => {
    setTheme("dark");
    applyTheme("dark");
    saveTheme("dark");
  }, [applyTheme, saveTheme]);

  // Toggle between light, dark, and system
  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setDarkTheme();
    } else if (theme === "dark") {
      setSystemTheme();
    } else {
      setLightTheme();
    }
  }, [theme, setDarkTheme, setSystemTheme, setLightTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== "undefined" && theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        const newSystemTheme = e.matches ? "dark" : "light";
        applyTheme(newSystemTheme);
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);

      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    }
  }, [theme, applyTheme]);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      try {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem("theme-preference") as Theme;

        // Use saved preference or default to system
        const initialTheme = savedTheme || "system";
        setTheme(initialTheme);

        // Apply the resolved theme
        const resolvedTheme = resolveTheme(initialTheme);
        applyTheme(resolvedTheme);
      } catch (error) {
        console.warn("Failed to initialize theme:", error);
        // Fallback to system theme
        setTheme("system");
        const systemTheme = getSystemTheme();
        applyTheme(systemTheme);
      }
    }
  }, [applyTheme, resolveTheme, getSystemTheme]);

  // Always render children, but with a fallback state during SSR
  if (!mounted) {
    // During SSR, provide a stable fallback
    return (
      <ThemeContext.Provider
        value={{
          theme: "system",
          actualTheme: "light",
          toggleTheme: () => {},
          setSystemTheme: () => {},
          setLightTheme: () => {},
          setDarkTheme: () => {},
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        actualTheme,
        toggleTheme,
        setSystemTheme,
        setLightTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
