// objects are set of multiple primitive data type as key value pair
// arrays and functions are also objects in JavaScript

// let obj{
// key: value
// };
// var let
// 
const students={
    fname:"Shri",
    age:26,
    marks:99,
    ispass:"true",
};
console.log(students);// give object value
console.log(typeof students);// give object value

console.log(students.fname);
console.log("[] use",students["fname"])
console.log(typeof students.fname);

//in const inside object value can be updated

students.age+=2;//28
students.age=30;
console.log(students.age);

// clg=> enter
// console.log(students.ispass);
console.log(students["ispass"]);