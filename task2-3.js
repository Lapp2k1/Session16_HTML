// bài 1
function addNumbers(a, b) {
  return a + b;
}

const num1 = 5;
const num2 = 3;
const sum = addNumbers(num1, num2);
console.log("Tổng của", num1, "và", num2, "là", sum);

// bài 2
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCirclePerimeter(radius) {
  return 2 * Math.PI * radius;
}

const circleRadius = 4;
const area = calculateCircleArea(circleRadius);
const perimeter = calculateCirclePerimeter(circleRadius);
console.log("Diện tích hình tròn:", area);
console.log("Chu vi hình tròn:", perimeter);

// bài 3
function isDigit(char) {
  return /\d/.test(char);
}

const inputChar2 = "7";
const isNumber2 = isDigit(inputChar2);
console.log("Ký tự", inputChar2, "là số:", isNumber2);

// bài 4
function isPositiveInteger(number) {
  return Number.isInteger(number) && number > 0;
}

const inputPositive = 7;
const isPositive = isPositiveInteger(inputPositive);
console.log("Số", inputPositive, "là nguyên dương:", isPositive);

// bài 5
function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

let x = 5,
  y = 10;
[x, y] = swap(x, y);
console.log("Sau khi đổi chỗ:", "x =", x, "y =", y);
