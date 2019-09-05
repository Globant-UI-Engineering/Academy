
//DOM elements
const display 	= document.getElementById("display");
const digitTypeElements 	= document.getElementsByClassName("operand");
const operatorTypeElements  = document.getElementsByClassName("operator");
const equalButton = document.getElementById("equal");
const cleanButton = document.getElementById("clean");

const nonNumsOrOperators =/[^0-9\*\+\-\/]/gi;

let operands 		 = [];
let operatorsPressed = [];
let displayValueBeforeEnterNewDigit;
const isTheDigitanOperator = (digit) => operate.hasOwnProperty(digit);
const isCurrentEventAClick = (eventType) => eventType == 'click';

const setValueFromKeyboard = (event) => {
	let keyPressed = event.key;
	
	if(/[0-9]/g.test(keyPressed)){
		setOperand(event);
	}else if(isTheDigitanOperator(keyPressed)){
		setOperator(event);
	}else if(/(=|Enter)/.test(keyPressed)){
		calculateResult();
	}else if(keyPressed == 'Backspace' &&  !display.value){
		display.value = '0';
	}else{
		display.value = display.value.replace(nonNumsOrOperators, '');
	}
}

const setOperand = (event) => {
	const operand = event.key || event.target.textContent;
	
	if(!isTheDigitanOperator(displayValueBeforeEnterNewDigit.slice(-1)) && operands.length > 0){
		const indexfromLastOperandAdded = operands.length-1; 
		operands[indexfromLastOperandAdded] = parseInt(operands[indexfromLastOperandAdded]+operand);
	}else{
		operands = operands.concat([parseInt(operand)]);
	}
	
	if(isCurrentEventAClick(event.type)) display.value += operand;
};

const setOperator = (event) => {
	const operator = event.key || event.target.textContent;
	
	if(operator == '=' 
		|| operator == 'CE' 
		|| isTheDigitanOperator(displayValueBeforeEnterNewDigit.slice(-1))) return;
	
	/*for those cases where the user for some reason just enter one operand, 
	we need to operate it with the 0 that we have there as default value*/
	if(operands.length == 0) operands = [0];
	
	operatorsPressed = operatorsPressed.concat([operator]);
	if(isCurrentEventAClick(event.type)) display.value += operator;
};

const removeElementFromDisplay = (event) => {
	let displayValue = display.value ;
	
	let deletedValueFromDisplay = displayValue.slice(-1);
	
	if(isCurrentEventAClick(event.type)) {
		displayValue = displayValue.slice(0,-1);
		display.value = displayValue.length > 0 ? displayValue : '0';
	}
	
	if(isTheDigitanOperator(deletedValueFromDisplay)){
		operatorsPressed = operatorsPressed.slice(0, -1);
	}else if(operands.length > 0){
		const operandsQty = operands.length;
		let lastOperand = operands[operandsQty-1].toString();
		if(lastOperand.length > 1){
			operands[operands.length-1] = parseInt(lastOperand.slice(0, -1));
		}
		else operands = operands.slice(0, -1);
	}
};

const operate = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
	"*": (x, y) => x * y,
	"/": (x, y) => x / y
};

const calculateResult = () =>{
	let operationResult = 0;
	
	if(operatorsPressed.length == 0) return;
	
	let [firstOperand, ...operandsWithoutFirstElm] = operands;
	let operatorsPressedClone = [...operatorsPressed];
	
	operationResult = operandsWithoutFirstElm.reduce((acc, operand) => {
		const [currentOperator] = operatorsPressedClone; 
		operatorsPressedClone = operatorsPressedClone.slice(1);
		return operate[currentOperator](acc, operand);
	}, firstOperand);
	
	operatorsPressed = [];
	operands = [parseInt(operationResult)];
	display.value = operationResult;
}

Array.from(digitTypeElements).forEach((element) => {
	element.addEventListener('click', (event) => {
		//if the default value is there, lets clean the display 
		if(display.value == 0) 
			display.value = '';
		displayValueBeforeEnterNewDigit = display.value;
		setOperand(event);
	});
});

Array.from(operatorTypeElements).forEach((element) => {
	element.addEventListener('click', (event) => {
		displayValueBeforeEnterNewDigit = display.value;
		setOperator(event);
	});
});

display.addEventListener('keydown', (event) => {
	if(event.key == "Backspace"){
		removeElementFromDisplay(event);
	}else{
		if(display.value == 0 && !nonNumsOrOperators.test(event.key)) display.value = '';
		
		displayValueBeforeEnterNewDigit = display.value;
	}
});

equalButton.addEventListener('click', calculateResult);

cleanButton.addEventListener('click', removeElementFromDisplay);