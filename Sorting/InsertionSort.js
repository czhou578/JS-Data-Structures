
function swap(arr, x, y) {
  let first = arr[x]
  arr[x] = arr[y]
  arr[y] = first
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let previousCounter = i - 1
    while (previousCounter > 0 && arr[previousCounter] > arr[temp]) {
      swap(arr, arr[temp], arr[previousCounter])
    }
  }
}

let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]
console.log('Starting Array: ' + array);

insertionSort(array)

console.log('New Array: ' + array);