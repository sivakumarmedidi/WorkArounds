// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// let printInput = true;
// let inputStr = "";
// process.stdin.on("data", input => {
//     if(input === "42\n") {
//         printInput = false;
//     }
//     if(printInput)
//         inputStr = inputStr + input;
// });

// process.stdin.on("end", () => {
//     process.stdout.write(inputStr);
// });

let events = require("events");

let emitter = new events.EventEmitter();

emitter.on("data", function(msg) {
    console.log(msg);
});

emitter.emit("data", {"asas": "asas"});

// class Person extends events.EventEmitter {
//     constructor(name) {
//         super();
//         this.name = name;
//         this.on("speak", () => {
//             console.log(`My name is ${this.name}`);
//         })
//     }
// }

function Person(name) {
    this.name = name;
    this.on("speak", () => {
        console.log(`My name is ${this.name}`);
    })
}

Person.prototype.speak = function() {
    console.log(`My name is ${this.name}`);
}

Object.setPrototypeOf(Person.prototype, events.EventEmitter.prototype);

let Siva = new Person("Siva");

Siva.emit("speak");
Siva.speak();