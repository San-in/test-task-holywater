import React from "react";
import Stepper from "../Stepper";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../../assets/icons/arrow-left";
import "./_styles.scss";
import { QUIZ_ROUTES } from "../../utils/constants";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quizNumber = Number(location.pathname.split("/").pop());
  const isFirstQuiz = quizNumber === 1;

  return (
    <header className={"header"}>
      {!isFirstQuiz && (
        <ArrowLeftIcon
          onClick={() => navigate(QUIZ_ROUTES[quizNumber - 2])}
          className={"arrow"}
        />
      )}
      <Stepper activeStep={quizNumber} />
    </header>
  );
};

export default Header;
