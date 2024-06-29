import React from "react";
import "./_styles.scss";

interface Props {
  label: string;
  name: string;
}

const SingleSelect: React.FC<Props> = ({ label, name }) => {
  return (
    <label className={`select-button`}>
      <input type="radio" name={name} className="select-radio-input" />
      {label}
    </label>
  );
};

export default SingleSelect;
