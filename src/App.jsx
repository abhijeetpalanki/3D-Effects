import { useState } from 'react';
import Layout from './utils/Layout/Layout';
import ThemeContext, { themes } from "./utils/Layout/ThemeContext";

function App() {   
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    console.log(theme);
  }

  return (
     <ThemeContext.Provider value={theme}>
        <div className={theme.color === "white" ? "toggle-light" : "toggle-dark"} onClick={toggleTheme}></div>
        <Layout theme={theme}></Layout>
     </ThemeContext.Provider>
  );
}

export default App;