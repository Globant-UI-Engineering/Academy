/**
 * Wikipedia: The regular paperfolding sequence, also known as the dragon curve sequence, is an infinite automatic sequence of 0s and 1s defined as the limit of the following process:

1
1 1 0
1 1 0 1 1 0 0
1 1 0 1 1 0 0 1 1 1 0 0 1 0 0

At each stage an alternating sequence of 1s and 0s is inserted between the terms of the previous sequence.

Define a generator function paperFold that sequentially generates the values of this sequence.

It will be tested for up to 1 000 000 values.

https://www.codewars.com/kata/5d26721d48430e0016914faa

 * @return string
 */

function* paperFold() {
    let str = ["1"];
    for( let i = 0; i < 1000000; i++ ) {
        let newstr = str[i] + 
            "1" + 
            [...str[i]].reduce((prev,next)=>next+prev)
                .toString()
                .replace(/1/g, '!')
                .replace(/0/g, '1')
                .replace(/!/g, '0')
        str.push(newstr);
        yield str[i];
    }
}