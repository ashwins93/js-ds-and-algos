function merge(arr1, arr2) {
  let result = []
  let i = 0,
    j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let middle = Math.floor(arr.length / 2)
  let arr1 = mergeSort(arr.slice(0, middle))
  let arr2 = mergeSort(arr.slice(middle, arr.length))

  return merge(arr1, arr2)
}

// console.log(merge([1, 10, 50, 36, 120, 150], [2, 14, 99, 100]))
console.log(
  mergeSort([2, 56, 3, 22, 11, 13, 45, 1212, 150, 15, 6223, 12, 523, 35, 532])
)
