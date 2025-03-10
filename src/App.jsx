import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <div className="bg-pink-300 p-6 rounded-2xl shadow-xl w-80 border-4 border-pink-500">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-3 text-right text-2xl bg-pink-200 rounded mb-4 shadow-inner border border-pink-400"
        />
        <div className="grid grid-cols-4 gap-3">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((char) => (
            <button
              key={char}
              onClick={() =>
                char === "=" ? handleCalculate() : handleClick(char)
              }
              className="p-4 bg-pink-400 text-white rounded-lg text-2xl font-bold shadow-md hover:bg-pink-500 transition"
            >
              {char}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-4 bg-red-500 text-white rounded-lg text-2xl font-bold shadow-md hover:bg-red-600 transition"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
