
    // cyclomatic complexity 
    // M = E-N +1
    // M = 6-5 + 1
    // M = 2

function unluckyDays(year){
    let unluckDay =0;

    for(let mount=0; mount<12; mount++){
        const date = new Date(year,mount,13);
        if( date.getDay() === 5){
            unluckDay ++;
        }
    }
    return unluckDay;
}
