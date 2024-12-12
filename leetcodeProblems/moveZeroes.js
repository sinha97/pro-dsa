var moveZeroes = function(nums) {
    let first = 0;

    for(let last =0;last<nums.length;last++){
        if (nums[last]!== 0) {
            nums[first]=nums[last]
            first ++
        }
    }

    for(;first<nums.length;first++){
        nums[first]=0
    }
    return nums

};