import ColorThief from "@neutrixs/colorthief";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorSquare from "../components/ColorSquare";
import FilesUpload from "../components/FilesUpload";

export type Color = [number, number, number];

interface PhotoDetectionProps {
  selectedSquare?: Color;
  setSelectedSquare: (color?: Color) => void;
}

const PhotoDetection: React.FC<PhotoDetectionProps> = ({
  setSelectedSquare,
  selectedSquare,
}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [palette, setPalette] = useState<Color[]>([]);
  const colorThief = new ColorThief();
  const navigate = useNavigate();

  function handleChange(files: FileList) {
    let image = files.item(0);
    if (!image) return;
    setImageSrc("");
    setIsLoading(true);
    var reader = new FileReader();
    reader.onload = () => {
      var dataURL = reader.result;
      if (!dataURL) return;
      setImageSrc(dataURL.toString());
    };
    reader.readAsDataURL(image);
  }

  function handleSquareClick(color: Color) {
    setSelectedSquare(color);
    console.log(color);
  }

  function resetPalette() {
    setPalette([]);
  }

  useEffect(() => {
    if (imageSrc == "") return;
    let image = new Image();
    image.src = imageSrc;
    image.addEventListener("load", () => {
      const newPalette = colorThief.getPalette(image, 5, 5);
      setPalette(newPalette);
      setSelectedSquare(newPalette[0]);
      setIsLoading(false);
    });
  }, [imageSrc]);

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

        {palette.length > 0 && (
          <>
            <p className="text-center mt-8 poppins-regular text-sm text-slate-400 pl-6 pr-6">
              Our software detects the most prominent color within the photo. If
              the detected color is incorrect, you can further choose from four
              other detected colors.
            </p>
            <button
              className="bg-slate-500 text-white p-2 poppins-regular rounded-md flex items-center mt-3 text-sm"
              onClick={resetPalette}
            >
              <img className="w-4 mr-2 " src="/camera-solid.svg" alt="" />
              Take an other picture
            </button>
            <p className="text-xl poppins-semibold mt-8">Main detected color</p>
            <div className="">
              <ColorSquare
                isSelected={selectedSquare === palette[0]}
                onClick={() => handleSquareClick(palette[0])}
                color={palette[0]}
              />
            </div>
            <p className="text-xl poppins-semibold">
              Secondary detected colors
            </p>
            <div className="flex gap-2 flex-wrap items-cente justify-center">
              {palette.slice(1).map((color, index) => (
                <ColorSquare
                  key={index}
                  isSelected={selectedSquare === color}
                  onClick={() => handleSquareClick(color)}
                  color={color}
                />
              ))}
            </div>

            <button
              className="bg-blue-500 text-white p-2 poppins-regular rounded-md flex items-center text-sm"
              onClick={() => {
                navigate("/result");
              }}
            >
              Confirm Color
            </button>
          </>
        )}

        {palette.length == 0 && !isLoading && (
          <FilesUpload onChange={handleChange} />
        )}

        {isLoading && <p>LOADING</p>}
      </div>
    </div>
  );
};

export default PhotoDetection;
