import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCheckbox from "../../../components/CustomCheckBox";
import CustomButton from "../../../components/CustomButton";
import "./_styles.scss";
import { Trans, useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import { DISLIKES, ROUTE_PATHS } from "../../../utils/constants";
import { nanoid } from "nanoid";

const Quiz4: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setCheckedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const output = {
      order: 4,
      title: "What do you hate the most in a book?",
      type: "multiple-select",
      answer: checkedValues.join(", "),
    };
    localStorage.setItem("question4", JSON.stringify(output));

    setCheckedValues([]);
    navigate(ROUTE_PATHS.QUIZ_5);
  };

  return (
    <div className="container">
      <Header />
      <h1 className={"text_size__xlarge page-title title-third"}>
        <Trans
          i18nKey="Quiz4.title"
          components={{ span: <span className="accent" /> }}
        />
      </h1>
      <form onSubmit={onSubmit}>
        <ul className={"option-list option-list-fourth"}>
          {Object.values(DISLIKES).map((option, i) => (
            <li key={nanoid()}>
              <CustomCheckbox
                label={t(`Quiz4.option${i + 1}`)}
                name="custom-checkbox"
                value={option}
                checked={checkedValues.includes(option)}
                onChange={handleCheckboxChange}
              />
            </li>
          ))}
        </ul>

        <CustomButton
          disabled={!checkedValues.length}
          label={t("Button.next")}
          variant="base"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Quiz4;
