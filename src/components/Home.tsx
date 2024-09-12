import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
        <Logo />
        <h1 className="font-rosmatika text-center text-4xl md:text-5xl pt-6">
          Your Armochromia Partner
        </h1>
        <div className="flex items-center flex-col sm:flex-row pt-6">
          <div className="flex flex-col items-center pl-8 pr-8 pt-8 sm:pt-0">
            <p className="font-poppins text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius congue nisl et tincidunt. Vivamus sit amet sapien sit amet
              sapien.
            </p>
            <button
              onClick={() => {
                navigate("/photodetection");
              }}
              className="font-poppins border-2 border-blue-800 text-blue-800 pl-6 pr-6 p-2 mt-6 rounded-xl hover:bg-blue-800 hover:text-white transition duration-150"
            >
              Check a color
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/5 sm:mt-0 mt-[-10px] md:w-2/5 relative overflow-hidden mb-32 sm:mb-0">
        <img
          className=" w-3/5 absolute floating bottom-0 right-0"
          src="/tavolozza.png"
          alt=""
        />
        <img src="/phone.png" alt="" />
        <img
          className="w-3/5 absolute floating top-6 "
          src="/palette.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
