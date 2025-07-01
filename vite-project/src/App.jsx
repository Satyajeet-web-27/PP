import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter++);
  };
  return (
    <div className="flex justify-center flex-col items-center w-full h-screen bg-black">
      <h1 className="text-4xl bg-gray-600 font-bold shadow-amber-400 text-center p-4 max-w-md max-h-fit mt-4 rounded-md text-emerald-500 cursor-pointer text-shadow-amber-300 ">
        Hey Polu {counter}
      </h1>
      <button
        onClick={() => {
          setCounter(addValue);
        }}
        className=" text-white font-semibold rounded  mt-3 bg-blue-600 text-xl px-4 py-2 cursor-pointer"
      >
        Add Value {counter}
      </button>
    </div>
  );
}

export default App;
