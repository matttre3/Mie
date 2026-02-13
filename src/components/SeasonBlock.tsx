import { SeasonPalette } from "../data/season";
import cx from "classnames";

interface SeasonBlockProps {
  season: keyof SeasonPalette | undefined;
  w: string;
}

const SeasonBlock = ({ season, w }: SeasonBlockProps) => {
  return (
    <div
      className={cx(
        "relative mt-4 flex items-center justify-center overflow-hidden text-white shadow-xl",
        {
          "bg-orange-600/45 rounded-bl-[3rem] rounded-tr-[3rem] font-autumn bg-autumn-bg bg-cover bg-center border-8 border-orange-300":
            season === "autumn",
          "bg-teal-600/45 rounded-br-[3rem] rounded-tl-[3rem] font-winter bg-winter-bg bg-cover bg-center border-8 border-teal-200":
            season === "winter",
          "bg-amber-300/50 rounded-bl-[3rem] rounded-tr-[3rem] font-spring bg-spring-bg bg-cover bg-center border-8 border-amber-200":
            season === "spring",
          "bg-blue-700/45 rounded-br-[3rem] rounded-tl-[3rem] font-summer bg-summer-bg bg-cover bg-center border-8 border-blue-400":
            season === "summer",
          "h-72 w-72 text-5xl": w === "big",
          "h-40 w-full text-4xl border-none": w === "small",
        }
      )}
    >
      <div className="absolute inset-0 bg-black/15" />
      <p className="relative drop-shadow-md">
        {season && season.charAt(0).toUpperCase() + season.slice(1)}
      </p>
    </div>
  );
};

export default SeasonBlock;
