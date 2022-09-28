let array = [1,2,3,19,45,67];

// time complexity==>o[n]

function linear_search(arr,target){
    for(let i =0; i<arr.length; i++){
        if(arr[i]===target){
            console.log(arr[i]);
            return i;
        }
    }
    return -1;
}
console.log(linear_search(array,45));