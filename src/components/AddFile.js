import { useState } from "react";

export const AddFile = ({ process }) => {
  const [file, setFile] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please add a .txt file");
      return;
    }
    let isValid = true;
    const numbers = file.split("\n").map((el) => {
      if (isNaN(parseFloat(el))) {
        isValid = false;
        return -1;
      } else return +el;
    });
    if (isValid) {
      process(numbers);
    } else {
      alert(
        "Please input a valid file with only numbers, seperated by new lines."
      );
    }
    setFile("");
  };

  const setFileFunc = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      setFile(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="container">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="file"
            placeholder="Add file"
            id="myFile"
            accept=".txt"
            onChange={(e) => setFileFunc(e)}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-block" />
      </form>
    </div>
  );
};
