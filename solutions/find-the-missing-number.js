function missingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

//Time Complexity: O(n)
