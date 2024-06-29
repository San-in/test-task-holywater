import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { ROUTE_PATHS } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import DownloadCSVButton from "../../components/DownloadCSVButton";
import "./_styles.scss";
import CompletedIcon from "../../assets/icons/completed";

const Finish: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onRestart = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("question")) {
        localStorage.removeItem(key);
      }
    });
    navigate(ROUTE_PATHS.QUIZ_1);
  };
  return (
    <div className={"container"}>
      <h1 className={"text_size__xxlarge page-title title-finish"}>
        {t("Finish.title")}
      </h1>
      <h3 className={"text_color__secondary page-subtitle subtitle-finish"}>
        {t("Finish.subtitle")}
      </h3>
      <div className={"flex-center completed-icon"}>
        <CompletedIcon />
      </div>
      <DownloadCSVButton className={"download-button"} />
      <CustomButton
        label={t("Button.restartQuiz")}
        variant={"base"}
        onClick={onRestart}
      />
    </div>
  );
};

export default Finish;
