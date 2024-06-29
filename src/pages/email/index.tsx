import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { ROUTE_PATHS } from "../../utils/constants";
import { Trans, useTranslation } from "react-i18next";
import "./_styles.scss";
import EmailInput from "../../components/EmailInput";

const ConfirmEmail: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onConfirm = (event: React.FormEvent) => {
    event.preventDefault();
    const output = {
      order: 5,
      title: "Email",
      type: "email",
      answer: email,
    };
    localStorage.setItem("question5", JSON.stringify(output));

    setEmail("");
    navigate(ROUTE_PATHS.FINISH);
  };

  return (
    <div className={"container"}>
      <h1 className={"text_size__xlarge page-title title-email"}>
        {t("Email.title")}
      </h1>
      <h3
        className={
          "text_color__secondary page-subtitle text_size__xsmall subtitle-email"
        }
      >
        {t("Email.subtitle")}
      </h3>
      <EmailInput
        email={email}
        setEmail={setEmail}
        error={error}
        setError={setError}
      />
      <div className={"text_color__secondary text_size__xxsmall email-info"}>
        <Trans
          i18nKey="Email.info"
          components={{ a: <a className="accent cursor-pointer" href={"#"} /> }}
        />
      </div>
      <CustomButton
        label={t("Button.next")}
        variant={"base"}
        type={"submit"}
        disabled={!!error || !email}
        onClick={onConfirm}
      />
    </div>
  );
};

export default ConfirmEmail;
