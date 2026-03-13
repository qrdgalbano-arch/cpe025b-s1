function sumDeepStrictNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          sum += sumDeepStrictNumbers(arr[i]);
      } else if (typeof arr[i] === 'number' && Number.isFinite(arr[i])) {
          sum += arr[i];
      }
  }

  return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));