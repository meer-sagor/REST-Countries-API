import CountryProvider from "../../Store/Country/CountryContext";
import ThemeProvider from "../../Store/Theme/ThemeContext";

const CombineContext = (props) => {
  return (
    <ThemeProvider>
      <CountryProvider>{props.children}</CountryProvider>;
    </ThemeProvider>
  );
};

export default CombineContext;
