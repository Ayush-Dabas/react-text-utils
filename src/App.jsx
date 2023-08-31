import "./App.css";
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

  return (
    <div className="App">
      <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      <main className="inputArea">
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
        <button className="functionalBtns">Convert to Lowercase</button>
        <button className="functionalBtns">Clear Text</button>
        <button className="functionalBtns">Copy Text</button>
        <button className="functionalBtns">Remove Extra Spaces</button>
      </main>
      <section className="summary">
        <h3>Summary of your text</h3>
        <p id="numWord">Number of words: #number</p>
        <p id="numChar">Number of Characters: #char</p>
        <p id="readTime">Reading Time: #time</p>
      </section>
      <section className="display">{inputText}</section>
    </div>
  );
}

export default App;
