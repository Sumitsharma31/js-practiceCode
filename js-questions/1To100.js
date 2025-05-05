
// write a js program to print 1 to 100 number without using number in code



/* test */

// console.log('a'.charCodeAt(0));
// console.log('`'.charCodeAt(0));

// console.log("d".charCodeAt(0));
// console.log("a".charCodeAt(0));
// console.log("b".charCodeAt(0));
// to get 1 value for i
// console.log(`for i value :${"a".charCodeAt(0)-"`".charCodeAt(0)}`);

// to get value for end
// console.log(`for ending number value : ${"d".charCodeAt(0)-"a".charCodeAt(0)+"b".charCodeAt(0)}`);









//By using while loop 

// let i = 'a'.charCodeAt(0) - '`'.charCodeAt(0); 
// let end = 'd'.charCodeAt(0) - 'a'.charCodeAt(0) + 'b'.charCodeAt(0); 
// while (i < end) {
//     // console.log(i);
//     i += 'b'.charCodeAt(0) - 'a'.charCodeAt(0); 
// }


//By using For loop 


let srt = 'a'.charCodeAt(0) - '`'.charCodeAt(0); 
let end = 'd'.charCodeAt(0) ; 
console.log(srt,end);

for (let i = srt; i <= end; i++) {
    console.log(i);
    
    
}


// for (let srt = 0; srt <= 100;   srt++) {
//     console.log(i);
    
// }
