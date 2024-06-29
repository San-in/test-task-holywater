import React from "react";
import "./_styles.scss";
import { useTranslation } from "react-i18next";

interface Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const EmailInput: React.FC<Props> = ({ email, setEmail, error, setError }) => {
  const { t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="email-input-container">
      <input
        type="email"
        name={"email"}
        value={email}
        placeholder={t("Email.placeholder")}
        onChange={handleChange}
        className={`email-input ${error && email ? "email-input-error" : ""} text_color__main`}
      />

      {error && email && (
        <span className="email-input-error-message text_size__xxsmall">
          {error}
        </span>
      )}
    </div>
  );
};

export default EmailInput;
