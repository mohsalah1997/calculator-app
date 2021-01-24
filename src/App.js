import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import { faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Calc from "./components/calc/calc";

function App() {
  const [calcText, setChangeCalc] = useState("");
  const [historyText, setHistoryText] = useState("");
  console.log({ historyText });
  const showResult = () => {
    setHistoryText(`${calcText}`);
    console.log(historyText);
    setChangeCalc(`${eval(calcText)}`);
  };
  const setOperation = (val) => {
    if (calcText === "") {
      setChangeCalc("");
    } else if (
      calcText[calcText.length - 1].match(/["+", "-", "*", "/", "%"]/)
    ) {
      setChangeCalc(calcText);
    } else {
      setChangeCalc(`${calcText}${val}`);
    }
  };
  const handleClick = (val) => {
    const calcPoint = (index) => {
      let result = [...calcText].slice(index, calcText.length).includes(".");
      if (!result) setChangeCalc(`${calcText}${val}`);
    };

    if (val === ".")
      ["+", "-", "*", "/", "%"].forEach((e) => {
        const indexOp = calcText.lastIndexOf(e);
        if (indexOp !== -1) calcPoint(indexOp + 1);
        else calcPoint(0);
      });
    else {
      if (val === "AC") {
        return setChangeCalc("");
      } else if (val === "Del") {
        return setChangeCalc(calcText.slice(0, -1));
      } else return setChangeCalc(`${calcText}${val}`);
    }
  };

  return (
    <div>
      <div class="container">
        <header className="header">
          <FontAwesomeIcon icon={faEllipsisV} size="2x" />
          <FontAwesomeIcon icon={faHome} size="2x" />
          <FontAwesomeIcon icon={faThLarge} size="2x" />
          <FontAwesomeIcon icon={faEquals} size="2x" />
          <FontAwesomeIcon icon={faCompressAlt} size="2x" />
        </header>
        <div class="content">
          <div class="history">{historyText}</div>
          <input
            value={calcText}
            class="input"
            onChange={({ target: { value } }) => setChangeCalc(value)}
          />
        </div>
        <div class="element">
          <Calc
            calcClick={() => handleClick("AC")}
            value="AC"
            className="element__orange"
          />

          <Calc
            calcClick={() => handleClick("Del")}
            value={<FontAwesomeIcon icon={faBackspace} />}
            className="element__orange"
          />

          <Calc
            calcClick={() => setOperation("%")}
            value="%"
            className="element__orange"
          />

          <Calc
            calcClick={() => setOperation("/")}
            value="÷"
            className="element__orange"
          />

          <Calc calcClick={() => handleClick("7")} value="7" />
          <Calc calcClick={() => handleClick("8")} value="8" />
          <Calc calcClick={() => handleClick("9")} value="9" />

          <Calc
            calcClick={() => setOperation("*")}
            value="X"
            className="element__orange"
          />

          <Calc calcClick={() => handleClick("4")} value="4" />
          <Calc calcClick={() => handleClick("5")} value="5" />
          <Calc calcClick={() => handleClick("6")} value="6" />

          <Calc
            calcClick={() => setOperation("-")}
            value="-"
            className="element__orange"
          />

          <div onClick={() => handleClick("1")}>1</div>

          <Calc calcClick={() => handleClick("2")} value="2" />
          <Calc calcClick={() => handleClick("3")} value="3" />

          <Calc
            calcClick={() => setOperation("+")}
            value="+"
            className="element__orange"
          />

          <div className="element__orange">
            <FontAwesomeIcon icon={faSyncAlt} />
          </div>

          <Calc calcClick={() => handleClick("0")} value="0" />

          <Calc calcClick={() => handleClick(".")} value="." />

          <Calc
            calcClick={() => showResult()}
            value="="
            className="element__Equal"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
