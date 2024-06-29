import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { ROUTE_PATHS } from "../../utils/constants";
import "./_styles.scss";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={"flex-center fullView container not-found-container"}>
      {t("NotFound.info")}
      <CustomButton
        label={t("Button.back")}
        variant={"base"}
        onClick={() => navigate(ROUTE_PATHS.QUIZ_1)}
      />
    </div>
  );
};

export default NotFound;
