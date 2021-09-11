
let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]

function swap(arr, x, y) {
  let first = arr[x]
  arr[x] = arr[y]
  arr[y] = first
}

function partition(arr, x, y) {
  let pivot = arr[Math.floor((x + y) / 2)]
  let left
  let right

  while (left < right) {
    while (arr[left] < pivot) {
      left++
    }

    while(arr[right] > pivot) {
      right--
    }

    if (left <= right) {
      swap(arr, left, right)
      left++;
      right--
    }
  }
  return left
}

function quickSort(arr, left, right) {
  var index

  if (arr.length > 1) {
    index = partition(arr, left, right)

    if (left < index - 1) {
      partition(arr, left, right)
    }

    if (right > index) {
      partition(arr, left, right)
    }
  }

  return arr

}