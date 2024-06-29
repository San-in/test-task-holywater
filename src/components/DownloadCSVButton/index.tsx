import CustomButton from "../CustomButton";

import React, { HTMLAttributes } from "react";
import { Answer, downloadCSV } from "../../services/downloadCSV";
import { useTranslation } from "react-i18next";
import DownloadIcon from "../../assets/icons/download";

const DownloadCSVButton: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useTranslation();
  const storedAnswers: Answer[] = Object.keys(localStorage)
    .filter((key) => key.startsWith("question"))
    .map((key) => JSON.parse(localStorage.getItem(key)!));

  const answers: Answer[] = storedAnswers.map(
    ({ order, title, type, answer }) => ({
      order,
      title,
      type,
      answer,
    }),
  );
  const sortedAnswers = answers.sort(
    (a, b) => Number(a.order) - Number(b.order),
  );
  const handleDownload = () => {
    downloadCSV(sortedAnswers);
  };

  return (
    <div {...props}>
      <CustomButton
        variant={"link"}
        label={t("Button.download")}
        icon={<DownloadIcon />}
        onClick={handleDownload}
        disabled={answers.length > 5}
      />
    </div>
  );
};

export default DownloadCSVButton;
