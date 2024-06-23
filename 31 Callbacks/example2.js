const sum = (callback, x, y) => {
    let result = x + y;
    callback(result)
}

const displayConsole = (params) => {
    console.log("Params: ", params);
}

const displayPage = (params) => {
    document.getElementById("myH1").textContent = params
}

// sum(displayConsole, 5, 8)
sum(displayPage,6, 9)

