import { createContext, useContext } from "react";
import useAxios from "../../Hooks/useAxios";

const CountryContext = createContext({
  loading: true,
  data: null,
  error: null,
});
export const useCountry = () => useContext(CountryContext);
const CountryProvider = (props) => {
  const { loading, data, error } = useAxios({ method: "get", url: "/all" });
  const countryContextValue = {
    loading,
    data,
    error,
  };

  return (
    <CountryContext.Provider value={countryContextValue}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
