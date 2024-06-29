import React from "react";
import { useNavigate } from "react-router-dom";
import { AGES, ROUTE_PATHS } from "../../../utils/constants";
import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import SingleSelect from "../../../components/SingleSelect";
import { nanoid } from "nanoid";

const Quiz3: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLLIElement;
    const selectedAge = target.id;
    const output = {
      order: 3,
      title: "What is your age?",
      type: "single-select",
      answer: selectedAge,
    };
    localStorage.setItem("question3", JSON.stringify(output));

    navigate(ROUTE_PATHS.QUIZ_4);
  };
  return (
    <div className={"container"}>
      <Header />
      <h1 className={"text_size__xlarge page-title"}>{t("Quiz3.title")}</h1>
      <ul className={"option-list page-subtitle"}>
        {Object.values(AGES).map((item: string, i: number) => (
          <li
            id={item}
            onClick={onSelect}
            key={nanoid()}
            className={"option text_color__white"}
          >
            <SingleSelect label={t(`Quiz3.option${i + 1}`)} name={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz3;
