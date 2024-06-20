import { createContext, useContext } from "react";

const ActionContext = createContext();

const useActionContext = () => {
  return useContext(ActionContext);
};

const ActionProvider = ({ value, children }) => {
  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
};

export { ActionContext, useActionContext, ActionProvider };
