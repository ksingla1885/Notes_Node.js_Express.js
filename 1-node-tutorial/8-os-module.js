const os = require("os");

//info about current user
// const user = os.userInfo();
// console.log(user);


//uptime of a system
// console.log(`Time is ${os.uptime} seconds`);


//current status of OS Module
const currOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}
console.log(currOS);
