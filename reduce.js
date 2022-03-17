function reduce(arr, reducer, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue
  // loop though array
for(let i=0;i<arr.length;i++)
  accumulator = reducer(accumulator, arr[i], i, arr);
  return accumulator;
}

let arr = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = reduce(arr, sumReducer);
console.log(sum);
