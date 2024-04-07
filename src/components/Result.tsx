import seasons from "../../seasons.json";
import { useEffect } from "react";
import { useState } from "react";
import { closest } from "color-diff";

const Result = ({ selectedSquare, setSelectedSquare }) => {
  const palette = Object.values(seasons).flatMap((x) => x);
  const [closestColor, setClosestColor] = useState();
  const [resultSeason, setResultSeason] = useState();

  let newFormatColor = {
    R: selectedSquare[0],
    G: selectedSquare[1],
    B: selectedSquare[2],
  };

  useEffect(() => {
    setClosestColor(closest(newFormatColor, palette));
    for (let season in seasons) {
      seasons[season].forEach((color) => {
        if (closestColor == color) {
          setResultSeason(season);
          console.log(season);
        }
      });
    }
  }, [newFormatColor]);

  return (
    <>
      <div
        onClick={() => {
          console.log(resultSeason);
        }}
        className="w-fit h-12 bg-sky-200 text-xl"
      >
        {resultSeason}
      </div>
    </>
  );
};

export default Result;
