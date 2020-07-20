let a=Number(prompt("Enter a first number"));
let b=Number(prompt("Enter a second number"));
console.log("1.Addition");
console.log("2.Substraction");
console.log("3.Multiplication");
console.log("4.Division");
console.log("5.Square root");
console.log("6.Percentage");
let c=Number(prompt("Enter a number as 1 to 6"));
switch(c){
    case 1:
        let d=a+b;
        console.log("Addition: "+d);
        break;
    case 2:
        let e=a-b;
        console.log("Substraction: "+e);
        break;
    case 3:
        let f=a*b;
        console.log("Multiplication: "+f);
        break;
    case 4:
        let g=a/b;
        console.log("Division:" +g);
        break;
    case 5:
        let h=(Math.sqrt(a)).toFixed(2);
        console.log("Square root: "+h);
        break;
    case 6:
        let i=(a/100)*100;
        console.log("Percentage: "+i);
        break;
    default:
        console.log("Invalid Number");
}