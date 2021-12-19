import React from "react";

const Region = (props) => {
  const { region } = props.region;

  return <option value={region}>{region}</option>;
};

export default Region;
