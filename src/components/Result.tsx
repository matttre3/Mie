import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useRedirect("/", !selectedSquare);

  useEffect(() => {
    if (!selectedSquare) return;

    const rgbColor: RGBColor = {
      R: selectedSquare[0],
      G: selectedSquare[1],
      B: selectedSquare[2],
    };
    const closestColor = closest(rgbColor, allColors);

    for (const season in seasons) {
      if (seasons[season as keyof SeasonPalette].includes(closestColor)) {
        setResultSeason(season as keyof SeasonPalette);
      }
    }
  }, [selectedSquare]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="page-shell flex items-center justify-center">
        <div className="glass-card w-full max-w-3xl p-6 sm:p-10">
          <div className="flex flex-col items-center">
            <Logo />
            <p className="section-copy max-w-2xl">
              We identified that your selected color belongs to the following
              seasonal palette.
            </p>

            <SeasonBlock w="big" season={resultSeason} />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                className="secondary-btn"
                onClick={() => {
                  navigate("/photodetection");
                }}
              >
                Analyze another photo
              </button>
              <button
                className="primary-btn"
                onClick={() => {
                  navigate("/selection");
                }}
              >
                View all palettes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
