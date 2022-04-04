nums1 = [-2,1,-3,4,-1,2,1,-5,4]
nums2 = [1]
nums3 = [5,4,-1,7,8]
nums4 = [-2, 1]
var maxSubArray = function(nums) {
    let maxOutput = nums[0];
    let high = nums[0];
    for (let i = 0; i <nums.length;i++) {
        let combined = nums[i];
        if (high < nums[i]) {
            high = nums[i];
        }
        for (let j =i+1; j < nums.length; j++) {
            combined += nums[j];
            if (combined > maxOutput) {
                maxOutput = combined;
            }
        }
    }
    if (high > maxOutput ){
        maxOutput = high;
    }
    return maxOutput;
};

console.log(maxSubArray(nums1));
console.log(maxSubArray(nums2));
console.log(maxSubArray(nums3));
console.log(maxSubArray(nums4));