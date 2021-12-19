import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
const themes = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
