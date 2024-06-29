import React from "react";
import "./_styles.scss";
import { nanoid } from "nanoid";

interface Props {
  activeStep: number;
  steps?: number;
}

const Stepper: React.FC<Props> = ({ activeStep, steps = 5 }) => {
  return (
    <>
      <div className="counter text_size__small">
        <span className="active">{activeStep}</span> / {steps}
      </div>
      <div className="progress-line">
        {Array.from({ length: steps }).map((_, i) => (
          <div
            className={i < activeStep ? " step step_completed" : "step"}
            key={nanoid()}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
