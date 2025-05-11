function slowFunction(num) {
  console.log("Calculating...");
  return num * num;
}
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args); // works for primitive args
    if (cache[key]) {
      return cache[key]; // return cached value
    } else {
      const result = fn.apply(this, args); // compute and store result
      cache[key] = result;
      return result;
    }
  };
}

const memoized = memoize(slowFunction);


console.log(memoized(5)); // Calculates and returns 25
console.log(memoized(5)); // Returns 25 from cache without "Calculating..."