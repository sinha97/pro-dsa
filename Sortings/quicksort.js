function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotindex = getPivotElement(arr, low, high)

        quickSort(arr, low, pivotindex - 1)
        quickSort(arr, pivotindex + 1, high)
    }
    return arr
}

function getPivotElement(arr, low, high) {
    let pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]] /// swaping methos
        }

    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}