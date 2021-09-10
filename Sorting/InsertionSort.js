
function swap(arr, x, y) {
  let first = arr[x]
  arr[x] = arr[y]
  arr[y] = first
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let previousCounter = i - 1
    while (previousCounter > -1 && arr[previousCounter] > temp) {
      arr[previousCounter + 1] = arr[previousCounter]
      previousCounter--
    } 
    arr[previousCounter + 1] = temp
  }
}

function insertionSortDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let counter = i - 1;
    while (counter > -1 && arr[counter] < temp) {
      arr[counter + 1] = arr[counter];
      counter--
    }

    arr[counter + 1] = temp
  }
}

let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]
console.log('Starting Array: ' + array);

insertionSort(array)

console.log('New Array: ' + array);

insertionSortDescending(array)
console.log('Descending: ' + array);