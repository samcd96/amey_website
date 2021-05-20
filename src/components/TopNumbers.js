import { NumberBox } from "./NumberBox";
export const TopNumbers = ({ top5 }) => {
  const colours = ["gold", "silver", "orange", "blue", "grey"];
  return (
    <div className="top-numbers">
      {top5.map((num, index) => (
        <NumberBox key={index} number={num} colour={colours[index]} />
      ))}
    </div>
  );
};
