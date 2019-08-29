//Ivan Martinez
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    var age = 0;
    for (let args = 0; args < arguments.length; args++) {
        age += arguments[args] * arguments[args];
    }
    return parseInt(Math.sqrt(age) / 2);
}