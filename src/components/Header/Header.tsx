import { useTheme } from "../../hooks";
import logoIcon from "../../assets/dark-mode-icon.png";
import "./Header.css";

export const Header = () => {
  const { darkTheme, toggleTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <header className={`header header--${darkTheme ? "dark" : "light"}`}>
      <div className="header-content">
        <h2 className="logo-section">
          <img src={logoIcon} alt="logo" />
          <span>Light/Dark mode</span>
        </h2>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={darkTheme}
            />
            <button
              className={`toggle-btn__input-label`}
              onClick={handleThemeChange}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};
