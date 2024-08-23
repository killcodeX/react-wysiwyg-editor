import { useState, useEffect, useRef } from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import "./styles.css";

interface Option {
  label: string;
  value: string;
}

interface SelectComponentProps {
  selectedValue: Option; // The currently selected value
  setSelectedValue?: (value: Option) => void; // Function to set the selected value
  options: Option[]; // Array of options for the select
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  selectedValue,
  setSelectedValue,
  options,
}: any) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<any>(selectedValue);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <div
      className="react-classic-wysiwyg-editor-select-component-container"
      ref={selectRef}
    >
      <div
        role="button"
        className="selected-container"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="selected-option">{value.label || "placeholder"}</div>
        <div className="select-dropdown-icon">
          {showDropDown ? <TfiAngleDown /> : <TfiAngleUp />}
        </div>
      </div>
      <div
        className={`select-component-dropdown ${showDropDown ? "show" : ""}`}
      >
        {options.map((opt: any) => {
          return (
            <div
              key={opt.value}
              className="select-dropdown-options"
              onClick={() => setValue(opt)}
            >
              {opt.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectComponent;
