import { useState } from "react";
import { marked } from "marked";

import "./App.css";

function App() {
  const [preview, setPreview] = useState("");

  const updatePreview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPreview(marked.parse(e.target.value));
  };

  return (
    <div className="App">
      <div className="input">
        <textarea onChange={(e) => updatePreview(e)} />
      </div>
      <div className="preview">
        <div dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
    </div>
  );
}

export default App;
