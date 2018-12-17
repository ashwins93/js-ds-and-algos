function selectionSort(arr) {
  function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  let minIndex;

  for(let i = 0; i < arr.length; i++) {
    minIndex = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if(minIndex !== i) swap(arr, i, minIndex)
  }

  return arr
}

console.log(selectionSort([5, 7, 2, 35, 12, 66]))