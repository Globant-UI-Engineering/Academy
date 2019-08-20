/**
 * Find and return how many unlucky days are in the given.
 * Note: Friday 13th or Black Friday is considered as unlucky day. 
 * 
 * @param {Number}  year  The year to be evaluated
 * @return {Number}       The number of unlucky days
 */
function unluckyDays(year){
    // Define an array with all months. In JavaScript, months start from 0 
    let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    // Use filter function to choose only months that have Friday 13th
    const unluckyResults = months.filter(month => new Date(year, month, 13).getDay() === 5);
    // Returns the numbers of black fridays in that year
    return unluckyResults.length;
}