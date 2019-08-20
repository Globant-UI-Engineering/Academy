
class calculator {

    constructor(){
       this.INPUT_RESULT =document.getElementById("input_result");
       this.exec = false; //indicate if its time to result the operation
       this.NOT_ALLOW_FIRST=['+','-','*','/',0]; //not allowed char to add when the input its empty 
       this.operationType; //indicates with its the operation to result (+,-,*,/)   
    }
   
    /**
     * loads the button clicked value on the system
     * @param {*} val button clicked value
     */
    loadValue(val){
    
        if(val==="CE"){
            this.INPUT_RESULT.value="";
            this.exec=false;
        }
        else { 
    
            if(typeof(val)==="string" && this.INPUT_RESULT.value.length>0){
                if(this.exec ){
                    this.calculate();
                }
                this.exec=true;
                this.operationType=val;
            }
    
            if(val!=="=" && (!(this.INPUT_RESULT.value.length===0 && this.NOT_ALLOW_FIRST.indexOf(val) > -1))){
                this.INPUT_RESULT.value=this.INPUT_RESULT.value+val;
            }
         
        }
    }
   
    /**
     * ejecutes the operation (+,-,*,/)
     */
    calculate(){
        let numbers=this.INPUT_RESULT.value.split(this.operationType);
        switch(this.operationType){
            case "+":
                this.INPUT_RESULT.value =parseInt(parseInt(numbers[0]) + parseInt(numbers[1]));
                break
            case "-":
                this.INPUT_RESULT.value =parseInt(parseInt(numbers[0]) - parseInt(numbers[1]));
                break;
            case "/":
                this.INPUT_RESULT.value =parseInt(parseInt(numbers[0]) / parseInt(numbers[1]));
                break;
            case "*":
                this.INPUT_RESULT.value =parseInt(parseInt(numbers[0]) * parseInt(numbers[1]));
                break;
        }
    
        this.exec=false;
    }
}


var cal=new calculator();
