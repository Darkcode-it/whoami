// // src/context/LanguageContext.js
// import React, { createContext, useState } from 'react';
//
// export const LanguageContext = createContext();
//
// export const LanguageProvider = ({ children }) => {
//     const [language, setLanguage] = useState('fa'); // 'fa' یا 'en'
//
//     const toggleLanguage = () => {
//         setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
//     };
//
//     return (
//         <LanguageContext.Provider value={{ language, toggleLanguage }}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };

import React, { createContext, useState, useContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const themes = {
    light: {
        name: 'light',
        colors: {
            text: 'black',
            bg: '#f8f9fa',
            bgSecondary: '#e9ecef',
            primary: '#3B82F6',
            secondary: '#10B981',
            accent: '#8B5CF6'
        }
    },
    dark: {
        name: 'dark',
        colors: {
            text: 'rgb(154, 159, 170)',
            bg: 'rgb(18, 24, 38)',
            bgSecondary: 'rgb(24, 32, 48)',
            primary: '#60A5FA',
            secondary: '#34D399',
            accent: '#A78BFA'
        }
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? themes[savedTheme] : themes.light;
    });

    useEffect(() => {
        localStorage.setItem('theme', currentTheme.name);
        document.documentElement.style.setProperty('--text-color', currentTheme.colors.text);
        document.documentElement.style.setProperty('--bg-color', currentTheme.colors.bg);
        document.documentElement.style.setProperty('--bg-color-secondary', currentTheme.colors.bgSecondary);
        document.documentElement.style.setProperty('--primary-color', currentTheme.colors.primary);
        document.documentElement.style.setProperty('--secondary-color', currentTheme.colors.secondary);
        document.documentElement.style.setProperty('--accent-color', currentTheme.colors.accent);
        document.documentElement.setAttribute('data-theme', currentTheme.name);
    }, [currentTheme]);

    const toggleTheme = (themeName) => {
        setCurrentTheme(themes[themeName]);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};