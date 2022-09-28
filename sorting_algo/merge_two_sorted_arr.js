const arr1 =[1,2,3];
const arr2 = [4,5,6,7,8]

// keep complexity=>o[n]=> linear runtime;
// keep three counters i,j,k to maintain track of arr1,arr2 and sorted arr

function Merge_sorted_arrays(arr1, arr2) { 
    let sortedarr = [];
    let i = 0;    //arr1 pointer
    let j = 0;     //arr2 pointer
    let k = 0;       //sortedarr pointer
    while (i < arr1.length && j < arr2.length) { 
        if (arr1[i] < arr2[j]) {
            sortedarr[k] = arr1[i];
            i += 1;
            k += 1;
        } else {
            sortedarr[k] = arr2[j];
            j += 1;
            k += 1;
        }
    }
// if any element in arr1 is not used and arr1 is still not reached the end , it will traverse all remaing elememts
while (i < arr1.length) {
    sortedarr[k] = arr1[i];
    i += 1;
    k += 1;
}
// if any element in arr2 is not used and arr2 is still not reached the end , it will traverse all remaing elememts
    while (j < arr2.length) {
        sortedarr[k] = arr2[j];
        j += 1;
        k += 1;
    }
    return sortedarr;
}

console.log(Merge_sorted_arrays(arr1, arr2));