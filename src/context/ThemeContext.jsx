"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext=createContext();

export function ThemeProvider({children}){
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);
   const toggleTheme = () => {
     const newTheme = theme === "light" ? "dark" : "light";
     setTheme(newTheme);
     document.documentElement.className = newTheme;
     localStorage.setItem("theme", newTheme);
   };

   return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
       {children}
     </ThemeContext.Provider>
   );

   
}

export function useTheme() {
  return useContext(ThemeContext);
}