function welcomelog() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  console.log(`Ngày: ${day}/${month}/${year}`);
}

console.log(welcomelog());
function namez(a) {
  while (a < 2 && a > 8) {
    prompt("Nhập lại số hợp lệ");
  }
  if (a === 8) {
    console.log("chủ nhật");
  } else {
    console.log("Thứ", a);
  }
  return;
}
namez(8);

function cToK(c) {
  let k = c + 273;
  if (k <= 400) {
    console.log(k);
  } else {
    console.log("bị sốt");
  }
}
cToK(300);

function tinhTongBangReduce(arr) {
    // Sử dụng prompt để nhập giá trị của mảng từ người dùng
    const input = prompt("Nhập giá trị của mảng (ví dụ: 10, 15, 20):");
    const parsedArray = input.split(",").map(Number);
  
    // Sử dụng hàm reduce để tính tổng
    const sum = parsedArray.reduce((total, currentValue) => total + currentValue, 0);
  
    return sum;
  }
  
  // Gọi hàm tinhTongBangReduce để tính tổng
  const tong = tinhTongBangReduce();
  console.log(`Tổng của mảng là: ${tong}`);
  