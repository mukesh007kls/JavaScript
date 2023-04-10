let min=1000;
let max=99;

for(let i=1;i<=5;i++){
    let n=Math.floor(Math.random()*999) + 100;
    console.log(n);
    if(max<n){
        max=n;;
    }
    if(min>n){
        min=n;
    }
}
console.log("min:-"+min);
console.log("max:-"+max);