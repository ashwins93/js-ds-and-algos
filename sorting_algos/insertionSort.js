function insertionSort(arr) {
  // function insertBefore(arr, from, to) {
  //   if(from > to) {
  //     // if the source is ahead of destination, insert before to
  //     let tmp = arr[from]

  //     for(let i = from - 1; i >= to; i--) {
  //       arr[i + 1] = arr[i]
  //     }
  //     arr[to]  = tmp
  //   }
  // }

  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j;
    for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }

  return arr
}

console.log(insertionSort([5, 7, 2, 35, 12, 66]))