import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      className="flex cursor-pointer flex-col items-center"
    >
      <img className="w-20" src="/MIE-LOGO.png" alt="Mie logo" />
      <img className="mt-2 w-12" src="/Mie.svg" alt="Mie" />
    </div>
  );
};

export default Logo;
