// function doSomething() {
//     console.log(this);
//   }
     
//   doSomething();

// let obj = {
//     name:  "Sumit",
//     getName: function(){
//     console.log(this.name);
//   }
// }
   
// obj.getName();



// Explain call(), apply() and, bind() methods.


// 1. call()
/*It’s a predefined method in javascript.
This method invokes a method (function) by specifying the owner object.*/

function sayHello(){
    return "Hello " + this.name;
  }
          
  var obj = {name: "Sandy"};
          
  sayHello.call(obj);
          