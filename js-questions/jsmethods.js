
let reverseStr = (str)=> {
   let rstr='';
    for (let i = str.length; i >=0 ; i--) {
        rstr+=str.charAt(i)
        
        
    }
    return rstr;
    
}
let result=reverseStr('hello');
console.log(result);
