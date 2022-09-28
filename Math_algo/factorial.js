// Que:--> Given a integer 'n', find factoial of numbers:
// factorial(0) or 0! ==> 1
// factorial(1) or 1! ==> 1
// time complexity is o[n] due to loops

function factorial(n) {
    let result = 1;
    if(n<2) {
        return result;
    }
    for(let i =2; i<=n; i++){
        result = result *1;
    }
    return result;
}
console.log(factorial(3));