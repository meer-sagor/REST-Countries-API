import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";
import Avatar from "../UI/Avatar";

import classes from "./CountryItem.module.css";

const CountryItem = (props) => {
  const navigate = useNavigate();
  const { name, region, population, capital, flags, ccn3 } = props.country;
  const countryDetailsHandler = () => {
    navigate(`${"/country-details"}/${ccn3}`);
  };

  return (
    <Card className={classes.country} onClick={countryDetailsHandler}>
      <div className={classes['country-img']}>
      <Avatar src={flags.svg} alt={name.common} />
      </div>
      <div className={classes.country_content}>
        <h2>{name.common}</h2>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Card>
  );
};

export default CountryItem;
