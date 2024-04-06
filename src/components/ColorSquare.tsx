type Color = [number, number, number];

interface ColorSquareProps {
  color: Color;
  isSelected: boolean;
  onClick: () => void;
  number: number;
}

const ColorSquare: React.FC<ColorSquareProps> = ({
  color,
  isSelected,
  onClick,
  number,
}) => {
  return (
    <>
      <div
        className={
          "flex flex-col items-center" + (number == 0 ? " w-full" : "")
        }
      >
        <p className={number == 0 ? "block pt-10" : "hidden"}>
          Main detected color
        </p>
        <div
          onClick={onClick}
          className={
            "mt-4 mb-4 w-14 h-14 rounded-xl first:p-92" +
            (isSelected ? " border-8 border-sky-500" : "") +
            (number == 0 ? " w-24 h-24" : "")
          }
          style={{
            background:
              color.length === 3
                ? `rgb(${color[0]},${color[1]},${color[2]})`
                : "black",
          }}
        />
        <p className={number == 0 ? "block" : "hidden"}>
          Other detected colors
        </p>
      </div>
    </>
  );
};

export default ColorSquare;
