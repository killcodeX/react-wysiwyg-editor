// src/Editor.tsx

import React, { useRef, useState, useEffect } from "react";
import SelectComponent from "../components/select";
import Separator from "../components/separator";
import ButtonComponent from "../components/buttons";
import {
  LuBold,
  LuUnderline,
  LuItalic,
  LuAlignLeft,
  LuAlignJustify,
  LuAlignRight,
} from "react-icons/lu";
import "./style.css";

interface EditorProps {
  setContent: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ setContent }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [currTextType, setCurrTextType] = useState<string>("para");

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

  const handleLeftAlign = () => applyStyle("text-align: left;");
  const handleJustify = () => applyStyle("text-align: justify;");
  const handleRightAlign = () => applyStyle("text-align: right;");

  useEffect(() => {
    const handleInput = () => {
      if (editorRef.current) {
        const content = editorRef.current.innerHTML;
        console.log(content);
        setContent(content); // Use optional chaining
      }
    };

    const editor = editorRef.current;

    if (editor) {
      editor.addEventListener("input", handleInput);
    }

    return () => {
      if (editor) {
        editor.removeEventListener("input", handleInput);
      }
    };
  }, [setContent]); // Only include setContent in the dependency array

  return (
    <div>
      <div className="react-classic-wysiwyg-editor-toolbar-main-container">
        {/* <SelectComponent
          selectedValue={{ label: "Paragraph", value: "paragraph" }}
          //setSelectedValue={setSelectedValue}
          options={[
            {
              label: "H1",
              value: "h1",
            },
            {
              label: "H2",
              value: "h2",
            },
            {
              label: "H3",
              value: "h3",
            },
            { label: "Paragraph", value: "paragraph" },
          ]}
        /> */}
        <ButtonComponent onClick={handleBold}>
          <LuBold />
        </ButtonComponent>
        <ButtonComponent onClick={handleItalic}>
          <LuItalic />
        </ButtonComponent>
        <ButtonComponent onClick={handleUnderline}>
          <LuUnderline />
        </ButtonComponent>
        <Separator />
        <ButtonComponent onClick={handleLeftAlign}>
          <LuAlignLeft />
        </ButtonComponent>
        <ButtonComponent onClick={handleJustify}>
          <LuAlignJustify />
        </ButtonComponent>
        <ButtonComponent onClick={handleRightAlign}>
          <LuAlignRight />
        </ButtonComponent>
      </div>
      <div
        className="react-classic-wysiwyg-editor"
        contentEditable
        ref={editorRef}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "300px",
        }}
      ></div>
    </div>
  );
};
