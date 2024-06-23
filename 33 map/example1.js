// map() = accepts a callback and applies that function 
//         to each element of an array, then return a new array

// Điểm giống và khác biệt giữa hàm map và forEach
// - map() : sẽ nhận từng phân tử trong mảng làm đối số trong callback và return về một mảng mới nhưng những giá trị ở mảng cũ sẽ không thay đổi
// - forEach() : cũng nhận từng phân tử trong mảng làm đối số trong callback và return về từng phần tử trong mảng, nếu ta tác động vào array thì giá trị của array cũ sẽ mất đi và thay đổi vào callback

const numbers = [1, 2, 3, 4, 5]

const square = (element) => {
    return Math.pow(element, 2)
}

const cube = (element) => {
    return Math.pow(element, 3)
}

const squares = numbers.map(square)
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(squares); // [ 1, 4, 9, 16, 25 ]

