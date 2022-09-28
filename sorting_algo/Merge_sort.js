// Divide the arrays intp Sub-arrays,each-containing only one element.
// Beacause the array with one element is considered sorted.
// merge the subarrays repeateadly to produce new sorted array until there is only one sub array which is our sorted array.
// time complexity is o[n].

let arr  = [1,3,-1,8];
function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);
    return mergeSort((leftArr),mergeSort(rightArr));
}

//  merging while sorting the array

function merge(leftArr,rightArr){
    let sortedArr =[];
    let i = 0;  //pointer to leftArr
    let j=0;    //pointer to rightArr
    let k =0;

    while(i<leftArr.length && j<rightArr.length) {
        if(leftArr[i]<rightArr[j]) {
            sortedArr[k] = leftArr[i];
            i+=1;
            k+=1;
        } else {
            sortedArr[k] =rightArr[j];
            j+=1;
            k+=1;
        }
    }
    //checking if element will exists in leftArr and updating in sortedArr

    while(i<leftArr.length){
        sortedArr[k] = leftArr[i];
        i+=1;
        k+=1;
    }
    //checking if element still exists in RightArr and updating sortedArr
    while(j<rightArr.length){
        sortedArr[k] = rightArr[j];
        j+=1;
        k+=1;
    }
    return sortedArr;
}
console.log(mergeSort(arr));