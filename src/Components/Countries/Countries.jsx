import React, { useState } from "react";
import { useCountry } from "../../Store/Country/CountryContext";
import LoadingSpinner from "../UI/LoadingSpinner";
import CountryItem from "./CountryItem";

import Card from "../UI/Card";

import classes from "./Countries.module.css";
import Region from "./Region";

const Countries = () => {
  const { loading, data, error } = useCountry();
  const [search, setSearch] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");
  console.log(filterByRegion);

  if (error) {
    return <Card className={classes["error-text"]}>{error}</Card>;
  }

  const filteringCountry = data?.filter((val) =>
    val.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={classes["search-container"]}>
        <input
          type="search"
          id=""
          placeholder="Search for country"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <select
          name=""
          className={classes.select}
          onChange={(e) => setFilterByRegion(e.target.value)}
          value={filterByRegion}
        >
          <option value="">Filter By Region</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>

          {data?.map((region, index) => (
            <Region key={index} region={region} />
          ))}
        </select>
      </div>

      {loading && <LoadingSpinner />}
      <div className={classes.countries}>
        {filteringCountry?.map((country) => (
          <CountryItem key={country.cca2} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
