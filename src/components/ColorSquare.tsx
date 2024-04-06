type Color = [number, number, number];

interface ColorSquareProps {
  color: Color;
  isSelected: boolean;
  onClick: () => void;
}

const ColorSquare: React.FC<ColorSquareProps> = ({
  color,
  isSelected,
  onClick,
}) => {
  return (
    <>
      <div className={"flex flex-col items-center"}>
        <div
          onClick={onClick}
          className={"mt-4 mb-4 w-14 h-14 rounded-xl transition-all "}
          style={{
            background:
              color.length === 3
                ? `rgb(${color[0]},${color[1]},${color[2]})`
                : "black",
          }}
        />
        <div
          className={
            isSelected
              ? "animate-bounce w-12 h-2 mb-4 bg-slate-900 rounded-xl"
              : "h-2 mb-4"
          }
        ></div>
      </div>
    </>
  );
};

export default ColorSquare;
