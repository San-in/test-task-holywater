import React from "react";
import "./_styles.scss";

interface Props {
  label: string;
  icon: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RoundedCheckbox: React.FC<Props> = ({
  label,
  icon,
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
        className="checkbox-input-rounded"
      />
      <div className="custom-checkbox-rounded">
        <p className={"text_size__large"}>{icon}</p>
        <p className={"text_size__xxsmall"}>{label}</p>
      </div>
    </label>
  );
};

export default RoundedCheckbox;
