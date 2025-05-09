function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); 
counter(); 
counter(); 

//descriptors
//What is a closure in JavaScript?

// <--A closure is a function that remembers variables from its outer lexical scope, even when called outside that scope.-->