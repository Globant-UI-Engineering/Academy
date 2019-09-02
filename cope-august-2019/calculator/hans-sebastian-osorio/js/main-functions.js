/**
 * Main Functions for Calculator
 */

var n1 = ""

// Click event
document.addEventListener( "click", (event) => {
    event.preventDefault()
    switch ( event.toElement.id ) {
        case "C":
            n1 = ""
            printResult(n1)
            printOperators()
            break;
        case "negativenumber":
            //TODO
            break;
        case "percentage":
            validateOperator( event.toElement.value )
            break;
        case "division":
            validateOperator( event.toElement.value )
            break;
        case "multiplication":
            validateOperator( event.toElement.value )
            break;
        case "subtraction":
            validateOperator( event.toElement.value )
            break;
        case "add":
            validateOperator( event.toElement.value )
            break;
        case "equal":
            try {
                if ( !isNaN(n1.substring( n1.length - 1 )) ) {
                    let result = eval(n1)
                    printResult( result )   
                }
            } catch ( error ) {
                printResult( "ERROR" )
                n1 = ""
                printOperators()
            }
            break;                
        default:
            n1 += event.toElement.value
            printOperators()
            break;
    }
})

const validateOperator = ( operator ) => {
    if ( !isNaN(n1.substring( n1.length - 1 )) ){
        n1 += operator
        printOperators()
    }
}

const printOperators = () => {
    let input = document.getElementById('currentoperators')
    input.value = n1
}

const printResult = (value) => {
    let input = document.getElementById('currentresult')
    input.value = value
}