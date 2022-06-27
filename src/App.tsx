import { useState, useRef, useEffect } from "react";
import { marked } from "marked";

import "./App.css";

function App() {
  // const [input, setInput] = useState("");
  const [preview, setPreview] = useState("");

  const ref: any = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleInput = () => {
    // setInput(ref.current?.innerText);
    // console.log(ref.current?.innerText);
    setPreview(marked.parse(ref.current?.innerText));
  };

  return (
    <div className="App">
      <pre className="input" ref={ref} contentEditable onInput={handleInput}>
        {/* {input} */}
      </pre>
      <div className="preview" dangerouslySetInnerHTML={{ __html: preview }} />
    </div>
  );
}

export default App;
