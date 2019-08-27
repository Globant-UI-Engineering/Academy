"use strict";

Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}
let timer;

let compareWin = (first,second) => {
    if( first.every( (num,index) => {        
        console.log(num,"==",second[index]);
        return num === second[index];
    }) ){
        alert("Congratulations puzzle completed");
    }
}

let changePieces = (selectedPiece,emptyPiece) => {    
    const emptyParent = emptyPiece.parentElement;
    const pieceParent = selectedPiece.parentElement;
    emptyPiece.style.display = "none";
    pieceParent.appendChild(emptyPiece);
    emptyParent.appendChild(selectedPiece);
    emptyPiece.style.display = "flex";
}

let timeStart = (timer)=>{
    
}

let generatePieces = () => {    
    let numbers = [];
    numbers = Array.from(Array(16), (x,index) => index);
    let winCondition = Array.from(numbers);
    winCondition.push(winCondition.shift());
    numbers.sort(() => Math.random() - 0.5);
    let boxes = document.querySelectorAll(".box","div.puzzle-wrapper");
    for (const index in boxes) {
        if (boxes.hasOwnProperty(index)) {
            let element = document.createElement('div');
            element.innerHTML = (numbers[index] !== 0) ? numbers[index] : "";
            element.className = (numbers[index] !== 0) ? "piece" : "piece empty";
            element.id = 'pc-'+ numbers[index];
            if(numbers[index] !== 0)
                element.addEventListener('click', event =>{
                let emptyPiece = document.querySelector(".empty");
                let posSel = numbers.indexOf(parseInt(event.target.innerHTML));
                let posEmpty = numbers.indexOf(0);
                let rowLength = 4;

                if(posSel-rowLength === posEmpty || posSel+rowLength === posEmpty){//Search top and bottom neighbour                
                    numbers.swap(posSel,posEmpty);
                    changePieces(event.target,emptyPiece);
                    compareWin(numbers,winCondition);
                    console.log(numbers);
                }else if(posSel-1 === posEmpty || posSel+1 === posEmpty){//Search left and right neighbour
                    if(!isSameRow(posSel)(posEmpty)(4)(numbers)){//check if they are in the same row                    
                        console.log("can't move");
                    }
                    numbers.swap(posSel,posEmpty);
                    changePieces(event.target,emptyPiece);
                    compareWin(numbers,winCondition);
                    console.log(numbers);
                }else{
                    console.log("can't move");
                }
            });
            boxes[index].innerHTML = "";
            boxes[index].appendChild(element);
        }
    }
}

let isSameRow = first =>
                    second =>
                        rowLength =>
                            arr => {
                                let row = arr.length / rowLength;                                
                                for (let i = 0; i <= arr.length; i+=row) {
                                    if( i >= first
                                        && i >= second 
                                        && first <= i+row 
                                        && second <= i+row
                                    )
                                    return true;
                                }
                                return false;
                            };

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("btn-restart").addEventListener("click",(event)=>{
        generatePieces();
    });

    generatePieces();
});



