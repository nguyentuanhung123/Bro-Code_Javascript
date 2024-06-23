const getAverage = (...numbers) => {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;

}

const result = getAverage(75, 100, 85, 90, 50);
console.log(result);