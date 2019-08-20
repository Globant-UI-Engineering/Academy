/**
 * This function is an implementation of some grandfather's algorithm
 * to predict how old people would get.
 * The algorith does the following steps: 
 * 1. Multiply each number by itself that represents the age of 
 * great-grandparent died.
 * 2. Add them all together.
 * 3. Take the square root of the result.
 * 4. Divide by two.
 * 
 * @param {Number}   age1   Age of the first great-grandparent died.
 * @param {Number}   age2   Age of the second great-grandparent died.
 * @param {Number}   age3   Age of the third great-grandparent died.
 * @param {Number}   age4   Age of the fourth great-grandparent died.
 * @param {Number}   age5   Age of the fith great-grandparent died.
 * @param {Number}   age6   Age of the sixth great-grandparent died.
 * @param {Number}   age7   Age of the seventh great-grandparent died.
 * @param {Number}   age8   Age of the eighth great-grandparent died.
 * @return {Number}         The predicted age              
 * 
 */
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
    // Build the reducer function to multiply each number by itself and accumulate them all together
    const reducer = (accumulator, currentValue) => accumulator + (currentValue * currentValue);
    // Converts arguments to an array to be able to use the reduce function
    let args = Array.from(arguments);
    // Stores the reduce function result
    let sum =  args.reduce(reducer,0);
    // Stores the square root of the result
    let square = Math.sqrt(sum);

    // Divides by two the square result and Returns the largest integer less than or equal to the result
    return Math.floor(square/2);
}