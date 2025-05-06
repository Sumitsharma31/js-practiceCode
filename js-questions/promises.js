function sumOfThreeElements(...elements)
{
  return new Promise((resolve,reject)=>{
    if(elements.length > 3 )
{
      reject("Just 3 elements or less are allowed");
    }
    else
{
      let sum = 0;
      let i = 0;
      while(i < elements.length)
{
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: "+sum);
    }
  })
}