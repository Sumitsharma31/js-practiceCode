const person = {fname:"Sumit", lname:"Sharma", age:20};

let text = "";
for (let x in person) {
  text += person[x];
}