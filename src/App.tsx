import { useEffect, useState } from "react";
import ColorSquare from "./components/ColorSquare";
import ColorThief from "@neutrixs/colorthief";
import { FilesUpload } from "./FilesUpload";

type Color = [number, number, number];

function App() {
  const [imageSrc, setImageSrc] = useState("");
  const [palette, setPalette] = useState<Color[]>([]);
  const [color, setColor] = useState<Color>();
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

  useEffect(() => {
    if (imageSrc == "") return;
    let image = new Image();
    image.src = imageSrc;
    setTimeout(() => {
      setPalette(colorThief.getPalette(image, 5, 1));
      setColor(colorThief.getColor(image, 1));
    }, 0);
  }, [imageSrc]);

  return (
    <div className="sm:container mx-auto bg-white">
      <div className="flex items-center justify-center flex-col w-full ">
        <img className="pt-20" src="/mie-text-logo.png" alt="" />

        {color && <ColorSquare color={color} />}
        <div className="flex gap-2 flex-wrap">
          {palette.map((color, i) => (
            <ColorSquare key={i} color={color} />
          ))}
        </div>

        <FilesUpload onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
