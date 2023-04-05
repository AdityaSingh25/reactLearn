import { createContext } from "react";
const ThemeContext = createContext(["light", () => {}]); // passing some default values in createContext // we pass an array whose first element is light theme and then a call back
// yes you can have a callback as well
// you can see these call back a lot of time when you are creating a full stack application

export default ThemeContext;
