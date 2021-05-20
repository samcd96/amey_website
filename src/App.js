import { useState, useEffect } from "react";
import { AddFile } from "./components/AddFile";
import Header from "./components/Header";
import { TopNumbers } from "./components/TopNumbers";

function App() {
  const [showAddTXT, setShowAddTXT] = useState(false);
  const [topNumbers, setTopNumbers] = useState([-1, -1, -1, -1, -1]);

  useEffect(() => {}, []);

  function count_duplicate(numbers) {
    setShowAddTXT(false);

    let counts = {};

    for (let i = 0; i < numbers.length; i++) {
      if (counts[numbers[i]]) {
        counts[numbers[i]] += 1;
      } else {
        counts[numbers[i]] = 1;
      }
    }
    const mostFrequent = [];
    for (var number in counts) {
      mostFrequent.push([number, counts[number]]);
    }

    mostFrequent.sort(function (a, b) {
      return b[1] - a[1];
    });

    const topNumbers = mostFrequent.map((el) => +el[0]);

    if (topNumbers.length < 5) {
      let top5 = [-1, -1, -1, -1, -1];
      topNumbers.forEach((el, i) => {
        top5[i] = el;
      });
      setTopNumbers(top5);
    } else {
      setTopNumbers(topNumbers.slice(0, 5));
    }
  }

  return (
    <div className="container">
      <Header
        showAddTXT={showAddTXT}
        onAdd={() => setShowAddTXT(!showAddTXT)}
      />
      {showAddTXT && <AddFile process={count_duplicate} />}
      <TopNumbers top5={topNumbers} />
    </div>
  );
}

export default App;
