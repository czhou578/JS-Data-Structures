let array = [8, 2, 5, 1, 19, 13, 4, 13, 0]

function linearSearch(array, number) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            temp = number
            return temp
        }
    }
    return -1
}

console.log('Was number 0 found? :' + linearSearch(array, 0))
