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

  return (
    <div className="App">
      <h1 className="text-green bg-gray-900 shadow">
        TextUtils - Word Counter, Character Counter, Remove Extra Space
      </h1>
      <main className="border inputArea">
        <h3>Enter Your Text Here: </h3>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Text"
          value={inputText}
        />
        <button
          className="functionalBtns"
          onClick={() => toUppercase({ inputText })}
        >
          Convert to Uppercase
        </button>
        <button
          className="functionalBtns"
          onClick={() => lowerCase({ inputText })}
        >
          Convert to Lowercase
        </button>
        <button className="functionalBtns" onClick={() => clearText()}>
          Clear Text
        </button>
        <button
          className="functionalBtns"
          onClick={() => copyText({ inputText })}
        >
          Copy Text
        </button>
        <button
          className="functionalBtns"
          onClick={() => removeSpace({ inputText })}
        >
          Remove Extra Spaces
        </button>
      </main>
      <section className="summary">
        <h3>Summary of your text</h3>
        <p className="sumP" id="numWord">
          Number of words: #number
        </p>
        <p className="sumP" id="numChar">
          Number of Characters: #char
        </p>
        <p className="sumP" id="readTime">
          Reading Time: #time
        </p>
      </section>
      <section className="display">{inputText}</section>
    </div>
  );
}

export default App;
