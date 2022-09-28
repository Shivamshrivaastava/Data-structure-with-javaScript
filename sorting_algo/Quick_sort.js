// Quick sort uses pivot method to sort
// pivot can be either the last element or the first elemnet in array or mid point of array
// to left subarray and the greater element to the right subarray
// then combine the left array and the pivot element and the right array element to form sorted array
// we will use recursion to repeat the process untill we reach the end of array length 1;
// array.length<2 will be our base case for recursion
// time complexity for quick sort => worst case =>0[n^2]=>quadratic runtime.
// the worst case happens when arrays is sorted
// Average case => o[n, logn]=>n=>linear runtime for loop and logn => because we divide the array into smaller array

let arr = [1, 3, -1, 8];
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(arr));
