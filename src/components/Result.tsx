import seasons from "../../seasons.json";

const Result = () => {
  const palette = Object.values(seasons).flatMap((x) => x);
  console.log(seasons);
  console.log(palette[1]);

  return (
    <>
      <div>{palette[1].R}</div>
    </>
  );
};

export default Result;
