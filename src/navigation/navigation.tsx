import { createContext, useContext, useState, useEffect } from "react";

interface NavigationContextValueType {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext<NavigationContextValueType | undefined>(
  undefined
);

export const useNavigate = () => {
  return useContext(NavigationContext);
};

const NavigationProvider = ({ children }: any) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handlePathChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", handlePathChange);

    return () => window.removeEventListener("popstate", handlePathChange);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  const contextValues: NavigationContextValueType = {
    currentPath,
    navigate,
  };

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
