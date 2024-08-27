import React from "react";
import "./styles.css";

interface ButtonProps {
  children: React.ReactNode; // children can be any valid React node
  onClick?: () => void; // Optional onClick handler
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="react-classic-wysiwyg-editor-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
