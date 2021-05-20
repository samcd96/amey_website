import Button from "./Button";

const Header = ({ showAddTXT, onAdd }) => {
  return (
    <header className="header">
      <h1>Top Numbers</h1>
      <Button
        colour={showAddTXT ? "red" : "green"}
        text={showAddTXT ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
