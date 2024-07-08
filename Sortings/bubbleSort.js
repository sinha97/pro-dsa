const arr = [4, 2, 1, 3];

function bublSort(arr) {
    let isSwap;

    do {
        isSwap = false
        for (let r = 0; r < arr.length; r++) {
            if (arr[r] && arr[r + 1] && arr[r] > arr[r + 1]) {
                let temp = arr[r]
                arr[r] = arr[r + 1]
                arr[r + 1] = temp

                isSwap = true
            }
            // r++
        }
    } while (isSwap) {
        return arr
    }
}

console.log(bublSort(arr))