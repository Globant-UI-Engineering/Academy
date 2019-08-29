const settings = document.getElementById('player-settings');
const board = document.getElementById('board');
let virtualBoard = {}

settings.onsubmit = event => {
    event.preventDefault();
    const boardSize = event.target['board-size'].value.split('x');
    virtualBoard = newBoard(...initialConfig(...boardSize));
    virtualBoard.tuples.items.forEach(setBoard(virtualBoard));
}

const setBoard = boardToSet => {
    board.innerHTML = '';
    board.appendChild(document.createElement('figure'));
    return (element, index) => {
        const box = document.createElement('div');
        if (element.brick !== 'T') {
            const brick = document.createElement('button');
            brick.setAttribute('value', index);
            brick.innerHTML = element.brick;
            brick.onclick = brickOnClick;
            box.appendChild(brick);
        }
        const width = boardToSet.tuples.dimentions.width;
        const height = boardToSet.tuples.dimentions.height;
        box.style.width = (400 / width) + 'px';
        box.style.height = (400 / height) + 'px';
        board.appendChild(box);
    }
};


const brickOnClick = event => {
    virtualBoard = virtualBoard.move(event.target.value);
    virtualBoard.tuples.items.forEach(setBoard(virtualBoard));
}