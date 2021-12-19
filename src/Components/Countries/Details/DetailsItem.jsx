import React from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../../../Components/UI/Avatar";
import Card from "../../../Components/UI/Card";
import Language from "./Language";

import classes from "./DetailsItem.module.css";

const DetailsItem = (props) => {
  const navigate = useNavigate();

  const { name, region, subregion, population, capital, flags, languages } =
    props.countryDetails;

  //converting object to an array
  const nativeName = Object.values(name.nativeName);

  return (
    <>
      <button className={classes.btn} onClick={() => navigate("/")}>
        Back
      </button>

      <div className={classes["country-details"]}>
        <Card className={classes["country-details__img"]}>
          <Avatar src={flags.svg} alt={name.common} />
        </Card>
        <div className={classes["country-details__content"]}>
          <h1>{name.common}</h1>
          <div className={classes["country-details__content--details"]}>
            <div className={classes["country-details__content--details-left"]}>
              <p>
                Native Name: <span>{nativeName[0].common}</span>
              </p>
              <p>
                Population: <span>{population}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className={classes["country-details__content--details-right"]}>
              <p>
                Top Level Domain: <span>.be</span>
              </p>
              <p>
                Currencies: <span>Euro</span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  <Language languages={languages} />
                </span>
              </p>
            </div>
          </div>
          <div className="country-details__content--details-footer">
            <p>Border Countries:</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsItem;
