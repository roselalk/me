import { createContext } from "react";
import { useMediaQuery } from "react-responsive";


const MobileContext = createContext();

function Provider({ children }) {

  const mobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <MobileContext.Provider value={mobile}>
      {children}
    </MobileContext.Provider>
  );
}

export { Provider };
export default MobileContext;
