
    // cyclomatic complexity 
    // M = E-N +1
    // M = 6-5 + 1
    // M = 2
    
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const ArrayAge=[age1,age2,age3,age4,age5,age6,age7,age8];
    let total=0;

    for(let a=0; a< ArrayAge.length; a++){
        ArrayAge[a]=ArrayAge[a]*ArrayAge[a];
    }

    for(let a=0; a< ArrayAge.length; a++){
        total += ArrayAge[a];
    }

    total = Math.sqrt(total) /2;
    return Math.floor(total);
}