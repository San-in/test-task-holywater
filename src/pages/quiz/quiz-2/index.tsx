import React from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import SingleSelect from "../../../components/SingleSelect";
import "./_styles.scss";
import { GENDERS, ROUTE_PATHS } from "../../../utils/constants";
import { nanoid } from "nanoid";

const Quiz2: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLLIElement;

    const selectedGender = target.id;
    const output = {
      order: 2,
      title: "What gender do you identify with?",
      type: "single-select-image",
      answer: selectedGender,
    };
    localStorage.setItem("question2", JSON.stringify(output));

    navigate(ROUTE_PATHS.QUIZ_3);
  };
  return (
    <div className={"container"}>
      <Header />
      <h1 className={"text_size__large  page-title"}>{t("Quiz2.title")}</h1>
      <h3 className={"text_color__secondary page-subtitle"}>
        {t("Quiz2.subtitle")}
      </h3>
      <ul className={"option-list option-list-second"}>
        {GENDERS.map((item: { name: string; icon: string }, i: number) => (
          <li
            onClick={onSelect}
            id={item.name}
            key={nanoid()}
            className={
              "option option-second text_color__white text_size__xsmall flex-center"
            }
          >
            <span className={"gender-icon"}>{item.icon}</span>
            <SingleSelect label={t(`Quiz2.option${i + 1}`)} name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz2;
