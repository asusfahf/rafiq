import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return { theme, setTheme };
};

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={handleThemeToggle}
      className="relative flex items-center justify-center h-10 w-20 p-1 bg-background/80 backdrop-blur-sm rounded-full border border-border/30 shadow-sm transition-all duration-300 hover:shadow-md"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background slider */}
      <motion.div
        className="absolute inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-400/30"
        animate={{
          x: theme === "light" ? 0 : 32,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      {/* Light mode icon */}
      <div className={`relative z-10 flex items-center justify-center h-8 w-8 rounded-full transition-all duration-300 ${
        theme === "light" 
          ? "text-purple-600 dark:text-purple-400" 
          : "text-muted-foreground"
      }`}>
        <Sun className="h-4 w-4" />
      </div>
      
      {/* Dark mode icon */}
      <div className={`relative z-10 flex items-center justify-center h-8 w-8 rounded-full transition-all duration-300 ${
        theme === "dark" 
          ? "text-purple-600 dark:text-purple-400" 
          : "text-muted-foreground"
      }`}>
        <Moon className="h-4 w-4" />
      </div>
    </motion.button>
  );
};