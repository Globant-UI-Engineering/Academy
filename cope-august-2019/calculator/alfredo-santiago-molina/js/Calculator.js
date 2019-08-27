let isEmpty = (value) =>{
    return (value === null || value === "") ? true : false;
};

class Calculator{
    A;
    B;
    isTemp;
    display;
    minidisplay;
    operation;
    OPERATIONS_LITERAL;    

    constructor(minidisplay, display){
        console.log("calculator created"); 
        this.display = display;
        this.minidisplay = minidisplay;
        this.setA();
        this.setB();
        this.setOperation();
        this.isTemp = false;
        this.OPERATIONS_SYMBOL = {
            "sum" : "+",
            "multiply" : "*",
            "subtract" : "-",
            "divide" : "/",
        };

        if (!!Calculator.instance) {
            return Calculator.instance;
        }
        Calculator.instance = this;
        return this;
    }

    /* #region Operations */
    sum(a,b) {
        return a + b;
    }

    multiply(a,b) {
        return a * b;
    }

    subtract(a,b) {
        return a - b;
    }

    divide(a,b) {        
        return (b === 0) ? undefined : a / b;
    }

    clean(){
        this.setA();
        this.setB();
        this.setOperation();
        this.resetMiniDisplay();
        this.resetDisplay();
    }

    setOperation(operation){
        this.operation = (operation === undefined) ? null : operation;
    }

    getOperation(){
        return this.operation;
    }

    /* #endregion */

    setA(value){
        this.A = (value === undefined) ? null : value;
    }

    getA(){
        return this.A;
    }

    setB(value){
        this.B = (value === undefined) ? null : value;
    }

    getB(){
        return this.B;
    }

    setLastResut(value){
        this.lastResult = parseInt(value);
    }

    addToTotal(value){
        this.total += parseInt(value);
    }

    /* #region displays */
    addToMinidisplay(value) {
        this.minidisplay.value += value + " ";
    }

    resetMiniDisplay(){
        this.minidisplay.value = "";
    }

    setDisplay(value){
        this.display.value = value;
    }

    addToDisplay(value) {
        this.display.value += value;
    }

    getDisplay(){
        return this.display.value;
    }

    resetDisplay(){
        this.display.value = "";
    }
    /* #endregion */

    addNumber(number){        
        this.addToMinidisplay(number); 
        if(this.isTemp){//visual sugar
            this.setDisplay(number);
            this.isTemp = false;
        }else{
            this.addToDisplay(number);
        }
    }

    callOperation(operation){

        if( this.isTemp === false && isEmpty(this.getDisplay()) ){
           return
        }
        
        if(isEmpty(this.operation) && isEmpty(this.A)){
            this.setA(parseInt(this.getDisplay()));
            this.resetDisplay();
        }

        if(!isEmpty(this.operation) && isEmpty(this.B)){
            this.setB(parseInt(this.getDisplay()));
            const result = this.getResult();
            this.setDisplay(result);
            this.setA(parseInt(result));
            this.setB();
            this.isTemp = true;
        }
        
        this.addToMinidisplay(this.OPERATIONS_SYMBOL[operation]);//add the symbol
        this.setOperation(operation);//set current operation
    }

    getResult(){
        if( isEmpty( this.A ) 
        || isEmpty( this.B )
        || isEmpty( this.operation )
        || this.getDisplay() === "")//if theres no A or operation or nothing on the display quit
            return
        const result = this[this.getOperation()](this.getA(),this.getB());//make the operation 
        return result;
    }

    equals(){
        if( !isEmpty(this.B) && isEmpty(this.getDisplay()) )
            return;        
        this.setB(parseInt(this.getDisplay()));//set B
        const result = this.getResult();        
        this.setDisplay(result);
        this.isTemp = true;
        this.setA();//reset vars
        this.setB();
        this.setOperation();
    }
}