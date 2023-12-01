import { PropsWithChildren, createContext, useContext, useState } from "react";
import { RegistContextType, RegistValue } from "types/types";

const RegistContext = createContext<RegistContextType>({
  registValue: {
    title: "",
    chapter: "",
    wordArr: [
      {
        en: "",
        ko: "",
      },
    ],
  },
  setRegistValue: () => {
    return;
  },
});

export const RegistProvider = ({ children }: PropsWithChildren) => {
  const [registValue, setRegistValue] = useState<RegistValue>({
    title: "",
    chapter: "",
    wordArr: [],
  });

  const value = { registValue, setRegistValue };

  return (
    <RegistContext.Provider value={value}>{children}</RegistContext.Provider>
  );
};

export function useRegistContext() {
  return useContext(RegistContext);
}
