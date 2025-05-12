import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header setIsDark={() => setIsDark((prev) => !prev)} isDark={isDark} />
      <div className="container">
        <Main />
      </div>
      <Footer setIsDark={() => setIsDark((prev) => !prev)} isDark={isDark} />
    </div>
  );
}

export default App;
