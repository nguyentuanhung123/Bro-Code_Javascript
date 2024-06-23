let numbers = [1, 2, 3, 4, 5];

const double = (element, index, array) => {
    return element * 2;
}

const triple = (element, index, array) => {
    console.log(element * 3);
}

numbers.forEach(double); // [ 1, 2, 3, 4, 5 ]
numbers.forEach(triple) // 3 6 9 12 15
console.log(numbers); // [ 1, 2, 3, 4, 5 ]