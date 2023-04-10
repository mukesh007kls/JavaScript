const prompt=require('prompt-sync')();
var day=prompt("enter the day:-")
var month=prompt("enter the month:-");

if((day<=20&&month<=6)||(day>=20&&month>=3)&&(day<=31)){
    console.log(true);
}else{
    console.log(false);
}