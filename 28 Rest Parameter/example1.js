// rest parameter = (...rest) allow a function work with a variable
//                 number of arguments by bundling them into an Array

//                 spread = expands an array into seperate elements
//                 rest = bundles seperate elements into an array

const openFridge = (...foods) => {
    console.log(foods); // [ 'pizza', 'hambuger', 'hotdog', 'sushi', 'ramen' ]
    console.log(...foods); // pizza hambuger hotdog sushi ramen (spread)
}

const getFood = (...foods) => {
    return foods
}

const food1 = "pizza";
const food2 = "hambuger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5)
const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods); // [ 'pizza', 'hambuger', 'hotdog', 'sushi', 'ramen' ]