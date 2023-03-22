/* #######JavaScript Built-in Functions####### */
//toString()
// join() *
// push() *
// pop()
// shift()
// unship()
//reverse()
// slice()
// splice() **
//filter() ** tìm kiếm item thỏa mãn điều kiện return
//các hàm built-in không làm thay đổi dữ liệu ban đầu
// var arr = [2, 5, 4, 1, 3, 7, 8, 9];
// console.log(arr);

// var arr2 = arr.filter(function (value) {
//   return value > 3;
// });
// console.log(arr2);

// var users = [
//   {
//     id: 1,
//     name: "dthieu",
//     school: "ctu",
//   },
//   {
//     id: 2,
//     name: "ththien",
//     school: "fpt",
//   },
//   {
//     id: 3,
//     name: "nttai",
//     school: "ctu",
//   },
//   {
//     id: 4,
//     name: "nhlong",
//     school: "fpt",
//   },
// ];

// var users2 = users.filter(function (item) {
//   return item.school == "fpt";
// });

// console.log(users2);

var arr3 = [3, 5, 7, 4, 6, 1, 2];
// arr3.splice(2, 0, 4, 7);
// console.log(arr3);

//xóa phần tử trong mảng luôn thì dụng cong lặp lùi xuống để giữ index liên tục

for (var i = arr3.length - 1; i >= 0; i--) {
  if (arr3[i] > 3) {
    arr3.splice(i, 1);
  }
}
console.log(arr3);

//sort() sắp xếp theo chữ cái alpha

//foreach()
var f = [];
var s = ["ctu", "ftp", "nct", "fu", "ctu"];
s.forEach(function (currentValue, index, array) {
  if (currentValue == "ctu") {
    f.push(index);
  }
});
console.log(f);

//map() duyệt qua từng phần từ trong mảng và trả về mảng mới;

/* #######Các hàm built-in xử lý ngày tháng####### */
// https://www.w3schools.com/js/js_date_methods.asp
// Dang iso
// var miliseconds = Date.parse("2000-03-15");
// var miliseconds = Date.parse("2000-03");
var miliseconds = Date.parse("2000");
console.log(miliseconds);
var date = new Date(miliseconds);
console.log(date);

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "thursday",
  "Friday",
  "Saturday",
];
var birthday = new Date("2023-03-18");
console.log(days[birthday.getDay()]);
