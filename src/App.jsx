import * as d3 from "d3";
import { useState } from "react";
import "./index.css";
import Axis from "./Axis";

export default function App() {
  //const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  

  return (
    <div>
      <Axis/>
    </div>
  );
}
