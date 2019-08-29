//Ivan Martinez
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i] * arguments[i];
    }

    return parseInt(Math.sqrt(total) / 2);
}