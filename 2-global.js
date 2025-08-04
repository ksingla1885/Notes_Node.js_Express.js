// GLOBALS - NO WINDOWS

// __dirname = path to current directory
// __filename = file name
// require = function to use modules (Common JS)
// module = info about current module (file)
// process = info about env where the program is being executed


console.log(__dirname);
// console.log(__filename);


//prints hello ketan after very second for infinite times
setInterval(() => {
    console.log("Hello ketan");
}, 1000);