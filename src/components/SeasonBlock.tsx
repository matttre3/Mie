import { SeasonPalette } from "../data/season";
import cx from "classnames";

interface SeasonBlockProps {
  season: keyof SeasonPalette | undefined;
}

const SeasonBlock = ({ season }: SeasonBlockProps) => {
    
  return (
  <>
    <div className={cx("mt-4 flex w-72 h-72 text-4xl items-center justify-center text-white",{
         "bg-orange-600/50 rounded-bl-[3rem] rounded-tr-[3rem] font-autumn bg-autumn-bg bg-no-repeat bg-cover border-4 border-orange-300" : (season == 'autumn'),
         "bg-teal-600/50 rounded-br-[3rem] rounded-tl-[3rem] font-winter bg-winter-bg bg-no-repeat bg-cover border-8 border-teal-200" : (season == 'winter'),
         "bg-amber-300/50 rounded-bl-[3rem] rounded-tr-[3rem] font-spring bg-spring-bg bg-no-repeat bg-cover border-8 border-amber-200" : (season == 'spring'),
         "bg-blue-700/50 rounded-br-[3rem] rounded-tl-[3rem] font-summer bg-summer-bg bg-no-repeat bg-cover border-8 border-blue-400" : (season == 'summer'),
        })}>
        <p >{season && season.charAt(0).toUpperCase() + season.slice(1)}</p>    
    </div>
  </>
  )
};

export default SeasonBlock;
