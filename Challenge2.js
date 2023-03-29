

const q2 = (nums) => {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== i) return i;        
    }
    return nums.length;
}

console.log(q2([0,1]));