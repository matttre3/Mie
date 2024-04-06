import { useEffect, useState } from "react";
import ColorSquare from "./components/ColorSquare";
import ColorThief from "@neutrixs/colorthief";
import { FilesUpload } from "./FilesUpload";

type Color = [number, number, number];

function App() {
  const [imageSrc, setImageSrc] = useState("");
  const [palette, setPalette] = useState<Color[]>([]);
  //const [color, setColor] = useState<Color>();

  const [selectedSquare, setSelectedSquare] = useState<Color>();

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
  }

  useEffect(() => {
    if (imageSrc == "") return;
    let image = new Image();
    image.src = imageSrc;
    setTimeout(() => {
      setPalette(colorThief.getPalette(image, 5, 1));
      //setColor(colorThief.getColor(image, 1));
    }, 0);
  }, [imageSrc]);

  return (
    <div className="sm:container mx-auto bg-white">
      <div className="flex items-center justify-center flex-col w-full ">
        <img
          className="pt-20 w-24
         "
          src="/MIE-LOGO.png"
          alt=""
        />
        <img className="mt-2" src="/Mie.svg" alt="" />

        <div className="flex gap-2 flex-wrap items-cente justify-center">
          {palette.map((color, index) => (
            <ColorSquare
              key={index}
              isSelected={selectedSquare === color}
              onClick={() => handleSquareClick(color)}
              color={color}
              number={index}
            />
          ))}
        </div>

        <FilesUpload onChange={handleChange} />
        <button className="pt-2">Confirm</button>
      </div>
    </div>
  );
}

export default App;
