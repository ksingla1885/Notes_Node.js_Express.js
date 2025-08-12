const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on('response', () =>{
    console.log(`data recieved`);
});

customEmitter.on('response', () =>{
    console.log(`some other logic here`);
});

customEmitter.on('response', (name, id) =>{
    console.log(`Data recieved user ${name} with id: ${id}`);
});


customEmitter.emit('response', 'ketan', 1885); //it is called after the function only