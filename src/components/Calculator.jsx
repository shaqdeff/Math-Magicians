import { useState, React } from 'react';
import calculate from '../logic/calculate';

/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-closing-bracket-location */
const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });

  const handleClick = (e) => {
    const operation = e.target.value;
    const result = calculate(state, operation);
    setState(result);
  };

  const handleTextChange = (e) => {
    setState({
      total: e.target.value,
    });
  };

  return (
    <div className="calculator-app">
      <h2>Let&apos;s do some math!</h2>
      <div className="calculator-grid">
        <div className="output">
          <div className="operand" onChange={handleTextChange}>
            {state.next || state.total || 0}
          </div>
        </div>
        <button type="button" onClick={handleClick} value="AC">
          AC
        </button>
        <button type="button" onClick={handleClick} value="+/-">
          +/-
        </button>
        <button type="button" onClick={handleClick} value="%">
          %
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={handleClick}
          value="÷">
          ÷
        </button>
        <button type="button" onClick={handleClick} value="7">
          7
        </button>
        <button type="button" onClick={handleClick} value="8">
          8
        </button>
        <button type="button" onClick={handleClick} value="9">
          9
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={handleClick}
          value="x">
          x
        </button>
        <button type="button" onClick={handleClick} value="4">
          4
        </button>
        <button type="button" onClick={handleClick} value="5">
          5
        </button>
        <button type="button" onClick={handleClick} value="6">
          6
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={handleClick}
          value="-">
          -
        </button>
        <button type="button" onClick={handleClick} value="1">
          1
        </button>
        <button type="button" onClick={handleClick} value="2">
          2
        </button>
        <button type="button" onClick={handleClick} value="3">
          3
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={handleClick}
          value="+">
          +
        </button>
        <button
          type="button"
          className="span-two-border"
          onClick={handleClick}
          value="0">
          0
        </button>
        <button type="button" onClick={handleClick} value=".">
          .
        </button>
        <button
          type="button"
          className="bottom-right-btn"
          onClick={handleClick}
          value="=">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
