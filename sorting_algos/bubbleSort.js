function bubbleSort(arr) {

  function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  let swapped;

  for(let i = arr.length - 1; i >= 0; i--) {
    swapped = false;
    for(let j = 0; j < i ; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true;
      }
    }
    if(!swapped) break
  }

  return arr
}

console.log(bubbleSort([5, 7, 2, 35, 12, 66]))