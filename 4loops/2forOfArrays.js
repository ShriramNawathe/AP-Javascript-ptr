// array
let num1=[1,2,3,4,5,6,7,8,9,10];
// if else
// for(let i=0;i<num1.length;i++){
//    if(num1[i]%2===0){
//     console.log("even num ",num1[i]);
// }else{
//     console.log("odd num",num1[i]);
// };
// };

// for of for arrays
// for(let i in num1){
//     if (num1[i]%2===0) {
//         console.log(`Even no in array= ${num1[i]}`);
//     } else {
//                 console.log(`Odd no in array= ${num1[i]}`);

//     }
// }

for(let i of num1){
    if (i%2===0) {
        console.log(`Even no in array= ${i}`);
    } else {
                console.log(`Odd no in array= ${i}`);

    }
};