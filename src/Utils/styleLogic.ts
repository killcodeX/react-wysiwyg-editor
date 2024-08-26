import React from "react";

interface applyStylesProps {
  style: string; // The CSS style to apply
  editorRef: React.RefObject<HTMLDivElement>; // A reference to the HTMLDivElement
  setContent: (value: string) => void; // Function to update content
}

export const applyStyle = ({
  style,
  editorRef,
  setContent,
}: applyStylesProps) => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.style.cssText = style;
  range.surroundContents(span);
  // Deselect the text after applying the style
  selection.removeAllRanges();

  // Update content after applying the style
  if (editorRef.current) {
    const content = editorRef.current.innerHTML;
    setContent(content);
  }
};
