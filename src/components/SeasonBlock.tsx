import { SeasonPalette } from "../data/season";
import cx from "classnames";

interface SeasonBlockProps {
  season: keyof SeasonPalette | undefined;
  w: string;
}

const SeasonBlock = ({ season,w }: SeasonBlockProps) => {
    
  return (
  <>
    <div className={cx("mt-4 flex text-4xl items-center justify-center text-white",{
         "bg-orange-600/50 rounded-bl-[3rem] rounded-tr-[3rem] font-autumn bg-autumn-bg bg-no-repeat bg-cover border-8 border-orange-300" : (season == 'autumn'),
         "bg-teal-600/50 rounded-br-[3rem] rounded-tl-[3rem] font-winter bg-winter-bg bg-no-repeat bg-cover border-8 border-teal-200" : (season == 'winter'),
         "bg-amber-300/50 rounded-bl-[3rem] rounded-tr-[3rem] font-spring bg-spring-bg bg-no-repeat bg-cover border-8 border-amber-200" : (season == 'spring'),
         "bg-blue-700/50 rounded-br-[3rem] rounded-tl-[3rem] font-summer bg-summer-bg bg-no-repeat bg-cover border-8 border-blue-400" : (season == 'summer'),
         "w-72 h-72" : (w == 'big'),
         "w-44 h-44 border-none" : (w == 'small'),
        })}>
        <p >{season && season.charAt(0).toUpperCase() + season.slice(1)}</p>    
    </div>
  </>
  )
};

export default SeasonBlock;
