import { useEffect } from "react";
import { useState } from "react";
import { RGBColor, closest } from "color-diff";
import { Color } from "./PhotoDetection";
import { SeasonPalette, seasons } from "../data/season"; 
import { useRedirect } from "../hooks/useRedirect";
import SeasonBlock from "./SeasonBlock";
import Logo from "./Logo";

interface ResultProps {
  selectedSquare?: Color;
}



const Result: React.FC<ResultProps> = ({ selectedSquare }) => {
  const allColors = Object.values(seasons).flatMap((x) => x);
  const [resultSeason, setResultSeason] = useState<
    keyof SeasonPalette | undefined
  >();
  useRedirect('/',(!selectedSquare))
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
      <div className="sm:container mx-auto min-h-screen">
        <div className="flex items-center justify-center flex-col w-full min-h-screen">
          <Logo/>
          <p className="text-center mt-8 poppins-regular text-l text-slate-700 pl-6 pr-6">
          Our software has identified that the selected color belongs to the following color palette:
            </p>
          <SeasonBlock  w = {"big"} season = {resultSeason}/>
        </div>
      </div>
    </>
  );
};

export default Result;
