import { createContext, useContext, useState } from "react";

const PopContext = createContext(null);

export const PopProvider = ({ children }) => {
  // Toggle popup
  const togglePop = () => setPop((p) => !p);
  const [pop, setPop] = useState(false);
  const [content, setContent] = useState();
  // Context value
  const contextValue = {
    pop,
    setPop,
    mod: "./content/" + content + ".jsx",
    open: () => setPop(true),
    close: () => setPop(false),
    toggle: togglePop,
    content,
    setContent, 
  };

  return (
    <PopContext.Provider value={contextValue}>
      {children}
    </PopContext.Provider>
  );
};

export const usePopCtx = () => useContext(PopContext);