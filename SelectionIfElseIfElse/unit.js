const promt=require('prompt-sync')();
let num=promt("Enter a number:-");
if(num>=1 && num <= 99) console.log("unit");
else if(num>=100&&num<=999) console.log("hundred");
else if(num>=1000&&num<=9999) console.log("thousand");
else if(num>=10000&&num<=99999) console.log("ten thousand");
else if(num>=100000&&num<=999999) console.log("lakh");
else if(num>=1000000&&num<=9999999) console.log("ten lakh");
else console.log("invalid");