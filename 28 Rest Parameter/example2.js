const sum = (...numbers) => {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;

}

const total = sum(1,7,3,17,82);

console.log(`Your total is $${total}`);