let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

let sumA = a + b + Number(c) + Number(d) + e;

let f = '1';
let g = 15;
let h = 8;
let i = "1";

let sumB = Number(f) * g * h * Number(1);

let result = sumA / sumB;
console.log(result);

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.unshift("Matt");
people.pop();
people.push("Thomas");
let peopleCopy = people.slice(people.indexOf("Mary") + 1);
console.log(peopleCopy);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Anna");
console.log(people);
let withBob = people.concat("BoB");
console.log(withBob);
console.log(people);

let multiDimAr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];

console.log(
    multiDimAr[1][1] + " " +
    multiDimAr[4][2] + " " +
    multiDimAr[5][3] + " " +
    multiDimAr[2][3] + " " +
    multiDimAr[2][1]
);
