import React, { useState } from "react";
import { Editor } from "./editor";
import "./App.css";

function App() {
  const [content, setContent] = useState<string>("");
  return (
    <div className="app">
      <h1>WYSIWYG Editor</h1>
      <Editor setContent={setContent} />
      <h2>Saved Content:</h2>
      {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
    </div>
  );
}

export default App;
