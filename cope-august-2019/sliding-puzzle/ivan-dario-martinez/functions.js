//Ivan Martinez
function cellClick(x, y) {
    var clickedContainer = document.getElementById("cont" + (x) + (y))
    var containerElements = [
        document.getElementById("cont" + (x) + (y - 1)),
        document.getElementById("cont" + (x + 1) + (y)),
        document.getElementById("cont" + (x - 1) + (y)),
        document.getElementById("cont" + (x) + (y + 1))
    ];

    containers = containerElements.filter(element => element != null);

    if (clickedContainer.getElementsByClassName("cell")[0].id != "cellxx") {
        for (container of containers) {
            if (validate(container)) {
                swapCells(container, clickedContainer);
                break;
            }
        }
    }
    validateCells();
}

let validate = (cell) => {
    var cellElement = cell.getElementsByClassName("cell")[0];
    if (cellElement.id == "cellxx") {
        return true;
    } else {
        return false;
    }
}

function swapCells(containerEmpty, contanierWithValue) {
    var temp = contanierWithValue.getElementsByClassName("cell")[0];
    contanierWithValue.appendChild(document.getElementById('cellxx'));
    containerEmpty.appendChild(temp);
}

function mix() {
    for (let index = 0; index < 64; index++) {
        var containerEmpty = document.getElementById('cellxx').parentNode;
        var x = Math.floor((Math.random() * 4) + 1);
        var y = Math.floor((Math.random() * 4) + 1);
        var contanierValue = document.getElementById(`cont${x}${y}`);
        swapCells(containerEmpty, contanierValue);
    }
    validateCells();
}

function restart() {
    var container = document.getElementById(`cont44`);
    container.appendChild(document.getElementById(`cellxx`));
    for (let x = 1; x < 5; x++) {
        for (let y = 1; y < 5; y++) {
            if (x !== 4 || y !== 4) {
                var container = document.getElementById(`cont${x}${y}`);
                container.appendChild(document.getElementById(`cell${x}${y}`));
            }
        }
    }
    validateCells();
}

function validateCells() {
    var containers = document.getElementsByClassName("columnContainer");
    for (const element of containers) {
        if (element.getElementsByClassName("cell")[0].id.substring(4, 6) == element.id.substring(4, 6)) {
            element.getElementsByClassName("cell")[0].classList.add("cellOk");
        } else {
            element.getElementsByClassName("cell")[0].classList.remove("cellOk");
        }
    }
}