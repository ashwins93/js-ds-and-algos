function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partition(arr, left, right) {
  let pivot = Math.floor((left + right) / 2)
  let wall = left

  for (let i = left; i <= right; i++) {
    if (i === pivot) continue

    if (arr[i] < arr[pivot]) {
      swap(arr, wall, i)
      if (wall === pivot) pivot = i
      wall++
    }
  }
  swap(arr, wall, pivot)

  return wall
}

function quicksort(arr, left, right) {
  if (left >= right) return

  let wall = partition(arr, left, right)

  quicksort(arr, 0, wall - 1)
  quicksort(arr, wall + 1, right)

  return arr
}

let arr = [2, 56, 3, 22, 11, 13, 45, 1212, 150, 15, 6223, 12, 523, 35, 532]
// console.log(partition(arr, 0, arr.length - 1))
// console.log(arr)
console.log(quicksort(arr, 0, arr.length - 1))
