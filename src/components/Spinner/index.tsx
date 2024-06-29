import React, { useCallback, useEffect, useState } from "react";
import "./_styles.scss";
import { ROUTE_PATHS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

interface Props {
  duration?: number;
}

const Spinner: React.FC<Props> = ({ duration = 5000 }) => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const animate = useCallback(() => {
    const spinner = document.getElementById("spinner");
    const startTime = Date.now();

    function animateFrame() {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      if (spinner) {
        spinner.style.background = `conic-gradient(#e6209d ${progress * 360}deg, #e6e8f2 ${progress * 360}deg)`;
        if (progress < 1) {
          requestAnimationFrame(animateFrame);
          setProgress(Math.ceil(progress * 100));
        }
      }
    }

    animateFrame();
  }, [duration]);

  useEffect(() => {
    animate();
    const timerId = setTimeout(() => {
      navigate(ROUTE_PATHS.EMAIL);
    }, duration);
    return () => {
      clearTimeout(timerId);
      setProgress(0);
    };
  }, [animate, duration, navigate]);

  return (
    <div className="spinner" id="spinner">
      <div className="inner-circle flex-center">{progress} %</div>
    </div>
  );
};

export default Spinner;
