import SeasonBlock from "./SeasonBlock";
import Logo from "./Logo";
import { SeasonPalette, seasons } from "../data/season";

const orderedSeasons: Array<keyof SeasonPalette> = [
  "summer",
  "autumn",
  "spring",
  "winter",
];

const SelectPalette = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />

      <div className="page-shell flex items-center justify-center">
        <div className="glass-card w-full max-w-5xl p-6 sm:p-10">
          <div className="flex flex-col items-center">
            <Logo />
            <p className="section-copy max-w-xl">
              Explore all seasonal palettes and compare the visual mood of each
              one.
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              {orderedSeasons.map((season) => (
                <div key={season} className="glass-card p-4">
                  <div className="flex justify-center">
                    <SeasonBlock w="small" season={season} />
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {seasons[season].map((color, index) => (
                      <span
                        key={`${season}-${index}`}
                        title={`rgb(${color.R}, ${color.G}, ${color.B})`}
                        className="h-5 w-5 rounded-md border border-white/80 shadow-sm"
                        style={{
                          backgroundColor: `rgb(${color.R}, ${color.G}, ${color.B})`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPalette;
