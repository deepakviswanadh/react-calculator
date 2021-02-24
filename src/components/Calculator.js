import React, { Fragment, useState } from "react";

const Calculator = () => {
  const [operand1, setOperand1] = useState(" ");
  const [operand2, setOperand2] = useState(" ");
  const [result, setResult] = useState(" ");
  const operations = ["+", "-", "*", "/", "%"];
  const [select, setSelect] = useState(operations[0]);
  var j = 0; //key for map
  const op = operations.map((op) => {
    return (
      <option className="item" key={++j}>
        {op}
      </option>
    );
  });

  const onChange1 = (e) => {
    setOperand1(e.target.value);
  };

  const onChange2 = (e) => {
    setOperand2(e.target.value);
  };

  //perform operation
  const onClick1 = () => {
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
        setResult("this operation is not available");
    }
  };

  //swap values
  const onClick2 = () => {
    let temp = operand1;
    let temp2 = operand2;
    setOperand2(temp);
    setOperand1(temp2);
  };

  //copy result into op1
  const onClick3 = () => {
    setOperand1(result);
    setOperand2(" ");
  };

  //reset op1 and op2 and result
  const onClick4 = () => {
    setOperand2(" ");
    setOperand1(" ");
    setResult(" ");
  };
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
              onChange1(e);
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
              onChange2(e);
            }}
          />
        </div>
      </div>
      <div className=" ui segment">
        <h3>Select an operation:</h3>
        <select
          className="ui fluid selection dropdown"
          name="select an operation"
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          {" "}
          <i class="dropdown icon"></i>
          {op}
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
                    onClick1();
                  }}
                >
                  Answer
                </button>
              </td>
              <td>
                <button
                  className="ui button"
                  onClick={(e) => {
                    onClick2();
                  }}
                >
                  Switch operands
                </button>
              </td>
              <td>
                <button
                  className="ui button"
                  onClick={(e) => {
                    onClick3();
                  }}
                >
                  Store result for next operation
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="ui header">The answer is:{result}</h3>
      </div>
      <div className="ui segment">
        <button
          className="ui button"
          onClick={(e) => {
            onClick4();
          }}
        >
          <h5 className="ui header">Reset operands</h5>
        </button>
      </div>
    </Fragment>
  );
};

export default Calculator;
