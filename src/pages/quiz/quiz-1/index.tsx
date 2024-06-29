import React from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import SingleSelect from "../../../components/SingleSelect";
import i18n from "i18next";
import Header from "../../../components/Header";
import { LANGUAGES, ROUTE_PATHS } from "../../../utils/constants";
import { nanoid } from "nanoid";

const Quiz1: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLLIElement;
    const selectedLanguage = target.id;
    const output = {
      order: 1,
      title: "What is your preferred language?",
      type: "single-select",
      answer: selectedLanguage,
    };
    localStorage.setItem("question1", JSON.stringify(output));
    i18n.changeLanguage(LANGUAGES[selectedLanguage as keyof typeof LANGUAGES]);
    navigate(ROUTE_PATHS.QUIZ_2);
  };
  return (
    <div className={"container"}>
      <Header />
      <h1 className={"text_size__large page-title"}>{t("Quiz1.title")}</h1>
      <h3 className={"text_color__secondary page-subtitle"}>
        {t("Quiz1.subtitle")}
      </h3>
      <ul className={"option-list"}>
        {Object.keys(LANGUAGES).map((item: string, i: number) => (
          <li
            id={item}
            onClick={onSelect}
            key={nanoid()}
            className={"option text_color__white"}
          >
            <SingleSelect label={t(`Quiz1.option${i + 1}`)} name={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz1;
