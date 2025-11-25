import { useState } from "react";
import PopContext from "./pop/PopContext";

export const PopProvider = PopContext;

export const ContextCreate = (content) => {
  // Toggle popup
  const togglePop = () => setPop((p) => !p);
  const [pop, setPop] = useState(false);

  const contextValue = {
    pop,
    setPop,
    mod: `./content/${content}.jsx`,
    open: () => setPop(true),
    close: () => setPop(false),
    toggle: togglePop,
  };
  return contextValue;
};
