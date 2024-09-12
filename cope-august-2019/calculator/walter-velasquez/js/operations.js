class Operations {
    constructor(){
        this.display = document.getElementById("display");
        this.operation = undefined;
        this.firstValue = '';
        this.secondValue = '';
        this.result = 0;
        this.reset = false;
    }

    /**
     * Get the selected value from the keyboard.
     * @param element
     */
    getValue(element) {
        // Get the class type: number, operation, equal, or erase.
        var className = element.getAttribute("class");
        var value = element.innerText;
        switch (className) {
            case "number":
                if (this.reset) {
                    this.doReset();
                }
                // Fill the first value.
                if (typeof this.operation === "undefined") {
                    this.firstValue = this.firstValue + value;
                    this.display.value = this.firstValue;
                }
                // Fill the second value.
                else {
                    this.secondValue = this.secondValue + value;
                    this.display.value = this.display.value + value;
                }
                break;
            case "op":
                // Fill the operation value.
                if (this.reset) {
                    this.firstValue = this.result;
                    this.secondValue = "";
                    this.reset = false;
                }
                this.operation = value;
                this.display.value = this.display.value + this.operation;
                break;
            case "equal":
                if (this.secondValue) {
                    this.result = this.doOperation(this.operation, this.firstValue, this.secondValue);
                    this.display.value = this.result;
                    this.reset = true;
                }
                break;
            case "erase":
                this.doReset();
                break;
        }
        console.log(this);
    }

    doReset() {
        this.firstValue = this.secondValue = "";
        this.result = 0;
        this.operation = undefined;
        this.display.value = "";
        this.reset = false;
    }

    doOperation (operation, first, second) {
        first = Number(first);
        second = Number(second);
        var result = 0;
        switch (operation) {
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "*":
                result = first * second;
                break;
            case "/":
                result = first / second;
                break;
        }
        return result;
    }
}

var cal=new Operations();
