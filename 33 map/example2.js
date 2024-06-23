const students = ["Hung", "Hiep", "Hieu", "Nguyen", "Huy", "Tuan"];

const upperCase = (element) => {
    return element.toUpperCase();
}

const lowerCase = (element) => {
    return element.toLowerCase();
}

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(students); // [ 'Hung', 'Hiep', 'Hieu', 'Nguyen', 'Huy', 'Tuan' ]
console.log(studentsUpper); // [ 'HUNG', 'HIEP', 'HIEU', 'NGUYEN', 'HUY', 'TUAN' ]
console.log(studentsLower); // [ 'hung', 'hiep', 'hieu', 'nguyen', 'huy', 'tuan' ]
