let user = { name: "John", age: 30 };

console.log("age" in user); // true, user.age exists
console.log("blabla" in user); // false, user.blabla doesn't exist



let user2 = {};
console.log(user2.noSuchProperty === undefined); // true means "no such property"
