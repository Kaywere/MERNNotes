import React, { useState, useEffect, createContext, useContext } from 'react';
import { SunMoonIcon} from 'lucide-react';
const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
 
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const ThemeDropdown = () => {
  const { changeTheme } = useTheme();

  const themes = [
    "light", "dark", 
    "synthwave", "retro", "cyberpunk", "valentine",
    "halloween", "garden", "forest",  "black", "luxury",
    "dracula",  "business", 
     "coffee",  "dim",
    "nord", "sunset", "caramellatte","abyss","silk"
  ];

  return (
    <div className="dropdown dropdown-center lg:ml-25 md:ml-25  ">
      <div tabIndex={0} role="button" className="btn btn-ghost rounded-field p-2 ju">
        <SunMoonIcon className="size-8 text-primary" />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-[1] max-h-[700px] w-40 overflow-y-auto mt-4 p-2 shadow justify-center items-center"
      >
                {themes.map((theme) => (
          <li key={theme}>
            <a onClick={() => changeTheme(theme)}>
              {theme.charAt(0).toUpperCase() + theme.slice(1) }
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};