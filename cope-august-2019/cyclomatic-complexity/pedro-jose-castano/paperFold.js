/**
 * Generator function that sequentially generates the values of regular 
 * paperfolding sequence.
 * 
 * @return {Undefined}
 */
function* paperFold() {
    // Define the sequence with the first one
    let sequences = ["1"];

    // Add the next sequence to the array
    for(let i=0; i<10000; i++) {
        // Add the previous sequence, plus a new 1, plus the reversed previous sequence
        sequences.push(sequences[i] + "1" + sequences[i].split("").reverse().map(x => 1-x).join(""));
        yield sequences[i];
    }
}