/**
 * Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
Note: In Ruby years will start from 1593.

https://www.codewars.com/kata/unlucky-days/train/javascript

 * @param {*} year
 * @returns int
 */
function unluckyDays(year) {
    let cont = 0
    let dt = new Date( "1-13-" + year )
    let i = 1
    do {
        cont = (dt.getDay() === 5) ? cont + 1: cont
        dt.setMonth(i)
        i++  
    } while (i <= 12)
    return cont  
}