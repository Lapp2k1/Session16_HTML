
function isPalindrome(str) {
    // Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
    str = str.toLowerCase().replace(/[a-zA-Z0-9_\\-]/g, "");
  
    // Đảo ngược chuỗi
    let reversed = str.split('').reverse().join("")
  
    // So sánh chuỗi gốc với chuỗi đảo ngược
    return str === reversed;
  }

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canak, Panam!")); 
