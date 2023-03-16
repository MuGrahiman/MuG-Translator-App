import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguge] = useState("es");
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Field onChange={setText} />
      <Languages languages={language} onLanguageChange={setLanguge} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
