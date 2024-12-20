function foo(a, b) {
  // Convert null to 0 and undefined to 0
  a = (a === null || a === undefined) ? 0 : a; 
  b = (b === null || b === undefined) ? 0 : b;

  //Check if either value is NaN
  if(isNaN(a) || isNaN(b)) {
    return 0; // Or throw an error, handle appropriately
  }

  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(NaN, 5)); // 0