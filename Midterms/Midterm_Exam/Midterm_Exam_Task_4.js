function power(base, exp) {
  // Base case
  if (exp === 0) {
    return 1;
  } 
  
  else if (exp < 0) {
    return 1 / base * power (base, exp + 1);
  }
  // Recursive case
  else {
    return base * power(base, exp - 1);
  }
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2));