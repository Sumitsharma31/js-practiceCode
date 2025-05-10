/*
let reverseStr = (str) => {
    let rstr = '';
    for (let i = str.length; i >= 0; i--) {
        rstr += str.charAt(i)


    }
    return rstr;

}
let result = reverseStr('hello');
console.log(result);
*/


/*
// to find largest element of an array
const array = [12, 15, 41, 12, 24, 31, 8];
function findLargeNumberOfArray(array) {

    const largest = array.reduce((max, current) => current > max ? current : max);
    return largest;

}
console.log(findLargeNumberOfArray(array));
*/

// Using Math.max and Spread Operator
const array = [12, 15, 41, 12, 24, 31, 8];
const largest = Math.max(...array);
console.log("Largest number:", largest); 



//using for each method
let max = array[0];
array.forEach(num => {
  if (num > max) {
    max = num;
  }
});
console.log("Largest number:", max); 