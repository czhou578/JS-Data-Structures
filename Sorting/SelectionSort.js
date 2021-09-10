let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]

function swap(arr, x, y) {
  let first = arr[x];
  arr[x] = arr[y];
  arr[y] = first
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[temp] < arr[j]) {
        swap(arr, temp, j)
      }
    }
  }
}

console.log('Original Array: ' + array);

selectionSort(array)

console.log('Selection Sorted: ' + array);