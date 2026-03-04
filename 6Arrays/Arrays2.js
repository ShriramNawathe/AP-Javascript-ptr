let fh= ["Iron","Thor","Loki","Odin"]

console.log("New heros");

for(let i=0;i<fh.length;i++){
    console.log(fh[i]);
}

console.log("Always us for Fo for arrays");

for(let i of fh){
    console.log(i);
}

console.log("addition of total array");

let n=[87,62,45,6,5,25,78]
console.log("we need to find this arrays total sum="+n);
let sum=0;
for(let i of n){
    // console.log(i);
    sum=sum+i;
}
console.log(`Total Sum of array is ${sum}`);

console.log("Finding Avg");
let nLength=n.length;
console.log(`total array lenghth is ${nLength}`);
// array length
//sum divided by arr length 
let avg=sum/nLength;
console.log(`avg of total array 308/7 is ${avg}`);
