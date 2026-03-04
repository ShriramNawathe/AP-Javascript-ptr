// Object is a collection of multiple primitive data types num string boolen etc . in side bracet does have key and value
// let obj={
//     key:value,
// }
// console.log(obj.key);//value
let obj={
    fname:"shri",
    age:26,
    contact:123456,
    gmail:"s@g",
}

console.log(obj.fname);//shri
console.log(obj.age);//
console.log(obj.contact);//
console.log(obj.gmail);//

// we have to print in loop all obj.fname obj.age ... all values

console.log("For in loop for objects");
for (let key in obj){
    // console.log(i); // i prints key values name age contact gmail means i is loop here
    // obj[key]=obj[fname]
    // obj[key]=obj[age]
    // obj[key]=obj[contact]
    // obj[key]=obj.[gmail]
    console.log(obj[key]);
    
}

for (let key in obj){
    console.log(`key=${key} and value=${obj[key]}`);
}
