import { createContext, useState } from "react";

const LanguageContext = createContext();

function Provider({ children }) {
  const [language, setLanguage] = useState("English");

  const valueToShare = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={valueToShare}>
      {children}
    </LanguageContext.Provider>
  );
}

export { Provider };
export default LanguageContext;
