let num=parseInt(prompt("Enter a number"));
let prime1=true;
if(num==1){
    console.log("1 is neither prime nor composite number.");
}
else if(num>1){
    for(i=2;i<num;i++){
        if(num%i==0){
            prime1=false;
            break;
        }
    }
    if(prime1){
        console.log("given number is a prime nuber");
    }
    else{
        console.log("given number is not a prime number");
    }
}