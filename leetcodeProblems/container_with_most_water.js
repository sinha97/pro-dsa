var maxArea = function (height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < height) {
        let currheight = Math.min(height[left], height[right]);
        let currWidth = right - left
        let currArea = currWidth * currheight

        max = Math.max(max, currArea)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};