import { useContext } from "react";
import { ThemeContext } from "../../contexts";

export const useTheme = () => {
  console.log(
    "🚀 ~ useTheme ~ useContext(ThemeContext):",
    useContext(ThemeContext)
  );
  return useContext(ThemeContext);
};
