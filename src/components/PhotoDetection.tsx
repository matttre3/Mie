import { useEffect, useState } from "react";
import ColorSquare from "../components/ColorSquare";
import ColorThief from "@neutrixs/colorthief";
import FilesUpload from "../components/FilesUpload";

type Color = [number, number, number];

function PhotoDetection() {
  const [imageSrc, setImageSrc] = useState("");
  const [palette, setPalette] = useState<Color[]>([]);

  const [selectedSquare, setSelectedSquare] = useState<any>();

  const colorThief = new ColorThief();

  function handleChange(files: FileList) {
    let image = files.item(0);
    if (!image) return;
    setImageSrc("");
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
    setTimeout(() => {
      const newPalette = colorThief.getPalette(image, 5, 1);
      setPalette(newPalette);
      setSelectedSquare(newPalette[0]);
    }, 0);
  }, [imageSrc]);

  return (
    <div className="sm:container mx-auto bg-white">
      <div className="flex items-center justify-center flex-col w-full ">
        <img
          className="pt-20 w-28
         "
          src="/MIE-LOGO.png"
          alt=""
        />
        <img className="mt-2" src="/Mie.svg" alt="" />

        {palette.length > 0 && (
          <>
            <p className="text-xl poppins-semibold mt-8">Main detected color</p>
            <div>
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
              className="bg-stone-500 text-white p-2 poppins-regular rounded-md flex items-center mt-16 text-sm"
              onClick={resetPalette}
            >
              <img className="w-4 mr-2 " src="/camera-solid.svg" alt="" />
              Take an other picture
            </button>
          </>
        )}

        {palette.length == 0 && <FilesUpload onChange={handleChange} />}
      </div>
    </div>
  );
}

export default PhotoDetection;
