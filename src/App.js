/** @format */

import { useEffect, useState } from "react";
import Tour from "./Tour";
import "./App.css";

function App() {
  const url = "http://localhost:9000/Tours";

  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    getTourData();
  });
  const getTourData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTourData(data);
  };
  return (
    <div className="App">
      <h1 className="header">Our Tours</h1>
      <Tour Tour={tourData} />
    </div>
  );
}

export default App;
