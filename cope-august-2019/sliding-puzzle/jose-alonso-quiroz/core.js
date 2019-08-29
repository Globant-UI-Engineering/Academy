const newTuple = box => brick => {
    let tuple = { box, brick };
    tuple.move = nbrick => newTuple(box)(nbrick);
    tuple.convertToTower = () => newTuple(box)('T');
    return tuple;
}

function* genTuples(bricks) {
    const towerPosition = bricks.length;
    for (let box = 1; 1 < bricks.length; box++) {
        let brick = Math.floor(Math.random() * (bricks.length - 1));
        yield newTuple(box)(bricks[brick] + 1);
        bricks = [...bricks.slice(0, brick), ...bricks.slice(brick + 1)]
    }
    yield newTuple(towerPosition)('T');
}

const initialConfig = (width, height) => {
    const boxes = [...Array(width * height).keys()];
    const bricks = genTuples([...boxes.keys()]);
    let tuples = { items: boxes.map(() => bricks.next().value) };
    tuples.dimentions = { width, height };
    return [tuples, (width * height) - 1, 'PLAY'];
}

const validateOfMoves = (from, to, dimentions) => callbacks => {
    return {
        add: callback => validateOfMoves(from, to, dimention)([callback, ...callbacks]),
        execute: () => callbacks.filter(callback => callback(from, to, dimentions.width, dimentions.height))
    }
};

const checkStatus = tuplesItems => {
    const tuplesWithOutCouple = tuplesItems.filter(item => item.box !== item.brick);
    return tuplesWithOutCouple.length > 1 ? 'PLAY' : 'FINISH';
}

const up = (from, to, width, height) => to === (from - width)

const down = (from, to, width, height) => to === (parseInt(from, 10) + parseInt(width, 10))

const right = (from, to, width, height) => to === (from + 1) && from % width !== 0

const left = (from, to, width, height) => to === (from - 1) && to % width !== 0

const moveTower = oldTuples => oldTowerPosition => newTowerPosition => {
    const brickToMove = oldTuples.items[newTowerPosition].brick;
    const oldTowerTuple = oldTuples.items[oldTowerPosition].move(brickToMove);
    const newTowerTuple = oldTuples.items[newTowerPosition].convertToTower();
    const validator = validateOfMoves(oldTowerTuple.box, newTowerTuple.box, oldTuples.dimentions);
    const validMoves = validator([up, down, right, left]).execute();
    const items = validMoves.length ? Object.assign([...oldTuples.items], {
        [newTowerPosition]: newTowerTuple,
        [oldTowerPosition]: oldTowerTuple
    }) : oldTuples.items;
    const towerPosition = validMoves.length ? newTowerPosition : oldTowerPosition;
    const newTuples = {...oldTuples, items };
    const status = checkStatus(items);
    return newBoard(newTuples, towerPosition, status);
}

const newBoard = (tuples, towerPosition, status) => {
    let board = { tuples, towerPosition, status };
    board.move = status !== 'FINISH' ? moveTower(tuples)(towerPosition) : () => alert('Juego Terminado');
    return board;
}