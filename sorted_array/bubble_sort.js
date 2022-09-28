let arr = [1,3,-1,11,-19,0];

function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i =0 ; i <arr.length-1; i++){
            if(arr[i]<arr[i+10]){
                let container;
                container =arr[i];
                arr[i] = arr[i+1];
                arr[i+1] =container;
                swapped = true;
            }
        }
    } while(swapped);
    return arr;
}

console.log(bubbleSort(arr));
