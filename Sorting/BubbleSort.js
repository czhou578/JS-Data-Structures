

function swap(arr, x, y) {
  let first = arr[x]
  arr[x] = arr[y]
  arr[y] = first
}

function sortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
}

function sortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j)
      }
    }
  }

}

let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]
console.log('Array: ' + array)

sortDescending(array)
console.log('New Array Descending: ' + array);

sortAscending(array)
console.log('New Array Ascending: ' + array);
