let array = [1, 3, 19, 45, 67];
// for binary search , array should be sorted
// for binary search , we take a start point, a end point and a middle point in terms of index
// and then check for the target == middle[index];

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    let middle = Math.floor((start + end) / 2);
    if (target === array[middle]) {
      return middle;
    } else if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, 67));
