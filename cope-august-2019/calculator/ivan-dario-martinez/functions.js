var operationType = "";
//Ivan Martinez
function operate() {
    var res = 0;
    var a = Number(document.getElementById("valueA").value);
    var b = Number(document.getElementById("valueB").value);
    if (a != "" && b != "") {
        switch (this.operationType) {
            case "+":
                res = a + b
                break;
            case "-":
                res = a - b
                break;
            case "*":
                res = a * b
                break;
            case "/":
                res = a / b
                break;

            default:
                alert("Please select a type of operation");
                break;
        }
        document.getElementById("result").value = res;
    }
}

function clickOperationButton(param) {
    this.operationType = param;
    document.getElementById("operation").value = this.operationType;
    operate();
}