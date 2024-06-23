// PHẢI VIẾT ĐÚNG THỨ TỰ ELEMENT, INDEX, ARRAY

let fruits = ["apple", "orange", "banana", "coconut"];

const display = (element) => {
    console.log(element);
}

const upperCase = (element, index, array) => {
    array[index] = element.toUpperCase();
}

const lowerCase = (element, index, array) => {
    array[index] = element.toLowerCase();
}

const capitalize = (element, index, array) => {
    // const firstCharacter = element.charAt(0).toUpperCase(); // "H"
    // const slicedString = element.slice(1); // "ello"
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

fruits.forEach(display);
fruits.forEach(upperCase); // [ 'APPLE', 'ORANGE', 'BANANA', 'COCONUT' ]
fruits.forEach(lowerCase); // [ 'apple', 'orange', 'banana', 'coconut' ]
fruits.forEach(capitalize); // [ 'Apple', 'Orange', 'Banana', 'Coconut' ]


console.log(fruits);

