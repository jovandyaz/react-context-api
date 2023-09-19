import { ReactElement, createContext, useMemo, useState } from "react";

interface IThemeContext {
  darkTheme: boolean;
  toggleTheme: () => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
  darkTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: ContextProviderProps): ReactElement => {
  const [darkTheme, setDarkTheme] = useState<IThemeContext["darkTheme"]>(false);

  const contextValue = useMemo(() => {
    const toggleTheme = () => {
      setDarkTheme((prevTheme) => !prevTheme);
    };

    return {
      darkTheme,
      toggleTheme,
    };
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
