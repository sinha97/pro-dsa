const arr = [6, 5, 3, 1, 8, 7, 2, 4]

function mergeSorting(array) {
    if (array.length === 1) return array

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSorting(left), mergeSorting(right))
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSorting(arr))