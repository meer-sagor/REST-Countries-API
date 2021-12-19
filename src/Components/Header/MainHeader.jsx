import React from "react";
import { useTheme } from "../../Store/Theme/ThemeContext";

const MainHeader = () => {
  const [{ isDark }, toggleTheme] = useTheme();
  return (
    <button onClick={toggleTheme}> {isDark ? "Light" : "Dark"} mode</button>
  );
};

export default MainHeader;
