import { useState } from "react";
import "./App.css";
import DisplayButtons from "./components/Buttons.jsx";
import Display from "./components/Display.jsx";

function App() {
  const [diplayResult, setDisplayResult] = useState("");
  function HandleButtons(button) {
    console.log(button);
    if (button === "AC") {
      setDisplayResult("");
    } else if (button === "%") {
      setDisplayResult(diplayResult / 100);
    } else if (button === "DE") {
      if (diplayResult === "Error") {
        return;
      } else {
        setDisplayResult(diplayResult.slice(0, -1));
      }
    } else if (button === "=") {
      if (diplayResult === "" || diplayResult === "Error") {
        return;
      }
      try {
        const result = eval(diplayResult);
        const roundedResult = result.toFixed(3);
        setDisplayResult(roundedResult);
      } catch {
        setDisplayResult("Error");
      }
    } else {
      setDisplayResult(diplayResult + button);
    }
  }
  return (
    <>
      <div className="container">
        <div className="calculator">
          <Display diplayResult={diplayResult}></Display>
          <DisplayButtons HandleButtons={HandleButtons}></DisplayButtons>
        </div>
      </div>
    </>
  );
}

export default App;
