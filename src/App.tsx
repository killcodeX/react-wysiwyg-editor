import { useState } from "react";
import { Editor } from "./Editor";
import "./App.css";

function App() {
  const [content, setContent] = useState<string>("");
  return (
    <>
      <h1>WYSIWYG Editor</h1>
      <Editor setContent={setContent} />
      <h2>Saved Content:</h2>
      {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
    </>
  );
}

export default App;
