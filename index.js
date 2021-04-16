//A. Problem solving
//Bai 1:
const findOppositeNumber = (n, inputNumber) => {
  return n < 4 || n > 20 || n % 2 != 0 || inputNumber < 0 || inputNumber > n - 1
    ? "Error"
    : inputNumber < n / 2
    ? (inputNumber += n / 2)
    : (inputNumber -= n / 2);
};
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, -1));
console.log(findOppositeNumber(100, 6));
console.log(findOppositeNumber(10, 5));
console.log(findOppositeNumber(1, 5));
console.log(findOppositeNumber(5, 5));

//Bai 2:
const merge2String = (s1, s2) => {
  let len = 0;
  let tail = "";
  let len1 = s1.length;
  let len2 = s2.length;
  let rs = "";
  if (len1 > len2) {
    len = len2;
    tail = s1.substring(len2, len1);
  } else if (len1 < len2) {
    len = len1;
    tail = s2.substring(len1, len2);
    tmp1 = s1;
  } else len = len1;
  for (let i = 0; i < len; i++) {
    rs += s1[i] + s2[i];
  }
  rs += tail;
  console.log(rs);
};
merge2String("abc", "123");
merge2String("abc", "0123");
merge2String("abcd", "123");

//B. Code challenge
let count = 3;
const form = document.querySelector("form");
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const luckyNumber = getRandom(1, 10);
form.onsubmit = (event) => {
  event.preventDefault();
  const number = parseInt(form.number.value);
  if (!Number.isInteger(number) || number < 1 || number > 10) {
    alert("Vui lòng nhập lại!Con số bạn nhập không thoả mãn!");
  } else {
    count--;
    if (count > 0) {
      if (number == luckyNumber) {
        alert("Chúc mừng bạn! Bạn đã đoán đúng!");
        location.reload();
      } else {
        alert(`Thật tiếc! Bạn đã đoán sai! Bạn còn ${count} lần đoán!`);
      }
    } else {
      alert(`Thật tiếc! Bạn đã hết lượt!`);
      location.reload();
    }
    form.number.value = "";
  }
};
