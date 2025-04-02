var numberGame = function(nums) {
    let arr = [];
    nums.sort((a, b) => a - b); 

    while (nums.length) {
        arr.push(nums.splice(1, 1)[0]); 
        arr.push(nums.splice(0, 1)[0]); 
    }
    
    return arr; 
};
