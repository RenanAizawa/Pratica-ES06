const fullName = {fullName: (array) => { return `${array.firstName} ${array.lastName}`}};
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    // fullName : () => { return `${this.firstName} ${this.lastName}`},
}
// console.log(person);
 const person01 = Object.assign({}, person, fullName)
console.log(person01);
