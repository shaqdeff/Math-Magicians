import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="operand">0</div>
        </div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">+</button>
        <button type="button" className="span-two">
          0
        </button>
        <button type="button">.</button>
        <button type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
