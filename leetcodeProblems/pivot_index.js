var pivotIndex = function (nums) {
    let leftSum = 0;
    const completeSum = nums.reduce((acc, num) => acc + num, 0)
    for (let i = 0; i < nums.length; i++) {
        let rightSum = completeSum - leftSum - nums[i];
        if(rightSum===leftSum){
            return i
        }
        leftSum += nums[i];
    }
    return -1
};