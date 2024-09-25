//Ivan Martinez
function* paperFold() {
    let mainArray = [1];
    for (let i = 0; i < 19; i++) {
        let itemsToAddArray = [];
        for (let reverseItem = mainArray.length; reverseItem > 0; reverseItem--) {
            if (mainArray[reverseItem - 1] == 1) {
                itemsToAddArray.push(0);
            } else {
                itemsToAddArray.push(1);
            }
        }
        mainArray.push(1);
        mainArray = mainArray.concat(itemsToAddArray);
    }
    for (let element = 0; element < mainArray.length; element++) {
        yield mainArray[element];
    }
}