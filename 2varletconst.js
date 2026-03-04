// var can be redeclered and updated its value. globle scope and function scope
 var a= 10;
//  a=10+10;
a=50;
{
    a=100;//globle scope so var can update a value
}
 console.log("var:",a);

//  let can not be redeclaered but can be updated and block scope

let b=10;
// let b=20;//can not redeclared
b=20;//can be updated
{
    let b=100;//block scope so it can not update the value of b
    console.log(`let inside block: ${b}`);//100 .
}
console.log("Let:" + b);//20 . 
//{ inside let only be give value in side brackets not outside of it . in bracket b=100 but outside of it b=20 }


// const can not be redeclared nor be updated and block scope
const c=10;
//c=122;//can not be updated
{
    const c=100;//block scope so it can not update the value of c
    console.log(`const inside block: ${c}`);//100 .
}


console.log(`const: ${c}`);//10 .