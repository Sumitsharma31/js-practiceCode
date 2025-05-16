function add(a){  
    return function(b){  
        return a + b;  
    };  
}  
// const addaddTwo = add(2);  
console.log(add(2)(3));
