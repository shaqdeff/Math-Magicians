import React from 'react';
import calculate from '../logic/calculate';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-closing-bracket-location */
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
    };
  }

  handleClick = (e) => {
    const operation = e.target.value;
    const result = calculate(this.state, operation);
    this.setState(result);
  };

  handleTextChange = (e) => {
    this.setState({
      total: e.target.value,
    });
  };

  render() {
    const { total, next } = this.state;

    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="operand" onChange={this.handleTextChange}>
            {next || total || 0}
          </div>
        </div>
        <button type="button" onClick={this.handleClick} value="AC">
          AC
        </button>
        <button type="button" onClick={this.handleClick} value="+/-">
          +/-
        </button>
        <button type="button" onClick={this.handleClick} value="%">
          %
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={this.handleClick}
          value="÷">
          ÷
        </button>
        <button type="button" onClick={this.handleClick} value="7">
          7
        </button>
        <button type="button" onClick={this.handleClick} value="8">
          8
        </button>
        <button type="button" onClick={this.handleClick} value="9">
          9
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={this.handleClick}
          value="x">
          x
        </button>
        <button type="button" onClick={this.handleClick} value="4">
          4
        </button>
        <button type="button" onClick={this.handleClick} value="5">
          5
        </button>
        <button type="button" onClick={this.handleClick} value="6">
          6
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={this.handleClick}
          value="-">
          -
        </button>
        <button type="button" onClick={this.handleClick} value="1">
          1
        </button>
        <button type="button" onClick={this.handleClick} value="2">
          2
        </button>
        <button type="button" onClick={this.handleClick} value="3">
          3
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={this.handleClick}
          value="+">
          +
        </button>
        <button
          type="button"
          className="span-two"
          onClick={this.handleClick}
          value="0">
          0
        </button>
        <button type="button" onClick={this.handleClick} value=".">
          .
        </button>
        <button
          type="button"
          className="color-btn"
          onClick={this.handleClick}
          value="=">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
