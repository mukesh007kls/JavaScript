num1=Math.round(Math.random()*100);
num2=Math.round(Math.random()*100);
num3=Math.round(Math.random()*100);

result1=num1+num2*num3;
result2=num1%num2+num3;
result3=num1/num2 +num3;
result4=num1*num2+num3;

if(result1<result2&&result1<result3&&result1<result4) min=result1;
else if(result2<result1&&result2<result3&&result2<result4) min=result2;
else if(result3<result1&&result3<result2&&result3<result4) min=result3;
else min=result4;

if(result1>result2&&result1>result3&&result1>result4) max=result1;
else if(result2>result1&&result2>result3&&result2>result4) max=result2;
else if(result3>result1&&result3>result2&&result3>result4) max=result3;
else max=result4;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

console.log("min:-"+min);
console.log("max:-"+max);