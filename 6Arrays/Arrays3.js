// discount over every array iteam 10%
let iteam=[250,645,300,900,50]

for(let i of iteam){
    // console.log(i);
    let offer= i/10;
    // console.log(offer);
    let a = i-offer;
    // console.log(a);
    let b=`original iteam value=${i} and 10% discount over ${i}=${offer} and After discounted value=${a}` ;
    console.log(b);
}


for(let i=0;i<iteam.length;i++){
    let o=iteam[i]/10;
    iteam[i]=iteam[i]-o;
}
console.log(iteam);