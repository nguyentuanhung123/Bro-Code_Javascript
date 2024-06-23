// forEach() - method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

const double = (element, index, array) => {
    return array[index] = element * 2; // có return cũng được không có cũng chẳng sao
}

const triple = (element, index, array) => {
    array[index] = element * 3;
}

const square = (element, index, array) => {
    array[index] = Math.pow(element, 2);
}

const cube = (element, index, array) => {
    array[index] = Math.pow(element, 3);
}

const display = (element) => {
    console.log(element);
}

numbers.forEach(double) // [ 2, 4, 6, 8, 10 ]
numbers.forEach(triple) // [ 6, 12, 18, 24, 30 ]
numbers.forEach(square) // [ 36, 144, 324, 576, 900 ]
numbers.forEach(cube) // [ 46656, 2985984, 34012224, 191102976, 729000000 ]
numbers.forEach(display)

console.log(numbers); // hàm này sẽ trả về mảng có kết quả mới nhất sau khi thực hiện toàn bộ các callBack ở trên

