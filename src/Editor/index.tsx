// src/Editor.tsx

import React, { useRef, useState } from "react";

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>("");

  const applyStyle = (style: string) => {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.cssText = style;
    range.surroundContents(span);

    // Deselect the text after applying the style
    selection.removeAllRanges();
  };

  const handleBold = () => applyStyle("font-weight: bold;");
  const handleItalic = () => applyStyle("font-style: italic;");
  const handleUnderline = () => applyStyle("text-decoration: underline;");

  const saveContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  return (
    <div>
      <div className="toolbar">
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button>
        <button onClick={handleUnderline}>Underline</button>
      </div>
      <div
        className="editor"
        contentEditable
        ref={editorRef}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "300px",
        }}
      ></div>
      <button onClick={saveContent}>Save Content</button>
      <div>
        <h2>Saved Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default Editor;
