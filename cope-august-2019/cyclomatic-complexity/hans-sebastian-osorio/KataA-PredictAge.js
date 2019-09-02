/**
 * 
 * My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

https://www.codewars.com/kata/predict-your-age/train/javascript

 * @param {*} age1 
 * @param {*} age2 
 * @param {*} age3 
 * @param {*} age4 
 * @param {*} age5 
 * @param {*} age6 
 * @param {*} age7 
 * @param {*} age8 
 * @returns int
 */

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let result = 0
    for (let index = 0; index < arguments.length; index++) {
      result += arguments[index] * arguments[index];
    }
    return Math.floor( Math.sqrt( result ) / 2 )
}