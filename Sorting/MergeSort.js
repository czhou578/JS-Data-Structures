let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]

function merge (left, right) {
    let array = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())
        }

        array.push(right.shift())
    }

    return [...array, ...left, ...right]
}

function mergeSort (array) {
    const half = array.length / 2

    if (half < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left, array))

}

console.log('Previous array: ' + array)
mergeSort(array)
console.log('New array: ' + array)
