import { useEffect } from "react";
import { useState } from "react";
import { RGBColor, closest } from "color-diff";
import { Color } from "./PhotoDetection";
import { SeasonPalette, seasons } from "../data/season";

interface ResultProps {
  selectedSquare?: Color;
}

const Result: React.FC<ResultProps> = ({ selectedSquare }) => {
  const allColors = Object.values(seasons).flatMap((x) => x);
  const [resultSeason, setResultSeason] = useState<
    keyof SeasonPalette | undefined
  >();

  useEffect(() => {
    if (selectedSquare) {
      let rgbColor: RGBColor = {
        R: selectedSquare[0],
        G: selectedSquare[1],
        B: selectedSquare[2],
      };
      let closestColor = closest(rgbColor, allColors);

      for (let season in seasons) {
        if (seasons[season as keyof SeasonPalette].includes(closestColor)) {
          setResultSeason(season as keyof SeasonPalette);
        }
      }
    }
  }, [selectedSquare]);

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
