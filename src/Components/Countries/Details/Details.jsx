import React from "react";
import { useParams } from "react-router-dom";
import { useCountry } from "../../../Store/Country/CountryContext";

import DetailsItem from "./DetailsItem";

const Details = () => {
  const { countryId } = useParams();

  const { data } = useCountry();

  const countryDetailsById = data?.filter(
    (country) => country.ccn3 === countryId
  );

  return (
    <>
      {countryDetailsById?.map((details) => (
        <DetailsItem key={details.ccn3} countryDetails={details} />
      ))}
    </>
  );
};

export default Details;
