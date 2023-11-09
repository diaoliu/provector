import { createContext } from "react";

const defaultValue: [boolean, () => void] = [false, () => {}];

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
