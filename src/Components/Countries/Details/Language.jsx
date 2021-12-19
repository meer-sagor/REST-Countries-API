import React from "react";

// const laguages = ["bangladesh", "amerika"];

const Language = (props) => {
  // convert object an array
  const value = Object.values(props.languages);
  return value.map((lan, index) => (
    <span key={index}>{lan.toUpperCase()}</span>
  ));
};

export default Language;
