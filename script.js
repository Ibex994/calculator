function addNum(num) {
  document.getElementById("numbox").value += num;
}

function operate(operator) {
  const numbox = document.getElementById("numbox");
  const lastChar = numbox.value.slice(-1); // Get the last character in the input

  if (operator === "(" || operator === ")") {
    // Check if the last character is an operator or an opening parenthesis
    const isOperatorOrParenthesis = ["+", "-", "*", "/", "("].includes(
      lastChar
    );

    if (operator === "(" && !isOperatorOrParenthesis) {
      // Add a multiplication operator before an opening parenthesis if needed
      numbox.value += "*(";
    } else if (operator === ")" && !isOperatorOrParenthesis) {
      // Add a closing parenthesis only if there is a matching opening parenthesis
      const openingParenthesisCount = (numbox.value.match(/\(/g) || []).length;
      const closingParenthesisCount = (numbox.value.match(/\)/g) || []).length;

      if (openingParenthesisCount > closingParenthesisCount) {
        numbox.value += operator;
      }
    }
  } else {
    numbox.value += operator;
  }
}

function equal() {
  const expression = document.getElementById("numbox").value;
  try {
    const result = eval(expression);
    document.getElementById("numbox").value = result;
  } catch (error) {
    document.getElementById("numbox").value = "Syntax error";
  }
}

function clearAll() {
  document.getElementById("numbox").value = "";
}
