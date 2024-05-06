function sum(array) {
  let sum;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [10, 20, 30, 40, 50];
let arr3 = [1, 3, 5, 7, 9];
console.log(sum(arr)); // 21
console.log(sum(ar2)); // 150
console.log(sum(ar3)); // 25
