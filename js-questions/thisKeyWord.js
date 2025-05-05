// function doSomething() {
//     console.log(this);
//   }
     
//   doSomething();

let obj = {
    name:  "Sumit",
    getName: function(){
    console.log(this.name);
  }
}
   
obj.getName();