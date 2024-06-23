// callback = a function is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network request
//            3. Interacting with a database

//            "Hey, when you're done, call this next"


const hello = (callback) => {
    console.log("hello");
    callback()
}

const goodbye = () => {
    console.log("goodbye");
}

const leave = () => {
    console.log("leave");
}

const wait = () => {
    console.log("wait");
}

hello(leave)
goodbye();