import React, { ReactElement } from "react";
import "./_styles.scss";

interface Props {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: "base" | "link";
  type?: "button" | "reset" | "submit";
  icon?: ReactElement;
}

const CustomButton: React.FC<Props> = ({
  label,
  variant = "base",
  type = "button",
  disabled,
  onClick,
  icon,
}) => {
  return (
    <button
      type={type}
      className={`button button__${variant} flex-center`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default CustomButton;
