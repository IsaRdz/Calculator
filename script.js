const screen = document.getElementById("screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const del = document.getElementById("delete");
const reset = document.getElementById("reset");
const sign = document.getElementById("sign");
const dot = document.getElementById("dot");

var num1 = "0";
var num2 = "0";
var op;
var result = "0";
var flag = false;

const catchNumber = () => {
  for (const number of numbers) {
    number.addEventListener("click", (event) => {
      if (screen.textContent.length < 14) {
        if (
          flag == true ||
          screen.textContent == 0 ||
          screen.textContent == "/" ||
          screen.textContent == "x" ||
          screen.textContent == "-" ||
          screen.textContent == "+"
        ) {
          screen.textContent = number.innerHTML;
          flag = false;
        } else {
          screen.textContent = screen.textContent + number.innerHTML;
        }
      }
    });
  }
};
catchNumber();

const resetFunction = () => {
  num1 = "0";
  num2 = "0";
  localStorage.clear();
};

const resetButton = () => {
  reset.addEventListener("click", () => {
    resetFunction();
    screen.textContent = "0";
  });
};
resetButton();

const saveLocalStorage = () => {
  localStorage.setItem("valor1", num1);
  localStorage.setItem("valor2", num2);
  localStorage.setItem("operator", op);
};

const asignNumber = (num) => {
  if (num1 == 0) {
    num1 = num;
  } else {
    num2 = num;
  }
};

const solveOperation = () => {
  if (op == "+") {
    result =
      parseFloat(localStorage.getItem("valor1")) +
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", result);
  } else if (op == "-") {
    result =
      parseFloat(localStorage.getItem("valor1")) -
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", result);
  } else if (op == "x") {
    result =
      parseFloat(localStorage.getItem("valor1")) *
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", result);
  } else if (op == "/") {
    result =
      parseFloat(localStorage.getItem("valor1")) /
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", result);
  }
};

const catchOperator = () => {
  for (const operator of operators) {
    operator.addEventListener("click", () => {
      asignNumber(screen.textContent);

      if (num2 != "0") {
        solve();
        num1 = localStorage.getItem("result");
      } else {
        screen.textContent = operator.innerHTML;
        op = screen.textContent;
      }
      saveLocalStorage();
    });
  }
};
catchOperator();

const delFunction = () => {
  del.addEventListener("click", () => {
    if (screen.textContent.length == 1) {
      screen.textContent = "0";
    } else {
      screen.textContent = screen.textContent.slice(0, -1);
    }
  });
};
delFunction();

const buttonEqual = () => {
  equal.addEventListener("click", () => {
    asignNumber(screen.textContent);
    saveLocalStorage();
    solveOperation();
    let resultOp = localStorage.getItem("result");
    if (resultOp.length < 15) {
      screen.textContent = resultOp;
      flag = true;
      //   resetFunction();
    } else {
      screen.textContent = resultOp.substring(0, 15);
    }
  });
};
buttonEqual();

const solve = () => {
  asignNumber(screen.textContent);
  saveLocalStorage();
  solveOperation();
  let resultOp = localStorage.getItem("result");
  if (resultOp.length < 15) {
    screen.textContent = resultOp;
  } else {
    screen.textContent = resultOp.substring(0, 15);
  }
  flag = true;
};
const assignSign = () => {
  sign.addEventListener("click", () => {
    screen.textContent > 0
      ? (screen.textContent = -screen.textContent)
      : (screen.textContent = -screen.textContent);
  });
};
assignSign();

const dotAssign = () => {
  dot.addEventListener("click", () => {
    screen.textContent % 1 !== 0
      ? screen.textContent
      : (screen.textContent += dot.innerHTML),
      (dotFlag = true);
  });
};
dotAssign();
