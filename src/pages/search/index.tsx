import React from "react";
import Spinner from "../../components/Spinner";
import { useTranslation } from "react-i18next";
import "./_styles.scss";

const SearchCollection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={"container flex-center fullView search-container"}>
      <Spinner />
      <p>{t("Searching.info")}</p>
    </div>
  );
};

export default SearchCollection;
