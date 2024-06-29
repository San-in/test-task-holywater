import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import "./_styles.scss";
import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import RoundedCheckbox from "../../../components/RoundedCheckBox";
import { chunkArray } from "../../../services/chunkArray";
import { AGES, PREFERENCES, ROUTE_PATHS } from "../../../utils/constants";
import { findKeyByValue } from "../../../services/findKeyByValue";
import { nanoid } from "nanoid";

const Quiz5: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [chunkedOptions, setChunkedOptions] = useState<Preference[][]>([]);

  const handleCheckboxChange = (value: string) => {
    setCheckedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const output = {
      order: 5,
      title: "What are your favorite topics?",
      type: "bubbles",
      answer: checkedValues.join(", "),
    };
    localStorage.setItem("question5", JSON.stringify(output));

    setCheckedValues([]);
    navigate(ROUTE_PATHS.SEARCH);
  };

  useEffect(() => {
    const ageData = localStorage.getItem("question3");
    const age = ageData ? JSON.parse(ageData).answer : "";
    const currentAgeCategory =
      (findKeyByValue(AGES, age)?.toUpperCase() as keyof typeof PREFERENCES) ||
      undefined;
    setChunkedOptions(chunkArray(PREFERENCES[currentAgeCategory], 2));
  }, []);

  return (
    <div className="container">
      <Header />
      <h1 className={"text_size__large page-title title-fifth"}>
        {t("Quiz5.title")}
      </h1>
      <h3 className={"text_color__secondary page-subtitle"}>
        {t("Quiz5.subtitle")}
      </h3>
      <form onSubmit={onSubmit}>
        <div className={"bubbles"}>
          {chunkedOptions.map((pair, index) => (
            <div key={nanoid()} className={"pair-of-bubbles"}>
              {pair.map((option) => (
                <RoundedCheckbox
                  key={nanoid()}
                  icon={option.icon}
                  label={t(option.labelKey)}
                  name="custom-checkbox-rounded"
                  value={option.name}
                  checked={checkedValues.includes(option.name)}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          ))}
        </div>
        <CustomButton
          disabled={!checkedValues.length || checkedValues.length > 3}
          label={t("Button.next")}
          variant="base"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Quiz5;
