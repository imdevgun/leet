/* Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.*/

function reverseInteger(number){
    var newNumber = "";
    var lastDigit;
    while(number > 0){
        lastDigit = (parseInt)(number % 10);
        newNumber += lastDigit;
        number = (parseInt)(number / 10); 
    }
    return newNumber;
}
console.log(reverseInteger(123));

// var number = 1;
// number = (parseInt)(number / 10);
// console.log(number);