let n=Number(prompt("Enter a number"));
for(let i=1;i<=n;i++){
    count=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
        
    }
    if(count==2){
        console.log(+i);
    }
}