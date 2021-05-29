// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
};


function destructivelyPrependDriver(name) {
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
    drivers.pop();
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
};

function appendDriver(name) {
    const array = [drivers[0], drivers[1], drivers[2], name];
    return array;
};

function prependDriver(name) {
    let array2 = [name, drivers[0], drivers[1], drivers[2]];
    return array2;
};

function removeLastDriver() {
    let newArray = [drivers[0], drivers[1]];
    return newArray;
};

function removeFirstDriver() {
    let newArray2 = [drivers[1], drivers[2]];
    return newArray2;
};