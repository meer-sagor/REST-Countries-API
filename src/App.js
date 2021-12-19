import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Welcome from "./Pages/Welcome";
import CountryDetails from "./Pages/CountryDetails";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/country-details/:countryId"
          element={<CountryDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
