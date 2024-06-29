import React from "react";
import "./_styles.scss";

interface Props {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const CustomCheckbox: React.FC<Props> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="checkbox-input"
      />
      <div className="custom-checkbox">
        {label}
        <span className="checkbox-custom"></span>
      </div>
    </label>
  );
};

export default CustomCheckbox;
