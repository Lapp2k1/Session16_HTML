// bài 1
function square(number) {
  return number * number;
}

// Gọi hàm và hiển thị kết quả
const inputNumber = 5;
const result1 = square(inputNumber);
console.log("Bình phương của", inputNumber, "là", result1);
// bài 2
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCirclePerimeter(radius) {
  return 2 * Math.PI * radius;
}

const circleRadius = 3;
const area = calculateCircleArea(circleRadius);
const perimeter = calculateCirclePerimeter(circleRadius);
console.log("Diện tích hình tròn:", area);
console.log("Chu vi hình tròn:", perimeter);
// bài 3
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const inputFactorial = 5;
const result3 = factorial(inputFactorial);
console.log("Giai thừa của", inputFactorial, "là", result3);
// bài 4
function isDigit(char) {
  return /\d/.test(char);
}

const inputChar = "7";
const isNumber = isDigit(inputChar);
console.log("Ký tự", inputChar, "là số:", isNumber);
// bài 5
function findMin(a, b, c) {
  return Math.min(a, b, c);
}

const num1 = 10,
  num2 = 5,
  num3 = 8;
const minNumber = findMin(num1, num2, num3);
console.log("Số nguyên nhỏ nhất:", minNumber);
// bài 6
function isPositiveInteger(number) {
  return Number.isInteger(number) && number > 0;
}

const inputPositive = 7;
const isPositive = isPositiveInteger(inputPositive);
console.log("Số", inputPositive, "là nguyên dương:", isPositive);
// bài 7
function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

let x = 5,
  y = 10;
[x, y] = swap(x, y);
console.log("Sau khi đổi chỗ:", "x =", x, "y =", y);
// bài 8
function reverseArray(arr) {
  return arr.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log("Mảng sau khi đảo ngược:", reversedNumbers);
// bài 9
function countCharOccurrences(arr, char) {
  const count = arr.filter((item) => item === char).length;
  return count > 0 ? count : -1;
}

const charArray = ["a", "b", "c", "a", "d"];
const charToCheck = "a";
const occurrences = countCharOccurrences(charArray, charToCheck);
console.log("Số lần xuất hiện của ký tự", charToCheck, "là", occurrences);
