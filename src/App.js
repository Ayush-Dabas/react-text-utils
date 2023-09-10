import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  function toUppercase({ inputText }) {
    let up = inputText.toString().toUpperCase();
    setInputText(up);
  }

  function lowerCase({ inputText }) {
    let dwn = inputText.toString().toLowerCase();
    setInputText(dwn);
  }

  function clearText() {
    setInputText("");
  }

  function copyText({ inputText }) {
    let copiedText = inputText;
    navigator.clipboard.writeText(copiedText);
  }

  function removeSpace({ inputText }) {
    let text = inputText.replace(/\s+/g, " ").trim();
    setInputText(text);
  }

  const wordCount = () => {
    const words = inputText.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  return (
    <div className="App">
      <h1 className="text-white bg-gray-900 shadow py-10 px-10 text-[24px] text-center">
        TextUtils - Word Counter, Character Counter, Remove Extra Space
      </h1>
      <main className="relative flex flex-col">
        <h3 className="text-center bg-slate-50 py-2 text-[20px]">
          Enter Your Text Here:{" "}
        </h3>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Text"
          value={inputText}
          className="min-w-75 min-h-25 border-gray-300 border-2 shadow-2xl mx-auto justify-center outline-none"
        />
        <section className="flex flex-wrap justify-center py-10">
          <button
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => toUppercase({ inputText })}
          >
            Convert to Uppercase
          </button>
          <button
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
            onClick={() => lowerCase({ inputText })}
          >
            Convert to Lowercase
          </button>
          <button
            className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => clearText()}
          >
            Clear Text
          </button>
          <button
            className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => copyText({ inputText })}
          >
            Copy Text
          </button>
          <button
            className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => removeSpace({ inputText })}
          >
            Remove Extra Spaces
          </button>
        </section>
      </main>
      <section className="">
        <h3 className="px-20 py-1 text-[20px] ">Summary of your text: </h3>
        <p className="px-20 py-1 text-[20px] ">
          Number of words: {wordCount()}
        </p>
        <p className="px-20 py-1 text-[20px] ">
          Number of Characters: {inputText.length}
        </p>
        {/* <p className="sumP" id="readTime">
          Reading Time: #time
        </p> */}
      </section>
      {/* <section className="px-20 py-1 text-[20px] shadow-2xl">
        {inputText}
      </section> */}
    </div>
  );
}

export default App;
