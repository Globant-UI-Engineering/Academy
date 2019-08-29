document.addEventListener("DOMContentLoaded",function(){

    const minidisplay = document.getElementById('mini-display');
    const display = document.getElementById('display');

    let calc = new Calculator(minidisplay, display);
 
    // document.addEventListener('keyup',(event)=>{
    //     if(event.keyCode >= 48 && event.keyCode <= 57)            
    //         calc.addToDisplay(event.key);
    // });

    //Set Numbers 
    Array.from(document.querySelectorAll('.calc-num')).forEach((btn)=>{
        btn.addEventListener('click',(event)=>{
            console.log(event.target.value);
            // calc.addToMinidisplay(event.target.value);
            // calc.addToDisplay(event.target.value);
            calc.addNumber(event.target.value);
        });
    });

    // document.querySelector('.calc-nums').addEventListener('click',(event)=>{
    //         console.log(event.target);
    //         if (event.target.matches('.calc-num')) {
    //             calc.addToDisplay(event.target.value);
    //         }
    // });
  
    //Set Operations
    Array.from(document.querySelectorAll('.calc-operation')).forEach(element => {        
        element.addEventListener('click', (event) => {
            const operation = (event.target.id).replace("btn-","");
            calc.callOperation(operation);
        })
    })
   

    // document.getElementById('btn-sum').addEventListener('click',(event)=>{
    //     console.log(event.target.value);
    //     calc.prepareOperation("sum");
    // });

    // document.getElementById('btn-subtract').addEventListener('click',(event)=>{
    //     console.log(event.target.value);
    //     calc.prepareOperation("subtract");
    // });

    // document.getElementById('btn-multiply').addEventListener('click',(event)=>{
    //     console.log(event.target.value);        
    //     calc.prepareOperation("multiply");
    // });

    // document.getElementById('btn-divide').addEventListener('click',(event)=>{
    //     console.log(event.target.value);
    //     calc.prepareOperation("divide");
    // });

    document.getElementById('btn-equal').addEventListener('click',(event)=>{
        console.log("equals");
        calc.equals();
    });

    //clean
    document.getElementById("btn-clean").addEventListener('click',(event)=>{
        console.log('clean');
        calc.clean();
    });

});



