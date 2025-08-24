"use client"

import React, {createContext, useContext, useEffect, useState} from "react";

type Theme = "light" | "dark";
type DarkModeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    selectTheme: (theme: Theme) => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({children}: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const selectTheme = (mode: Theme) => {
        setTheme(mode);
    };

    return (
        <DarkModeContext.Provider value={{theme, toggleTheme, selectTheme}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) throw new Error("useDarkMode باید داخل DarkModeProvider استفاده بشه");
    return context;
};
