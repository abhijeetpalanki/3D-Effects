import React from 'react'

export const themes = {
    dark: {
        color: "black",
    },
    light: {
        color: "white",
    },
}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext; 