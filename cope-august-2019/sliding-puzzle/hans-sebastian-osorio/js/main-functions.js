
let rowbox = 3; //This must be more than 4, 9, 16, 25
const s = new Set()
let mainElement = document.getElementById('container-main')
var styleCell = document.createElement('style');
document.head.appendChild(styleCell);
let unique = Math.ceil(Math.random() * (rowbox * rowbox))

const initBoard = () => {
    rowbox = parseInt(document.getElementById("difficulty").value)
    s.clear()
    unique = Math.ceil(Math.random() * (rowbox * rowbox))
    mainElement.innerHTML = ""
    
    styleCell.innerHTML = '.cell { width: ' + ((100 / rowbox) - 1) + '%; }'
    
    for (let index = 0; index < (rowbox * rowbox); index++) {
        // Create unique numbers, or no repeat numbers in set collection
        while (s.has(unique)) {
            unique = Math.ceil(Math.random() * (rowbox * rowbox))
        }
        s.add(unique)
        var input = document.createElement("span")
        input.className = "cell"
        input.id = "cell" + index
        input.value = ( ( rowbox * rowbox ) === unique ) ? '' : unique
        input.textContent = ( ( rowbox * rowbox ) === unique ) ? '' : unique
        mainElement.append(input)
    }
}

const changeValue = ( point, newpoint, value ) => {
    document.getElementById('cell' + newpoint).textContent = value
    document.getElementById('cell' + newpoint).value = value
    document.getElementById('cell' + point).textContent = ''
    document.getElementById('cell' + point).value = ''
}

const moveCell = ( event ) => {
    if ( event.target.value != "" ) {
        
        
        let cellId = parseInt(event.target.id.substring(4))

        console.log(cellId, rowbox, cellId - rowbox, document.getElementById('cell' + (cellId - rowbox)));


        // Check LEFT SIDE
        // No left data on left border, so dont check left side. Verify if exist data on left, and verify is empty
        if ( cellId % rowbox != 0 && 
            document.getElementById('cell' + (cellId - 1)) && 
            document.getElementById('cell' + (cellId - 1)).value == '' ) {
            changeValue(cellId, cellId - 1, document.getElementById('cell' + cellId).value)
        }
        // Check RIGHT SIDE
        // No right data on left border, so dont check left side. Verify if exist data on right, and verify is empty
        if ( ( parseInt(cellId) + 1 ) % rowbox != 0 && 
            document.getElementById('cell' + (cellId + 1)) && 
            document.getElementById('cell' + (cellId + 1)).value == '' ) {
            changeValue(cellId, cellId + 1, document.getElementById('cell' + cellId).value)
        }
        // Check UP SIDE
        // No up data on first row, so dont check up side. Verify if exist data on up, and verify is empty
        if ( (cellId - rowbox >= 0) && 
            document.getElementById('cell' + (cellId - rowbox)) && 
            document.getElementById('cell' + (cellId - rowbox)).value == '' ) {
            changeValue(cellId, cellId - rowbox, document.getElementById('cell' + cellId).value)
        }
        // Check DOWN SIDE
        // No down data on last row, so dont check down side. Verify if exist data on down, and verify is empty
        if ( ((cellId + rowbox) < (rowbox * rowbox)) && 
            document.getElementById('cell' + (cellId + rowbox)) && 
            document.getElementById('cell' + (cellId + rowbox)).value == '' ) {
            changeValue(cellId, cellId + rowbox, document.getElementById('cell' + cellId).value)
        }
    }
}
initBoard();
mainElement.addEventListener("click", moveCell);