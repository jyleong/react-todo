// function add(a,b) {
//     return a+b;
// }

// console.log(add(5,4));

// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
    console.log('Hi ' + name + ', you are ' + age);

}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew

final.forEach((name)=> {
    console.log(name);
});