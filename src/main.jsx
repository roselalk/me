import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider as LanguageProvider } from "./context/language";
import { Provider as MobileProvider } from "./context/mobile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <MobileProvider>
        <App />
      </MobileProvider>
    </LanguageProvider>
  </React.StrictMode>
);
