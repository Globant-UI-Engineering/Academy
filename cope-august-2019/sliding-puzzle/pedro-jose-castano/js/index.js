/**
 * This javascript code uses the object literals notation to organize
 * the code related within the sliding puzzle game.
 */
var slidingPuzzle = {

/**
   * Flag to know whether there is a puzzling in progress.
   * 
   * @type {Boolean}
   */
    puzzling: false,

    /**
     * Initializes the sliding puzzle.
     * 
     * @return {undefined} 
     */
    init : function init() {
        var blocks = document.querySelectorAll('.blocks', '#table');
        for (let block of blocks) {
            block.onclick = () => clickBlock(parseInt(block.getAttribute("data-row")), parseInt(block.getAttribute("data-column"))); 
        }
        
        this.startPuzzle();
        document.onmousemove = () => this.stopPuzzle();
        document.onkeypress = () => this.stopPuzzle();
        let newGameButton = document.querySelector('.new-game', '.main-container');
        newGameButton.onclick = () => this.puzzle();

    },

/**
 * Given a row and column of a block, generates the four potential adjacent positions
 * of this block.
 * 
 * @param {Number} row The row where the block is 
 * @param {Number} column The row where the block is
 * 
 * @return {Object} The generator object that contains an array within the row and column 
 */
adjacentBlocks: function* adjacentBlocks(row, column) {
	yield [row -1, column]; // up
	yield [row, column + 1]; // right
	yield [row + 1, column]; // down 
	yield [row, column - 1]; // left
},

/**
 * Returns whether the pair of the row, column corresponds
 * to a valid block
 * 
 * @param {Number} row The row where the block is
 * @param {Number} column The column where the block is
 */
isValidBlock: function isValidBlock(row, column) {
    let pattern = /^([1-3])$/;
    return pattern.test(row) && pattern.test(column) ;
},

/**
 * Given a row and column, generate potential adjacent block positions (row, column)
 * 
 * @param {Number} row The row where the block is
 * @param {Number} column The column where the block is
 * 
 * @return {Object} The generator object that contains an array within the row and column
 * Example:  [1,3]
 */
getAdjacentBlocks: function* getAdjacentBlocks(row, column){
	yield* this.adjacentBlocks(row, column);
},

/**
 * Perform validations when the user clicks a block, 
 * if any adjacent block is the empty block, then, 
 * swaps blocks.
 * 
 * @param {Number} row The row where the block is
 * @param {Number} column The column where the block is
 * 
 * @return {undefined} 
 */
clickBlock: function clickBlock(row, column) {
    let adjacentBlock = this.getAdjacentBlocks(row, column);
    let result = adjacentBlock.next();
    while (!result.done) {
        
        let [row1, column1] = result.value;
        let idAdjacentBlock = `cell${row1}${column1}`;

        if (this.isValidBlock(row1, column1) && document.getElementById(idAdjacentBlock).className === "emptyBlock") {
            this.swapBlocks(`cell${row}${column}`, idAdjacentBlock);
        }
        result = adjacentBlock.next();
    }
},

/**
 * Swaps the given blocks. 
 * @param {Object} idBlock1 
 * @param {Object} idBlock2 
 *  
 * @return {undefined}
 */
swapBlocks: function swapBlocks(idBlock1, idBlock2){
    let block1 = document.getElementById(idBlock1);
    let classNameBlock1 = block1.className;

    let block2 = document.getElementById(idBlock2);
    block1.className = block2.className;
    block2.className = classNameBlock1;
    this.addClickEventListener(block1);
    this.addClickEventListener(block2);
},

/**
 * Adds the click event listener to the given HTML element block
 * 
 * @param {Object} The HTML element block
 */
addClickEventListener: function addClickEventListener(block) {
    if (block.className === "emptyBlock") {
        block.onclick = null;
    } else {
        block.onclick = () => this.clickBlock(parseInt(block.getAttribute("data-row")), parseInt(block.getAttribute("data-column"))); 
    }  
},

/**
 * Puzzles randomly the pieces of the game.
 * 
 * @return {Number} The rumber in the range (1,3)
 */
getRandomNumber: function getRandomNumber() {
    return Math.floor(Math.random()*3 + 1);
},

/**
 * Puzzles randomly the pieces of the game.
 * 
 * @return {undefined}
 */
puzzle: function puzzle(){
    let row, column, row2, column2;
    for (let i=1; i<=3*3; i++) {
        row = this.getRandomNumber();
        column = this.getRandomNumber();
        row2 = this.getRandomNumber();
        column2 = this.getRandomNumber();
        this.swapBlocks(`cell${row}${column}`, `cell${row2}${column2}`);
    }
},

/**
 * Start puzzling pieces indefinetely every 600 ms.
 * 
 * @return {undefined}
 */
startPuzzle: function startPuzzle() {
    this.puzzle();
    this.stopPuzzle();
    this.puzzling = window.setInterval(() => this.puzzle(), 600);
},

/**
 * Stop puzzling pieces.
 * 
 * @return {undefined}
 */
stopPuzzle: function stopPuzzle() {
    clearInterval(this.puzzling);
}
};

/**
 * Execute this javascript code after the HTML document is ready
 */
(function () {
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            slidingPuzzle.init(); 
      }
    }  
})();
