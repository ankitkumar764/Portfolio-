// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Default theme is 'sapphire' (equivalent to previous dark)
    const [theme, setTheme] = useState('sapphire');

    useEffect(() => {
        const storedTheme = localStorage.getItem('portfolio-theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute('data-theme', storedTheme);
        } else {
            document.documentElement.setAttribute('data-theme', 'sapphire');
        }
    }, []);

    const changeTheme = (themeName) => {
        setTheme(themeName);
        localStorage.setItem('portfolio-theme', themeName);
        document.documentElement.setAttribute('data-theme', themeName);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
