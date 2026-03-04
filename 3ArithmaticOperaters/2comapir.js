let a="shri";
let b="om";
let c= a===b
console.log(a==b);// false comapir values
console.log(c);
console.log(typeof c)//boolean


let d=5;
let e=5;
if(d===e){
    console.log("eual");
}else{
    console.log("not");
}


let a1=6;
let b1=5;

let c1=a1>b1;//t
let c2=a1!=b1;//t
let c3=a1===b1;//f
let c4= a<b;//f
console.log("check")
// && both true
console.log(c1 && c2)
console.log(c1 && c3)
// || both false - f any one f-f
console.log(c1 || c2)//t || t
console.log(c3 || c4)//f || f