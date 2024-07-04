function calculate(){
    
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation").value;

    let result;

    if (operation === "+") {
        result = parseFloat(number1) + parseFloat(number2);
    } else if (operation === "-") {
        result = parseFloat(number1) - parseFloat(number2);
    } else if (operation === "*") {
        result = parseFloat(number1) * parseFloat(number2);
    } else if (operation === "/") {
        result = parseFloat(number1) / parseFloat(number2);
    }

    document.getElementById("result").innerHTML = result;

}