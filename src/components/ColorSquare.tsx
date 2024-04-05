type Color = [number, number, number];
interface ColorSquareProps {
  color: Color;
}

const ColorSquare = ({ color }: ColorSquareProps) => {
  return (
    <>
      <div
        className="mt-4 w-14 h-14 rounded-xl"
        style={{
          background:
            color.length === 3
              ? `rgb(${color[0]},${color[1]},${color[2]})`
              : "black",
        }}
      />
    </>
  );
};

export default ColorSquare;
