// arr = [3,4,1,8,1,7]
// findme =1
// currIndex=0
// -> output = 2
// if not found = -1

// Itreative approach

function firstOcc(arr, findme, currIndex) {
    while (currIndex < arr.length) {
        if (arr[currIndex] == findme) {
            return currIndex
        }
        currIndex += 1
    }
    return -1
}

// Recurssive approach
function recursiveFirstOcc(arr,findme,currIndex){
    if(arr.length===currIndex){
        return -1
    }

    if(arr[currIndex]== findme){
        return currIndex
    }

    return recursiveFirstOcc(arr,findme,currIndex+1)
}