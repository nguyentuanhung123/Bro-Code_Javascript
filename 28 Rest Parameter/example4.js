const combineStrings = (...strings) => {
   return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Nguyen", "Tuan", "Hung")
console.log(fullName);