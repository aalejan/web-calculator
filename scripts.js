function webCalculator() {
  var firstNum = Number(document.getElementById("firstNum").value);
  var secondNum = Number(document.getElementById("secondNum").value);

  var operator = document.getElementById("operator");
  var operation = operator.options[operator.selectedIndex].value;

  switch (operation) {
    case "+":
      var answer = parseInt(firstNum) + parseInt(secondNum);
      break;

    case "-":
      var answer = parseInt(firstNum) - parseInt(secondNum);
      break;

    case "/":
      var answer = parseInt(firstNum) / parseInt(secondNum);
      break;

    case "*":
      var answer = parseInt(firstNum) * parseInt(secondNum);
      break;

    default:
      var answer = alert("Unknown");
  }
  document.getElementById("answer").innerHTML = answer;
}
