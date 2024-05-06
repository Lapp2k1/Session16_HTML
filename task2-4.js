// bài 1
function timMin(a, b, c) {
  let n = +prompt("Mời bạn nhập vào 3 số(cách nhau bởi dấu,)")
    .split(",")
    .map(Number);
  let [a, b, c] = n;

  console.log("Số bé nhất là", Math.min(a, b, c));
  return;
}
timMin();
// bài 2
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const inputnum = parseInt(prompt("Nhập một số nguyên dương:"));
if (isPrime(inputnum)) {
  console.log(inputnum, "là số nguyên tố.");
} else {
  console.log(inputnum, "không phải là số nguyên tố.");
}
// bài 3
function Sum10(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pairsWithSum10 = Sum10(arr);
console.log("Các cặp số có tổng bằng 10:", pairsWithSum10);
// bài 4
function countCharacterOccurrences(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (const char of Object.keys(charCount)) {
    console.log(`Ký tự "${char}" xuất hiện ${charCount[char]} lần.`);
  }
}

const inputString = "Hello World";
countCharacterOccurrences(inputString);

// bài 5
function giaiThua(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

const userInput = parseInt(prompt("Nhập một số nguyên dương:"));
if (userInput >= 0) {
  const ketQua = giaiThua(userInput);
  console.log(`Giai thừa của ${userInput} là ${ketQua}`);
} else {
  console.log("Vui lòng nhập một số nguyên dương.");
}

// bài 6
function sapXepTangDan(chuoiSo) {
  const mangSo = chuoiSo.split(" ").map(Number);
  mangSo.sort((a, b) => a - b);
  return mangSo.join(" ");
}

const chuoiSo = prompt("Nhập chuỗi số (cách nhau bằng dấu cách):");
const ketQua = sapXepTangDan(chuoiSo);
console.log(`Chuỗi số sau khi sắp xếp: ${ketQua}`);
// bài 7
function laNamNhuan(nam) {
  if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const namNhap = parseInt(prompt("Nhập một năm:"));
if (laNamNhuan(namNhap)) {
  console.log(`${namNhap} là năm nhuận.`);
} else {
  console.log(`${namNhap} không phải là năm nhuận.`);
}
