var operationType = "";
//Ivan Martinez
function operate() {
    let result = 0;
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    if (firstValue != "" && secondValue != "") {
        switch (this.operationType) {
            case "+":
                result = firstValue + secondValue
                break;
            case "-":
                result = firstValue - secondValue
                break;
            case "*":
                result = firstValue * secondValue
                break;
            case "/":
                result = firstValue / secondValue
                break;
            default:
                alert("Please select a type of operation");
                break;
        }
        document.getElementById("result").value = result;
    }
}

function clickOperationButton(operationType) {
    this.operationType = operationType;
    document.getElementById("operation").value = this.operationType;
    operate();
}