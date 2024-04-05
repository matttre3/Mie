import { ChangeEvent, useEffect, useState } from "react";
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
    <div className="flex items-center justify-center flex-col w-full">
      <div style={{ display: "flex" }}>
        {palette.map((color, i) => (
          <ColorSquare key={i} color={color} />
        ))}
      </div>
      {color && <ColorSquare color={color} />}
      <FilesUpload onChange={handleChange} />
    </div>
  );
}

interface ColorSquareProps {
  color: Color;
}

function ColorSquare({ color }: ColorSquareProps) {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        background:
          color.length === 3
            ? `rgb(${color[0]},${color[1]},${color[2]})`
            : "black",
      }}
    />
  );
}

export default App;
