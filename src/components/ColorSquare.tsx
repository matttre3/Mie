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
  const colorValue =
    color.length === 3 ? `rgb(${color[0]},${color[1]},${color[2]})` : "black";

  return (
    <button
      onClick={onClick}
      className="group mt-4 flex flex-col items-center rounded-2xl p-1"
      type="button"
      aria-label={`Select color ${colorValue}`}
    >
      <span
        className="h-16 w-16 rounded-xl border border-white/70 shadow-md transition group-hover:scale-105"
        style={{ background: colorValue }}
      />
      <span
        className={
          isSelected
            ? "mt-3 h-2 w-12 rounded-xl bg-slate-900"
            : "mt-3 h-2 w-12 rounded-xl bg-transparent"
        }
      />
    </button>
  );
};

export default ColorSquare;
