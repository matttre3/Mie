import SeasonBlock from './SeasonBlock'

const SelectPalette = () => {
    return (
    <div className="sm:container mx-auto bg-white">
      <div className="flex items-center justify-center flex-col w-full ">
        <img
          className="animation-spin pt-20 w-28
         "
          src="/MIE-LOGO.png"
          alt=""
        />
        <img className="mt-2" src="/Mie.svg" alt="" />
        
        <div className='flex flex-wrap w- gap-5 items-center justify-center mt-10'>
            <SeasonBlock w = {"small"} season = {"summer"}/>
            <SeasonBlock w = {"small"} season = {"autumn"}/>
            <SeasonBlock w = {"small"} season = {"spring"}/>
            <SeasonBlock w = {"small"} season = {"winter"}/>
        </div>
       
        
     </div>
    </div>
  )
}

export default SelectPalette