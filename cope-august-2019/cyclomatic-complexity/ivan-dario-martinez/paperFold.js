function* paperFold() {
    var array = [1];
    var totalArray = [];
    for (var i = 0; i < 19; i++) {
        totalArray = [];
        for (var x = array.length; x > 0; x--) {
            if (array[x - 1] == 1) {
                totalArray.push(0);
            } else {
                totalArray.push(1);
            }
        }
        array.push(1);
        array = array.concat(totalArray);
    }
    for (var i = 0; i < array.length; i++) {
        yield array[i];
    }
}