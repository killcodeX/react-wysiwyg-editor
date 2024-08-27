// src/Editor.tsx

import React, { useRef, useEffect } from "react";
// import SelectComponent from "../components/select";
import Separator from "../comp/separator";
import ButtonComponent from "../comp/buttonComp";
import {
  LuBold,
  LuUnderline,
  LuItalic,
  LuAlignLeft,
  LuAlignJustify,
  LuAlignRight,
} from "react-icons/lu";
import { applyStyle } from "../utils/styleLogic";
import "./style.css";

interface EditorProps {
  setContent: (value: string) => void;
  inputStyles?: object;
}

export const Editor: React.FC<EditorProps> = ({ setContent, inputStyles }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  // const [currTextType, setCurrTextType] = useState<string>("para");

  useEffect(() => {
    const handleInput = () => {
      if (editorRef.current) {
        const content = editorRef.current.innerHTML;
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
    <div className="react-classic-wysiwyg-editor-container">
      <div className="react-classic-wysiwyg-editor-toolbar-main-container">
        <ButtonComponent
          onClick={() =>
            applyStyle({ style: "font-weight: bold;", editorRef, setContent })
          }
        >
          <LuBold />
        </ButtonComponent>
        <ButtonComponent
          onClick={() =>
            applyStyle({ style: "font-style: italic;", editorRef, setContent })
          }
        >
          <LuItalic />
        </ButtonComponent>
        <ButtonComponent
          onClick={() =>
            applyStyle({
              style: "text-decoration: underline;",
              editorRef,
              setContent,
            })
          }
        >
          <LuUnderline />
        </ButtonComponent>
        <Separator />
        <ButtonComponent
          onClick={() =>
            applyStyle({ style: "text-align: left;", editorRef, setContent })
          }
        >
          <LuAlignLeft />
        </ButtonComponent>
        <ButtonComponent
          onClick={() =>
            applyStyle({ style: "text-align: justify;", editorRef, setContent })
          }
        >
          <LuAlignJustify />
        </ButtonComponent>
        <ButtonComponent
          onClick={() =>
            applyStyle({ style: "text-align: right;", editorRef, setContent })
          }
        >
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
          ...inputStyles,
        }}
      ></div>
    </div>
  );
};

{
  /* <SelectComponent
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
        /> */
}

//For examples of the `react-classic-wysiwyg-editor` in action, go to http://airbnb.io/react-dates.
