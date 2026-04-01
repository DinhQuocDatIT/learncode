import { createContext, useContext, useState } from "react";
import skills from "../constants/skill";

const SkillContext = createContext(null);
export const SkillProvider = ({ children }) => {
  const [skill, setSkill] = useState(skills[0]);
  return (
    <SkillContext.Provider value={{ skill, setSkill }}>
      {children}
    </SkillContext.Provider>
  );
};
export function useSkill() {
  return useContext(SkillContext);
}
