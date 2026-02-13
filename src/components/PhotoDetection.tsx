import ColorThief from "@neutrixs/colorthief";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorSquare from "../components/ColorSquare";
import FilesUpload from "../components/FilesUpload";
import Logo from "./Logo";

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
    const image = files.item(0);
    if (!image) return;

    setImageSrc("");
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      if (!dataURL) return;
      setImageSrc(dataURL.toString());
    };
    reader.readAsDataURL(image);
  }

  function handleSquareClick(color: Color) {
    setSelectedSquare(color);
  }

  function resetPalette() {
    setPalette([]);
    setSelectedSquare(undefined);
  }

  useEffect(() => {
    if (imageSrc === "") return;

    const image = new Image();
    image.src = imageSrc;
    image.addEventListener("load", () => {
      const newPalette = colorThief.getPalette(image, 5, 5);
      setPalette(newPalette);
      setSelectedSquare(newPalette[0]);
      setIsLoading(false);
    });
  }, [imageSrc]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="page-shell flex items-center justify-center">
        <div className="glass-card w-full max-w-3xl p-6 sm:p-10">
          <div className="flex flex-col items-center">
            <Logo />

            {palette.length > 0 && (
              <>
                <p className="section-copy max-w-xl">
                  We detected the most prominent color in your photo. If it is
                  not accurate, pick one of the alternative detected colors.
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <button className="secondary-btn" onClick={resetPalette}>
                    Take another picture
                  </button>
                  <button
                    className="primary-btn"
                    onClick={() => {
                      navigate("/result");
                    }}
                  >
                    Confirm color
                  </button>
                </div>

                <p className="section-title">Main detected color</p>
                <ColorSquare
                  isSelected={selectedSquare === palette[0]}
                  onClick={() => handleSquareClick(palette[0])}
                  color={palette[0]}
                />

                <p className="section-title mt-2">Secondary colors</p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                  {palette.slice(1).map((color, index) => (
                    <ColorSquare
                      key={index}
                      isSelected={selectedSquare === color}
                      onClick={() => handleSquareClick(color)}
                      color={color}
                    />
                  ))}
                </div>
              </>
            )}

            {palette.length === 0 && !isLoading && (
              <>
                <p className="section-copy max-w-lg">
                  Upload or drag a portrait photo with clear natural lighting.
                  We will extract your dominant color and map it to your palette.
                </p>
                <FilesUpload onChange={handleChange} />
              </>
            )}

            {isLoading && (
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700" />
                <p className="text-sm text-slate-600">Analyzing colors...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetection;
