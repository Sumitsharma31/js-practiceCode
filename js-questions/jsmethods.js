
// let reverseStr = (str)=> {
//    let rstr='';
//     for (let i = str.length; i >=0 ; i--) {
//         rstr+=str.charAt(i)
        
        
//     }
//     return rstr;
    
// }
// let result=reverseStr('hello');
// console.log(result);


//largest number of an array

const array =[12,15,41,12,24,31,8];

function findLargeNumberOfArray(array) {
    
const largest = array.reduce((max, current) => current > max ? current : max);
return largest;

}
console.log(findLargeNumberOfArray(array));
