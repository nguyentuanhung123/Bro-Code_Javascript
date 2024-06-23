// RANDOM NUMBER GENERATOR

// let randomNum = Math.random();
// let randomNum = Math.floor(Math.random() * 100) + 1;

// tạo 1 biến ngẫu nhiên nằm trong khoảng từ 50 đến 100
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max-min)) + min;

// console.log(randomNum);