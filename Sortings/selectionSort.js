// in this all the looping function work on the index of the element
function selectionSort(arr) {
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }

        if(minIndex !==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}
const newArr=[2,6,4,1,5,3]
console.log(selectionSort(newArr))