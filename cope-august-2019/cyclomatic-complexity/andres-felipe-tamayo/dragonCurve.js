
    // cyclomatic complexity 
    // M = E-N +1
    // M = 7-6 + 1
    // M = 2
function* paperFold() {
        
    let workWith= generateSecuence([1],1);
    let tempArr =workWith.array;
    let lastLetter =workWith.lastLetter;

    for (let i = 0; i < tempArr.length; i++) {
        if(i==tempArr.length-1){
            let sec = tempArr;
            yield tempArr[i];
            workWith=generateSecuence(sec,lastLetter);
            tempArr =workWith.array;
            lastLetter =workWith.lastLetter;
        }
        else
            yield tempArr[i];
    }
}


    // cyclomatic complexity 
    // M = E-N +1
    // M = 11-9 + 1
    // M = 3

/**
 * Generates dragon secuence
 * @param {*} sec  actual secuence
 * @param {*} control last digit control
 */
function generateSecuence(sec,control){

    var tempArr=[];
    let retorno={};
    for (var i = 0; i < sec.length; i++) {

        tempArr.push(control);
        tempArr.push(sec[i]);

       (control==1) ? control=0 : control=1;
    }
        tempArr.push(control);
        (control==1) ? control=0 : control=1;
    
    retorno ={
        "array": tempArr,
        "lastLetter":control
    }
    return retorno;
}

