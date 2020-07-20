function sales(){
    let a=Number(prompt("Enter a number"));
    if(a>=0 && a<=5000){
        r=a*0.02;
        console.log("your 2% reward is: "+r);
    }
    else if(a>=5001 && a<=10000)
    {
        r=a*0.05;
        console.log("your 5% reward is: "+r);
    }
    else if(a>=10001 && a<=20000){
        r=a*0.07;
        console.log("your 7% reward is: "+r);
    }
    else if(a>20000){
         r=a*0.1;
         console.log("your 10% reward is: "+r);
    }
    else{
        console.log("you entered wrong value.")
    }
}
sales();