//Ivan Martinez
function unluckyDays(year) {
    var totalDays = 0;
    for (let i = 1; i < 13; i++) {
        var date = new Date(year + "-" + i + "-13");
        if (date.getDay() === 5) {
            totalDays++;
            console.log(date);
        }
    }
    return totalDays;
}