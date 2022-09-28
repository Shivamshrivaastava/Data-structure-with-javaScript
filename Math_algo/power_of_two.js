// Que:--> given a positivr integer value 'n', determine if the number is a power of 2;
// isPowerofTwo(1) = true = 2^0 =1;
// isPowerofTwo(2) = true = 2^1 =2;

function isPowerofTwo(value){
    if(value<1){
        return false;
    }
    while(value>1){
        if(value%2 !==0){
            return false;
        }
        value /=2;
    }
    return true;
}

console.log(isPowerofTwo());