let carBrands = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
carBrands.sort();
console.log(carBrands);

let fruits = ["apple","banana","kiwi"];
fruits.push("orange");

console.log(fruits);
fruits.pop();
console.log(fruits);

let animals = ["monkey", "horse", "dog"];
animals.sort();
console.log(animals);
animals.unshift("cat");
console.log(animals);

let longString ="mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
fruits = longString.split("/");
fruits.forEach(element => {
    document.write(element + "<br>");
    console.log(element);
});