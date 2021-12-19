import React from "react";
import MainHeader from "./MainHeader";

import classes from "./Header.module.css";
import { useTheme } from "../../Store/Theme/ThemeContext";

const Header = () => {
  const [{ theme }] = useTheme();
  return (
    <header
      className={classes.header}
      style={{ background: theme.background, color: theme.color }}
    >
      <h2>where in the world</h2>
      <MainHeader />
    </header>
  );
};

export default Header;
