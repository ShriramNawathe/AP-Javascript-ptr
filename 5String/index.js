let str="Shriram";
// console.log(str);
// console.log(str[0]);
// console.log(str[2]);

console.log("forin for String index");
for(let i in str){
    // console.log(i); // print index no
    console.log(i);
   
}
console.log("forin for String values");
for(let i in str){
    console.log(str[i]);//value in every index of string
}

console.log("Always forFo used String");
for(let key of str){
    console.log(key);//values at every each index od string
}