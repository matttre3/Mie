import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-12 md:flex-row md:gap-8">
        <div className="flex w-full flex-col items-center md:w-1/2 md:items-start">
          <Logo />
          <h1 className="font-rosmatika pt-6 text-center text-4xl leading-tight text-slate-900 md:text-left md:text-6xl">
            Your Armochromia Partner
          </h1>
          <p className="font-poppins mt-5 max-w-xl text-center text-base text-slate-700 md:text-left md:text-lg">
            Discover your most flattering colors in seconds and build a palette
            that enhances your style, makeup and confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <button
              onClick={() => {
                navigate("/photodetection");
              }}
              className="font-poppins rounded-2xl bg-slate-900 px-8 py-3 text-base font-medium text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Start your analysis
            </button>
            <button
              onClick={() => {
                navigate("/selection");
              }}
              className="font-poppins rounded-2xl border border-slate-300 bg-white/90 px-6 py-3 text-base font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white"
            >
              View all palettes
            </button>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="absolute h-[24rem] w-[24rem] rounded-[2.5rem] border border-white/70 bg-white/50 shadow-2xl backdrop-blur-sm" />
          <img
            className="floating absolute bottom-6 right-[12%] z-10 w-2/5"
            src="/tavolozza.png"
            alt="Color palette"
          />
          <img className="z-20 w-[65%] max-w-xs" src="/phone.png" alt="Phone" />
          <img
            className="floating absolute left-[10%] top-8 z-10 w-2/5"
            src="/palette.png"
            alt="Color swatches"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
