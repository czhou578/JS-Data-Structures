let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]



function binarySearch(number, array, startIdx, endIdx) {
    if (startIdx > endIdx) {
        return false
    }

    const middle = Math.floor((startIdx + endIdx) / 2)

    if (array[middle] == number) return true

    



}