import React from "react";
import seasons from "../../seasons.json";

const Result = () => {
  const palette = Object.values(seasons).flatMap((x) => x);
  console.log(seasons);

  return <></>;
};

export default Result;
