var display = document.querySelectorAll(".display");
var operator = "";
var x = 0;

function operations(symbol) {
  if (x == 1) {
    if (symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/") {
      operator = "";
      operator = display[1].value;
      x = 0;
    } else {
      operator = "";
      x = 2;
    }
  }
  if (symbol == "=") {
    if (operator != "") {
      let operation = operator.replace(")(", ")*(");
      try {
        eval(operation);
        res = eval(operation);
        display[1].value = res;
      } catch (error) {
        display[0].value = "Syntax Error";
        display[1].value = "";
        operator = "";
      }
      x = 1;
    }
  } else if (symbol == "C") {
    display[0].value = "";
    display[1].value = "0";
    operator = "";
  } else if (symbol == "<") {
    operator = operator.substring(0, operator.length - 1);
    display[0].value = operator;
  } else {
    operator += symbol;
    display[0].value = operator;
  }
}