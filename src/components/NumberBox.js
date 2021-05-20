export const NumberBox = ({ number, colour }) => {
  return (
    <div className="number-box" style={{ backgroundColor: colour }}>
      <h1>{number === -1 ? "-" : number}</h1>
    </div>
  );
};
