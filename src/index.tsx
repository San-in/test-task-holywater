import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./locales/i18n";
import App from "./app/App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
