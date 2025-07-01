import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000");

  return (
    <div
      className=" flex justify-center items-start h-screen w-full p-10"
      style={{ background: color }}
    >
      <div className="flex gap-3  rounded-2xl bg-white px-4 py-2 text-white">
        <button
          onClick={() => {
            setColor("red");
          }}
          className="bg-red-600 px-2 font-bold rounded-4xl cursor-pointer"
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="bg-green-600 px-2 font-bold rounded-4xl cursor-pointer"
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="bg-blue-600 px-2 font-bold rounded-4xl cursor-pointer"
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
