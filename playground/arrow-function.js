// sample arrow functions

var square1 = (x) => {
    var result = x * x;
    return result;
};

var square2 = (x) => x * x;

var square3 = x => x * x;

console.log(square1(9));
console.log(square2(9));
console.log(square3(9));

var user = {
    name: 'Jeff',
    sayHi: () => {
        // this will not work; it shows global arguments, not local
        console.log(arguments);
        // this will not work; arrow function doesn't know about 'this'
        console.log(`Hi! I'm ${this.name}`);
    },
    sayHiAlt () {
        // this will work; alternate version knows about arguments
        console.log(arguments);
        // this alter ES6 version of arrow function will work
        console.log(`Hi! I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt();
