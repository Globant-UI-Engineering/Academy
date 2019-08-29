//Ivan Martinez
function unluckyDays(year) {
    var total = 0;
    for (i = 1; i < 13; i++) {
        var d = new Date(year + "-" + i + "-13");
        if (d.getDay() === 5) {
            total++;
            console.log(d);
        }
    }
    return total;
}