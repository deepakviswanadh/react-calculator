import React, { Fragment, useState, useRef } from "react";

const Calculator = () => {
  const [operand1, setOperand1] = useState(" ");
  const [operand2, setOperand2] = useState(" ");
  const [result, setResult] = useState(" ");
  const operations = ["+", "-", "*", "/", "%"];
  const [select, setSelect] = useState(operations[0]);
  const copyRef = useRef(null);
  var j = 0; //key for map
  const options = operations.map((op) => {
    return (
      <option className="item" key={++j}>
        {op}
      </option>
    );
  });
  return (
    <Fragment>
      <div>
        <div className="field">
          <label className="ui right pointing label">Operand1: </label>
          <input
            className="ui input"
            type="text"
            placeholder="operand1"
            value={operand1}
            onChange={(e) => {
              setOperand1(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="ui right pointing label">Operand2: </label>
          <input
            className="ui input"
            type="text"
            value={operand2}
            onChange={(e) => {
              setOperand2(e.target.value);
            }}
          />
        </div>
      </div>
      <div className=" ui segment">
        <h3>Select an operation:</h3>
        <select
          className="ui fluid selection dropdown"
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          {options}
        </select>
      </div>
      <div className="ui segment">
        <h3>Functions:</h3>
        <table className="ui table">
          <tbody>
            <tr>
              <td>
                <button
                  className="ui button"
                  onClick={(e) => {
                    switch (select) {
                      case "+":
                        setResult(Number(operand2) + Number(operand1));
                        break;
                      case "-":
                        setResult(operand1 - operand2);
                        break;
                      case "*":
                        setResult(operand2 * operand1);
                        break;
                      case "/":
                        setResult(operand1 / operand2);
                        break;
                      case "%":
                        setResult(operand1 % operand2);
                        break;
                      default:
                        alert("this operation is not available");
                        setResult("");
                    }
                  }}
                >
                  Answer
                </button>
              </td>
              <td>
                <button
                  className="ui button"
                  onClick={(e) => {
                    let temp = operand1;
                    let temp2 = operand2;
                    setOperand2(temp);
                    setOperand1(temp2);
                  }}
                >
                  Switch operands
                </button>
              </td>
              <td>
                <button
                  className="ui button"
                  onClick={(e) => {
                    setOperand1(result);
                    setOperand2(" ");
                  }}
                >
                  Copy result for next operation
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => {
                    window.getSelection().removeAllRanges();
                    const range = document.createRange();
                    range.selectNode(copyRef.current);
                    window.getSelection().addRange(range);
                    try {
                      document.execCommand("copy");
                      alert(result + " is copied");
                    } catch (err) {
                      console.log(err);
                    }
                    window.getSelection().removeAllRanges();
                  }}
                  className="ui button"
                >
                  Copy the result to clipboard
                </button>
              </td>
              <td>
                <button
                  className="ui button"
                  onClick={(e) => {
                    setOperand2(" ");
                    setOperand1(" ");
                    setResult(" ");
                  }}
                >
                  <h5 className="ui header">Reset operands</h5>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div style={{ display: "inline" }} className="ui header">
          The answer is :
        </div>
        <div
          style={{ display: "inline", fontWeight: "bold", fontSize: "20px" }}
          ref={copyRef}
        >
          {result}
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;
