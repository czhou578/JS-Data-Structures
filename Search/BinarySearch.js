let array = [0, 2, 3, 4, 5, 6]

function binarySearch(number, array, startIdx, endIdx) {
    if (startIdx > endIdx) {
        return false
    }

    const middle = Math.floor((startIdx + endIdx) / 2)

    if (array[middle] == number) return true

    if (number > array[middle]) {
        return binarySearch(number, array, middle + 1, endIdx)
    } else {
        return binarySearch(number, array, startIdx, middle)
    }
}

console.log('Previous Array: ' + array)
console.log('Is 2 in there?: ' + binarySearch(3, array, 0, array.length - 1))
console.log('Is 7 in there?: ' + binarySearch(7, array, 0, array.length - 1))
