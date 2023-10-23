function addNum(num) {
    document.getElementById("numbox").value += num;
  }
  function operate(operator) {
    document.getElementById("numbox").value += operator;
    if(operator=="()"){
        var temp = document.getElementById('numbox').value;
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