let arr=["iron","Spy","hulk","Thor"]

console.log(arr);
console.log(typeof arr);

console.log("Normal for loop for array");
for(let i=0;i<arr.length;i++){
    // console.log(i);// gives only index
    // arr[0] arr[1] we can pass so we gwt every index value
    console.log(arr[i]);
}

console.log("Try for of loop in arrays");
for(let i of arr){
    // like i=arr[i] where every time i value 0 to end updates and give result
    console.log(i);
}

console.log("Always use For in loop for arrays");

for(let i in arr){
    // console.log(i);
    console.log(arr[i]);
}





