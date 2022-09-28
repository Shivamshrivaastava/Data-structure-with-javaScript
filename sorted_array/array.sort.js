let arr = ['a','d','e','g','z','b','c'];
arr.sort()
// it will sort the array
console.log(arr);

let test_arr =[3,1,5,2,4]
// in ascending order
test_arr.sort(function(a,b){return a-b})
console.log(test_arr);

//  in descending order

test_arr.sort(function(a,b){return b-a});
console.log(test_arr);