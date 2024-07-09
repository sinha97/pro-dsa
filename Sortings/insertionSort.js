function insertionSort(array) {

    // start from second position
    for (let i = 0; i < array.length; i++) {
        let current = array[i]
        let j = i-1
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }
    return array
}
const arr = [1, 6, 7, 4, 2, 9]
console.log(insertionSort(arr))